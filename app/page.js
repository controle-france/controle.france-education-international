"use client"
import Layout from "./api/Layout";
import Header from "./Header";
import Head from 'next/head';
import { useState, useEffect } from 'react';
import "./globals.css"
import { useForm } from 'react-hook-form';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Logo from "./Logo";
import { useRouter } from "next/navigation";

const numberWords = {
  1: 'Un',
  2: 'Deux',
  3: 'Trois',
  4: 'Quatre',
  5: 'Cinq',
  6: 'Six',
  7: 'Sept',
  8: 'Huit',
  9: 'Neuf',
  10: 'Dix',
  11: 'Onze',
  12: 'Douze',
  13: 'Treize',
  14: 'Quatorze',
  15: 'Quinze',
  16: 'Seize',
  17: 'Dix-sept',
  18: 'Dix-huit',
  19: 'Dix-neuf',
  20: 'Vingt',
  21: 'Vingt et un',
  22: 'Vingt-deux',
  23: 'Vingt-trois',
  24: 'Vingt-quatre',
};

export default function Home() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [startDate, setStartDate] = useState(null); // Stocke la date sélectionnée
  const [captchaText, setCaptchaText] = useState('');
  const [sessionNumber] = useState('3114534'); // Numéro de session correct
  const [captchaSolution, setCaptchaSolution] = useState(null);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const router = useRouter();

  function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const captchaString = `${numberWords[num1]} et ${numberWords[num2]}`;
    setCaptchaText({ text: captchaString, sum: num1 + num2 });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const onSubmit = (data) => {
    // Vérifier que startDate est défini avant d'essayer de le diviser
    if (!startDate) {
      alert("Veuillez sélectionner une date.");
      return;
    }
  
    // Format de la date : DD-MM-YYYY
    const enteredDateParts = `${startDate.getDate().toString().padStart(2, '0')}-${(startDate.getMonth() + 1).toString().padStart(2, '0')}-${startDate.getFullYear()}`.split('-');
    const enteredDate = new Date(enteredDateParts[2], enteredDateParts[1] - 1, enteredDateParts[0]); // Convertir en objet Date
    
    // Dates correctes
    const correctDate = new Date(2024, 9, 20); // 20 octobre 2024
    const validAlternateDate = new Date(2024, 9, 9); // 12 septembre 2024
    const anotherValidDate = new Date(2024, 8, 10); // 10 septembre 2024
  
    // Vérification de la date
    if (
      parseInt(data.captcha, 10) === captchaText.sum &&
      data.sessionNumber === sessionNumber &&
      (enteredDate.toDateString() === correctDate.toDateString() || 
       enteredDate.toDateString() === validAlternateDate.toDateString() || 
       enteredDate.toDateString() === anotherValidDate.toDateString()) // Ajout de la nouvelle date ici
    ) {
      router.push('/connect'); // Remplacez '/page' par le chemin réel de votre page
    } else {
      alert('Captcha, numéro de session ou date incorrect.');
    }
  };
  

  const [afficherVerification, setAfficherVerification] = useState(false);

  const gererClicLien = (e) => {
    e.preventDefault();
    setAfficherVerification(true); // Affiche la page de vérification
  };

  return (
    <Layout>
    <div>
      <Head>
        <title>Vérification - France Éducation International</title>
      </Head>

      <div className="bg-white shadow-md rounded-lg max-w-lg mx-auto p-10 mb-0">
        
        <div className="bg-yellow-100 p-4 rounded mb-4">
          <h2 className="text-green-900 font-bold">ATTENTION, TRES IMPORTANT:</h2>
          <p className="text-green-900 mt-2">
            Il est impératif de bien vérifier que l'URL sur laquelle mène le QR Code est bien{' '}
            <span className="font-bold">
              https://controle.france-education-international.fr/
            </span>
            <br />
            Veuillez porter une attention vigilante à ce qu'il n'y ait pas une lettre de moins ou de plus.
          </p>
        </div>

        <a href="#" onClick={gererClicLien} className="block bg-blue-800 text-white text-center py-2 rounded">
          Pour contrôler l'authenticité de l'attestation, cliquez ici.
        </a>

        {afficherVerification && (
          <>
            <div className="m-4">
              <h1 className="text-2xl justify-center font-semibold text-center text-gray-700 mb-6">
                Consultation et vérification des résultats d&apos;une attestation du TCF
              </h1>
            </div>
            <div className="border bg-gray-200 border-gray-300 min-w-screen justify-center h-16">
              <p className="text-center mt-3">Renseignez les informations présentes sur l'attestation</p>
            </div>

            <div className="min-h-screen bg-gray-100 p-6">
              <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex p-2">
                    <label className="block mb-2 text-gray-700">Numéro de cession</label>
                    <input
                      type="text"
                      className={`w-full p-2 border ${errors.sessionNumber ? 'border-red-500' : 'border-gray-300'} rounded mb-4`}
                      {...register('sessionNumber', { required: true })}
                    />
                    {errors.sessionNumber && <p className="text-red-500 text-sm mb-4">Ce champ est requis</p>}
                  </div>

                  <div className="flex p-2">
                    <label className="block mb-2 text-gray-700">Date de session</label>
                    <input
                      type="text"
                      className={`w-full p-2 border ${errors.startDate ? 'border-red-500' : 'border-gray-300'} rounded mb-4`}
                      value={startDate ? `${startDate.getDate().toString().padStart(2, '0')}-${(startDate.getMonth() + 1).toString().padStart(2, '0')}-${startDate.getFullYear()}` : ''}
                      readOnly
                      placeholder=""
                      onClick={() => setShowCalendar(!showCalendar)}
                    />

                    {showCalendar && (
                      <Calendar
                        onChange={(date) => {
                          setStartDate(date);
                          setShowCalendar(false); // Ferme le calendrier après sélection
                        }}
                        value={startDate}
                      />
                    )}
                  </div>

                  <div className="bg-blue-100 text-blue-700 p-4 rounded mb-6">
                    <div className="flex ml-2">
                      <span className="font-semibold  text-blue-800"><Logo /></span>
                      <p className="font-semibold mt-0 text-blue-800"> Où trouvez le numéro d'attestation et la date de session ?</p>
                    </div>
                    <><div><p className=" ml-4 text-blue-800"> Attention, pour le numéro d'attestation, vous ne devez saisir que la partie qui se trouve après le dernier tiret ("-"). </p></div>
                    <div><p className=" ml-2 text-blue-600"> cliquez ici pour voir où se trouve le numéro d'attestation et la date de session sur l'attestation dématérialisée</p></div></>

                  </div>


                  <div className="mb-4">
                    <div className="mb-2 p-3 rounded text-xl font-semibold text-center bg-purple-200" style={{
                      
                      border: '2px solid #87ceeb',
                      textShadow: '1px 1px 2px gray',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                      color: '#2c3e50',
                    }}>
                      {captchaText.text}
                    </div>
                    <input
                      type="number"
                      placeholder=""
                      className="w-full p-2 border border-gray-300 rounded mb-4"
                      {...register('captcha', { required: true })}
                    />
                    {errors.captcha && <p className="text-red-500 text-sm mb-4">Ce champ est requis</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-700 transition"
                  >
                    rechercher l'attestation
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
    </Layout>
  );
}

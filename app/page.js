"use client"


import Header from "./Header";
import Head from 'next/head';

import { useState , useEffect } from 'react';
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

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setShowCalendar(false);
  };


  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const router = useRouter();

  const [date, setDate] = useState(null);
  const [captchaText, setCaptchaText] = useState('');
  const [sessionNumber, setSessionNumber] = useState('');

  const [startDate, setStartDate] = useState(new Date());



  // Exemple de chaîne de caractères pour le captcha
  const captchaString1 = "vingt";
  const captchaString2 = "un";
  const correctAnswer = 21; // La somme des deux chaînes de caractères

 
  function generateCaptcha()
    {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const captchaString = `${numberWords[num1]} et ${numberWords[num2]}`;
    setCaptchaText({ text: captchaString, sum: num1 + num2 });
  };

  useEffect(() => {
    generateCaptcha();
    // Mettre à jour les champs une fois les valeurs prêtes
    setValue('sessionNumber', sessionNumber); // Définit sessionNumber
    setValue('startDate', startDate); // Définit startDate
  }, [setValue, sessionNumber, startDate]);
  const albert = "1234567"
  sessionNumber=albert
  const daten ="12-09-2024"

  //data.sessionNumber
   const onSubmit = (data) => {
    if (parseInt(data.captcha, 10) === captchaText.sum && albert  && daten) {
      router.push('/page2'); // Remplacez '/nextPage' par le chemin réel de votre page
    } else {
      alert('Captcha, numéro de cession ou date incorrect');
    }
  };
  const [afficherVerification, setAfficherVerification] = useState(false);

  const gererClicLien = (e) => {
    e.preventDefault();
    setAfficherVerification(true); // Affiche la page de vérification
  };
  
    return (
      <div>
        <Head>
          <title>Vérification - France Éducation International</title>
      
        </Head>
        
        
        
          <div className="bg-white shadow-md rounded-lg max-w-lg mx-auto p-10 mb-0">
          <Header/>
            <div className="bg-yellow-100 p-4 rounded mb-4" >
              <h2 className="text-green-900 font-bold">ATTENTION, TRES IMPORTANT:</h2>
              <p className="text-green-900 mt-2">
                Il est impératif de bien vérifier que l'URL sur laquelle mène le QR
                Code est bien{' '}
                <span className="font-bold">
                  https://controle.france-education-international.fr/
                </span>
                <br />
                Veuillez porter une attention vigilante à ce qu'il n'y ait pas une
                lettre de moins ou de plus (par exemple : 2 "l" ou un "e" à la fin de
                "international").
              </p>
            </div>
           
        <a
          href="#"
          onClick={gererClicLien}
          className="block bg-blue-800 text-white text-center py-2 rounded"
        >
          Pour contrôler l'authenticité de l'attestation, cliquez ici.
        </a>
                  
      {/* Contenu affiché en dessous après le clic */}
      {afficherVerification && (  <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Avertissement */}
       

        {/* Logo point d'interrogation */}
        <div className="flex justify-center mb-4">
          
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Input numéro de cession */}
          <div className="flex p-2">
          <label className="block mb-2 text-gray-700">Numéro de cession</label>
          <input
            type="text"
            className={`w-full p-2 border ${errors.sessionNumber ? 'border-red-500' : 'border-gray-300'} rounded mb-4`}
            {...register('sessionNumber', { required: false })}
          />
          </div>
          {errors.sessionNumber && <p className="text-red-500 text-sm mb-4">Ce champ est requis</p>}

          {/* Input DatePicker */}
          <div className="flex p-2">
          <label className="block mb-2 text-gray-700">Date de session</label>
          <input
            type="text"
            className={`w-full p-2 border ${errors.sessionNumber ? 'border-red-500' : 'border-gray-300'} rounded mb-4`}
            {...register('sessionNumber', { required: true })}
            onClick={() => setShowCalendar(!showCalendar)}
            readOnly
            placeholder="" // Assure-toi que le placeholder est vide
          />

          {showCalendar && (<Calendar
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            placeholderText="Sélectionner une date"
          />
          )}
          </div>

          <div className="bg-blue-100 text-blue-700 p-4 rounded mb-6">
          <p className="font-semibold">
           <span><Logo/></span> Attention, pour le numéro d'attestation, vous ne devez saisir que la partie qui se trouve après le dernier tiret ("-").
          </p>
          <p className="mt-2 text-blue-600">
            <span>Cliquez ici pour voir où se trouve le numéro d'attestation et la date de session sur l'attestation dématérialisée</span>
          </p>
        </div>

          {/* Captcha avec style personnalisé */}
          <div className="mb-4">
            <div className="mb-2 p-3 rounded text-xl font-semibold text-center" style={{
              background: 'linear-gradient(to right, #add8e6, #87ceeb)',
              border: '2px solid #87ceeb',
              textShadow: '1px 1px 2px gray',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              color: '#2c3e50',
            }}>
              {captchaText.text}
            </div>
            <input
              type="number"
              placeholder="Entrez la somme en chiffres"
              className="w-full p-2 border border-gray-300 rounded"
              {...register('captcha', { required: true })}
            />
          </div>
          {errors.captcha && <p className="text-red-500 text-sm mb-4">Captcha requis</p>}

          {/* Bouton de soumission */}
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
            Rechercher l'attestation
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="text-center mt-6 text-gray-500">
        © France Éducation international
      </footer>
    </div>
      )}
    
    
     
    
          </div>
        
       
      </div>
    )
}

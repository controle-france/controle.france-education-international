"use client"
import Image from "next/image";
import Head from 'next/head';
import Link from "next/link";
import { useState , useEffect } from 'react';
import "./globals.css"
export default function Home() {
    // Génère deux nombres aléatoires pour le CAPTCHA
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [captchaMessage, setCaptchaMessage] = useState('');


  // Générer deux nombres aléatoires au chargement
  useEffect(() => {
    generateRandomNumbers();
  }, []);

  // Fonction pour générer de nouveaux nombres aléatoires pour le CAPTCHA
  const generateRandomNumbers = () => {
    const randomNumber1 = Math.floor(Math.random() * 20);
    const randomNumber2 = Math.floor(Math.random() * 20);
    setNumber1(randomNumber1);
    setNumber2(randomNumber2);
    setCaptchaMessage('Saisissez la somme des deux nombres en chiffres');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswer = number1 + number2;
    if (parseInt(inputValue) === correctAnswer) {
      alert('CAPTCHA correct!');
      setErrorMessage('');
      generateRandomNumbers(); // Régénérer un nouveau CAPTCHA après réussite
      setInputValue(''); // Réinitialiser le champ d'entrée
    } else {
      setErrorMessage('La somme est incorrecte, veuillez réessayer.');
    }
  };


  const [afficherVerification, setAfficherVerification] = useState(false);

  const gererClicLien = (e) => {
    e.preventDefault();
    setAfficherVerification(true); // Affiche la page de vérification
  };
  
    return (
      <>
        <Head>
          <title>Vérification - France Éducation International</title>
        </Head>
        <div className="flex flex-col items-center  min-h-screen bg-gray-100">
          <div className="bg-white shadow-md rounded-lg max-w-lg mx-auto p-6">
            <div className="flex justify-between items-center mt-0 ">
              <div className="bg-blue-200 w-1/4  items-center">
              
              <section>
            <img
                  src="/france-logo.png"
                  alt="France Éducation International"
                  className=""
                  width={400} 
                  height={300}
                  layout="responsive" 
                />
                </section>
                </div>
              <div className="text-right w-3/4">
                
                <img src="/tcf-logo.png" alt="TCF Logo" 
                
                width={800} 
                height={600}
                layout="responsive" />
              </div>
            </div>
            <div className="bg-yellow-100 p-4 rounded mb-4">
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
      {afficherVerification && (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
          <h1>Contrôle de l'authenticité de l'attestation</h1>
          <p>Merci de fournir les informations pour vérifier l'authenticité.</p>
          <form>
            <div className="flex m-2 border-black-300">
            <label>Numéro d'attestation :</label>
            <input type="text" placeholder=" " className="border border-black p-2 rounded-md w-24 text-center" />
            </div>
            <div className="flex m-2">
            <label>Date de la session :</label>
            <input type="date" placeholder="" className="border border-black p-2 rounded-md w-24 text-center" />
            </div>
            <div className="bg-blue-200 p-4 rounded mb-4">
            <p className="text-blue-800 font-bold" > Ou trouver le numero d'attestation et la date de cession ?</p>
            <p className="text-blue-600" >Attention , pour le numero d'attestation , vous ne devez saisir que la partie qui se trouve apres le dernier test ("-").</p>
            
              <li className="text-blue-600">cliquez ici pour voir ous e trouve le numéro d'attestation et
                 et la date de cession sur l'attestation dématerialisée
                </li>
            
            </div>
          </form>
           {/* Boîte d'instruction en haut */}
      <div className="bg-blue-100 border border-blue-300 p-4 rounded-md mb-6 w-full max-w-lg text-center">
        
        </div>
  
        {/* CAPTCHA Section */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
          <h1 className="text-xl font-semibold mb-4">Vérification CAPTCHA</h1>
          <p className="mb-4 text-lg text-gray-700">{captchaMessage}</p>
          <div className="flex items-center mb-4">
            <span className="font-bold text-lg">{number1}</span>
            <span className="mx-2 text-lg">+</span>
            <span className="font-bold text-lg">{number2}</span>
            <span className="mx-2 text-lg">=</span>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="border border-gray-300 p-2 rounded-md w-24 text-center"
              placeholder="?"
            />
          </div>
  
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
  
          
            <Link href="/page2"><button
              type="submit"
              className="bg-blue-800 text-white p-2 rounded-md hover:bg-blue-700"
            >
              Rechercher l'attestation
            </button>
            </Link>
          
        </div>
        </div>
      )}
    </div>
    
     
    
          </div>
        
       
      </>
    )
}

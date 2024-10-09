"use client"

import { useState, useEffect } from 'react';

// Fonction de conversion des chiffres en texte français
const numberToText = (number) => {
  const frenchNumbers = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix"];
  return frenchNumbers[number];
};

export default function CaptchaPage() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [userInput, setUserInput] = useState('');

  // Génère un nouveau captcha à chaque session
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const first = Math.floor(Math.random() * 11);
    const second = Math.floor(Math.random() * 11);
    setFirstNumber(first);
    setSecondNumber(second);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {/* Message en haut */}
        <div className="bg-blue-100 text-blue-800 p-4 mb-6 rounded-lg text-sm">
          <p>
            Attention, pour le numéro d'attestation, vous ne devez saisir que la partie qui se trouve après le dernier tiret ("-").
          </p>
          <ul className="list-disc pl-5">
            <li>
              Cliquez ici pour voir où se trouve le numéro d'attestation et la date de session sur l'attestation dématérialisée.
            </li>
          </ul>
        </div>

        {/* Captcha avec image de fond */}
        <div className="mb-6">
          <div className="flex justify-center items-center bg-gray-200 p-4 mb-4 rounded-lg bg-no-repeat bg-cover" 
               style={{ backgroundImage: 'url("/images/captcha-background.jpg")' }}>
            {/* Captcha en lettres */}
            <span className="font-bold text-lg text-green-600">
              {numberToText(firstNumber)} et {numberToText(secondNumber)}
            </span>
          </div>
          <label htmlFor="captcha" className="block font-medium text-gray-700">
            Saisissez la somme des deux nombres en chiffres
          </label>
          <input
            type="text"
            id="captcha"
            className="mt-2 p-2 w-full border rounded-md"
            placeholder="Somme en chiffres"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>

        {/* Bouton de recherche */}
        <div className="text-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center justify-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 111.5-1.5 7.5 7.5 0 010 1.5z" />
            </svg>
            <span>Rechercher l'attestation</span>
          </button>
        </div>

        {/* Pied de page */}
        <div className="text-center text-xs text-gray-400 mt-4">
          © France Éducation international
        </div>
      </div>
    </div>
  );
}


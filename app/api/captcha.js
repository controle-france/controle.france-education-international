// pages/api/captcha.js
import { createCanvas } from 'canvas';
import numberToWords from 'number-to-words';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default async function handler(req, res) {
  const canvas = createCanvas(200, 60);
  const ctx = canvas.getContext('2d');

  // Générer deux nombres aléatoires entre 1 et 50
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const captchaText = numberToWords.toWords(num1) + ' et ' + numberToWords.toWords(num2); // Convertir les nombres en lettres

  // Ajouter du background
  ctx.fillStyle = '#d9e7ff'; // Couleur de fond
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Ajouter du texte
  ctx.font = '30px Sans';
  ctx.fillStyle = '#333';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(captchaText, canvas.width / 2, canvas.height / 2);

  // Dessiner du bruit
  for (let i = 0; i < 5; i++) {
    ctx.strokeStyle = `rgba(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, 0.5)`;
    ctx.beginPath();
    ctx.moveTo(getRandomInt(0, canvas.width), getRandomInt(0, canvas.height));
    ctx.lineTo(getRandomInt(0, canvas.width), getRandomInt(0, canvas.height));
    ctx.stroke();
  }

  // Envoyer l'image en réponse
  res.setHeader('Content-Type', 'image/png');
  res.status(200).send(canvas.toBuffer());
}

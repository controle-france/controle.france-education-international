// components/Logo.js
const Logo = () => {
    return (
      <svg
        width="30" // Taille réduite
        height="30" // Taille réduite
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2" // Marge à droite pour espacer le logo du texte
      >
        <circle cx="50" cy="50" r="35" fill="none" stroke="#3490dc" strokeWidth="5" /> {/* Cercle sans fond avec bordure bleue */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="50" // Ajuste la taille du texte
          fill="#3490dc" // Couleur bleue pour le point d'interrogation
        >
          ?
        </text>
      </svg>
    );
  };
  
  export default Logo;
  
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Consultation et vérification des résultats du TCF
        </h1>

        {/* Bande Jaune */}
        <div className="bg-yellow-200 text-black p-4 mb-6 rounded-lg text-sm text-center">
          <p>
            Résultats pour le <strong>« TCF Canada - Test de connaissance du français pour le Canada »</strong> du <strong>09/10/2024</strong> pour le candidat n°<strong>3114534</strong>.
          </p>
          <p>
            Nom : <strong>TCHUIGOUA DJIKI</strong>
          </p>
          <p>
            Prénom : <strong>DAVY MICHAEL</strong>
          </p>
        </div>

        {/* Image du Candidat */}
        <div className="flex justify-center mb-6">
          <Image
            src="/photo.PNG"  // Remplacez par le chemin de votre image
            alt="Photo du candidat"
            width={150}
            height={150}
            className="rounded-md border border-gray-300"
          />
        </div>

        {/* Tableau des résultats */}
        <table className="table-fixed w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Épreuve</th>
              <th className="border px-4 py-2">Score/Note</th>
              <th className="border px-4 py-2">Niveau CECR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Compréhension orale</td>
              <td className="border px-4 py-2">526</td>
              <td className="border px-4 py-2">C1</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Compréhension écrite</td>
              <td className="border px-4 py-2">15</td>
              <td className="border px-4 py-2">C1</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Expression écrite</td>
              <td className="border px-4 py-2">567</td>
              <td className="border px-4 py-2">C1</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Expression orale</td>
              <td className="border px-4 py-2">19</td>
              <td className="border px-4 py-2">C2</td>
            </tr>
          </tbody>
        </table>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-400 mt-4">
          © France Éducation international
        </div>
      </div>
    </div>
  );
}

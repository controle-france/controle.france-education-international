// pages/verification.js
export default function Verification() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Consultation et vérification des résultats d&apos;une attestation du TCF
          </h1>
  
          <div className="mb-4">
            <label
              htmlFor="numero-attestation"
              className="block text-sm font-medium text-gray-700"
            >
              Numéro d&apos;attestation
            </label>
            <input
              type="text"
              id="numero-attestation"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Entrez le numéro d'attestation"
            />
          </div>
  
          <div className="mb-4">
            <label
              htmlFor="date-session"
              className="block text-sm font-medium text-gray-700"
            >
              Date de la session
            </label>
            <input
              type="date"
              id="date-session"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
  
          <div className="bg-blue-200 p-4 rounded mb-4">
                <Logo/>
            <p className="text-blue-800 font-bold" > Ou trouver le numero d'attestation et la date de cession ?</p>
            <p className="text-blue-600" >Attention , pour le numero d'attestation , vous ne devez saisir que la partie qui se trouve apres le dernier test ("-").</p>
            
              <li className="text-blue-600">cliquez ici pour voir ous e trouve le numéro d'attestation et
                 et la date de cession sur l'attestation dématerialisée
                </li>
            
            </div>
        </div>
      </div>
    );
  }
  
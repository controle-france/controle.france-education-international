// components/Layout.js
import React from 'react';
import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow p-4">
      <Header/>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>

      <footer className="bg-white shadow p-4 text-center">
        <p className="text-gray-600">© France Éducation international</p>
      </footer>
    </div>
  );
};

export default Layout;

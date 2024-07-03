// pages/index.tsx
'use client'
import React, { useState } from 'react';

const Home: React.FC = () => {
  return (
    <main>
    <title> Import </title>
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <form className="bg-white p-6 rounded-lg shadow-lg">
        <label htmlFor="arquivo" className="block text-gray-700 font-bold mb-2">Escolha um arquivo:</label>
        <input type="file" id="arquivo" name="arquivo"  className="block w-full text-gray-900 py-2 px-3 border border-gray-300 rounded-md mb-4" />
        
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Enviar
        </button>
      </form>
    </div>
    </main>
  );
};

export default Home;

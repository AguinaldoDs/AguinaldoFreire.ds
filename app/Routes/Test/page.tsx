// pages/index.tsx
'use client'
import React, { useState } from 'react';

const Home: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('arquivo', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <label htmlFor="arquivo" className="block text-gray-700 font-bold mb-2">Escolha um arquivo:</label>
        <input type="file" id="arquivo" name="arquivo" onChange={handleFileChange} className="block w-full text-gray-900 py-2 px-3 border border-gray-300 rounded-md mb-4" />
        
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Home;

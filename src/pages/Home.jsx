import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <main className='min-h-screen flex flex-col'>
        <Navbar />
        <nav className='bg-blue-600 text-white py-4 shadow-md'>
            <div className='flex justify-center gap-8'>
                <button
                    onClick={() => navigate('/publicaciones/taller')}
                    className='hover:underline'
                >
                    Taller
                </button>
                <button
                    onClick={() => navigate('/publicaciones/tecnologia')}
                    className='hover:underline'
                >
                    Tecnología
                </button>
                <button
                    onClick={() => navigate('/publicaciones/practica')}
                    className='hover:underline'
                >
                    Prácticas Supervisadas
                </button>
            </div>
        </nav>
    </main>
  );
};
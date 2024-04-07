'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function FacebbokPage() {
  const [fieldEmail, setFieldEmail] = useState('');
  const [fieldPassword, setFieldPassword] = useState('');

  function handleSubmit() {
    const user = {
      fieldEmail,
      fieldPassword
    };

    console.log(user);
  }
  return (
    <div className=' h-screen bg-gray-300 '>
      <main className='container mx-auto grid grid-cols-1 md:grid-cols-2 h-full max-w-5xl px-10'>
        <div className='flex flex-col justify-center'>
          <h1 className='font-semibold text-blue-700 text-6xl'>Facebook</h1>
          <p className='hidden md:flex text-black mt-5 text-xl max-w-2xl lg:max-w-full md:text-2xl tracking-wide md:tracking-normal pr-6'>
            O Facebook ajuda você a se conectar e compartilhar com as pessoas
            que fazem parte da sua vida.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center md:items-end'>
          <div className='flex flex-col bg-white p-4 gap-4 rounded-md min-w-96 shadow-xl'>
            <input
              className='px-2 py-4 border border-gray-400 text-gray-600 rounded-md outline-blue-500'
              type='text'
              placeholder='Email ou telefone'
              onChange={e => setFieldEmail(e.target.value)}
              value={fieldEmail}
            />
            <input
              className='px-2 py-4 border border-gray-400 text-gray-600 rounded-md outline-blue-600'
              type='password'
              placeholder='Senha'
              onChange={e => setFieldPassword(e.target.value)}
              value={fieldPassword}
            />

            <button
              onClick={handleSubmit}
              className='py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-600'
            >
              Entrar
            </button>
            <Link className='text-blue-600 text-center' href={'#'}>
              Esqueceu a senha?
            </Link>
            <span className=' bg-gray-300 h-0.5'></span>
            <div className='flex justify-center items-center w-full'>
              <button className='px-3 py-3 bg-green-600 rounded-md text-white font-bold max-w-60 hover:bg-green-500'>
                Criar nova conta
              </button>
            </div>
          </div>
          <p className='text-gray-500 max-w-96 mt-4 text-center'>
            <Link className='text-gray-900 font-bold' href={'#'}>
              Crie uma Página
            </Link>{' '}
            para uma celebridade, uma marca ou uma empresa.
          </p>
        </div>
      </main>
    </div>
  );
}

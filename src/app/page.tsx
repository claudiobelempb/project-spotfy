import { Facebook, Instagram, Menu, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ImgBrand from '../../public/images/spotify-logo.png';

export default function Home() {
  return (
    <>
      <header className='flex items-center justify-between fixed bg-black w-full px-3 md:px-20 py-4'>
        <Link href={'#'} className='w-20 md:w-125px'>
          <Image src={ImgBrand} alt='' />
        </Link>

        <Menu className='flex justify-end md:hidden dark:text-black text-3xl' />

        <nav className='items-end justify-end flex-1 dark:text-black font-bold hidden md:flex gap-3'>
          <Link className='text-sm hover:text-green-500' href={'#'}>
            Premium
          </Link>
          <Link className='text-sm hover:text-green-500' href={'#'}>
            Ajuda
          </Link>
          <Link className='text-sm hover:text-green-500' href={'#'}>
            Baixar
          </Link>
          <Link className='text-sm hover:text-green-500' href={'#'}>
            Premium
          </Link>
          <span className='w-0.5 h-6 bg-white bg-opacity-30'></span>
          <Link className='text-sm hover:text-green-500' href={'#'}>
            Inscrever-se
          </Link>
          <Link className='text-sm hover:text-green-500' href={'#'}>
            LogIn
          </Link>
        </nav>
      </header>
      <main className=''>
        <div
          id='hero'
          className=' flex flex-col justify-center  text-center py-40 px-4 bg-purple-main text-green-main'
        >
          <h1 className='text-5xl md:text-9xl font-bold mb-10 max-w-4xl mx-auto leading-none'>
            Escutear muda tudo
          </h1>
          <p className='text-md md:text-lg mb-10'>
            Milhões de músicas e podcasts para explorar. E nem precisa de cartão
            de crédito.
          </p>
          <Link
            className='bg-green-main hover:bg-white text-purple-main text-sm rounded-full px-10  py-3 uppercase font-bold max-w-xl mx-auto tracking-widest transition duration-500'
            href={'#'}
          >
            Obtenha o Sportify Free
          </Link>
        </div>
      </main>
      <footer className='bg-black dark:bg-white '>
        <div className='container mx-auto flex flex-col md:flex-row gap-4 md:gap-2 items-center md:justify-between md:items-start justify-between p-4 md:p-20'>
          <Link href={'#'} className='w-20 md:w-125px'>
            <Image src={ImgBrand} alt='' />
          </Link>
          <ul className='flex flex-col gap-4 md:gap-2 justify-center items-center md:justify-start md:items-start'>
            <li className='text-gray-500 font-bold uppercase'>Empresa</li>
            <li>
              <Link
                href={'#'}
                className='w-20 md:w-125px text-sm font-normal hover:text-gray-500'
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href={'#'}
                className='w-20 md:w-125px text-sm font-normal hover:text-gray-500'
              >
                Empregos
              </Link>
            </li>
            <li>
              <Link
                href={'#'}
                className='w-20 md:w-125px text-sm font-normal hover:text-gray-500'
              >
                For the Record
              </Link>
            </li>
          </ul>
          <ul className='flex flex-col gap-4 md:gap-2 justify-center items-center md:justify-start md:items-start'>
            <li className='text-gray-500 font-bold uppercase'>Comunidades</li>
            <li>
              <Link
                href={'#'}
                className='w-20 md:w-125px text-sm font-normal hover:text-gray-500'
              >
                Para Artistas
              </Link>
            </li>
            <li>
              <Link
                href={'#'}
                className='w-20 md:w-125px text-sm font-normal hover:text-gray-500'
              >
                Desenvolvedores
              </Link>
            </li>
            <li>
              <Link
                href={'#'}
                className='w-20 md:w-125px text-sm font-normal hover:text-gray-500'
              >
                Publicidade
              </Link>
            </li>
            <li>
              <Link
                href={'#'}
                className='w-20 md:w-125px text-sm font-normal hover:text-gray-500'
              >
                Investidores
              </Link>
            </li>
            <li>
              <Link
                href={'#'}
                className='w-20 md:w-125px text-sm font-normal hover:text-gray-500'
              >
                Fornecedores
              </Link>
            </li>
          </ul>
          <ul className='flex flex-col gap-4 md:gap-2 justify-center items-center md:justify-start md:items-start'>
            <li className='text-gray-500 font-bold uppercase'>Links Úteis</li>
            <li>
              <Link
                href={'#'}
                className='w-20 md:w-125px text-sm font-normal hover:text-gray-500'
              >
                Ajuda
              </Link>
            </li>
            <li>
              <Link
                href={'#'}
                className='w-20 md:w-125px text-sm font-normal hover:text-gray-500'
              >
                Player da Web
              </Link>
            </li>
            <li>
              <Link
                href={'#'}
                className='w-20 md:w-125px text-sm font-normal hover:text-gray-500'
              >
                Aplicativo móvel grátis
              </Link>
            </li>
          </ul>
          <ul className='flex gap-4 md:gap-2 justify-center items-center '>
            <li>
              <Link href={'#'} className='w-20 md:w-125px '>
                <Instagram className='w-10 h-10 bg-gray-600 p-2 rounded-full hover:bg-gray-700' />
              </Link>
            </li>
            <li>
              <Link href={'#'} className='w-20 md:w-125px'>
                <Twitter className='w-10 h-10 bg-gray-600 hover:bg-gray-700 p-2 rounded-full fill-white' />
              </Link>
            </li>
            <li>
              <Link href={'#'} className='w-20 md:w-125px'>
                <Facebook className='w-10 h-10 bg-gray-600 hover:bg-gray-700 p-2 rounded-full fill-white' />
              </Link>
            </li>
          </ul>
        </div>
        <div className='container mx-auto py-10'>
          <ul className='flex flex-col gap-2 md:gap-4 lg:flex-row'>
            <li>
              <Link
                href={'#'}
                className='w-20 md:w-125px font-normal text-xs hover:text-gray-500'
              >
                Legal
              </Link>
            </li>
            <li>
              <Link
                href={'#'}
                className='w-20 md:w-125px font-normal text-xs hover:text-gray-500'
              >
                Centro de Privacidade
              </Link>
            </li>
            <li>
              <Link
                href={'#'}
                className='w-20 md:w-125px font-normal text-xs hover:text-gray-500'
              >
                Politíca de Privacidade
              </Link>
            </li>
            <li>
              <Link
                href={'#'}
                className='w-20 md:w-125px font-normal text-xs hover:text-gray-500'
              >
                Cookies
              </Link>
            </li>
            <li>
              <Link
                href={'#'}
                className='w-20 md:w-125px font-normal text-xs hover:text-gray-500'
              >
                Sobre anúcios
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

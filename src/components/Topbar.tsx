import Link from "next/link";
import { useState, useEffect } from "react";
import Login from "./Login";
import {AiOutlineClose} from 'react-icons/ai';
import Cadastro from "./Cadastro";

const Topbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCadastro, setShowCadastro] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    const loadingStorage = async () => {
      const storageUser = localStorage.getItem('@Auth:user');

      if (storageUser) {
        setUser(true);
      }
    };
    loadingStorage();
  }, []);

  const handleOpenLogin = () => {
    setShowLogin(!showLogin);
  }

  const handleOpenCadastro = () => {
    setShowCadastro(!showCadastro);
  }

  return (
    <header className='w-full mx-auto flex justify-between items-center py-3 px-2 lg:px-20 border-b border-yellow-500'>
      <div>
        <Link href='/'>
          <a>
            <img className='w-16' src='/img/logo.png' alt="logo" />
          </a>
        </Link>
      </div>
      <div className='flex justify-between gap-2'>
        <button
          onClick={handleOpenLogin}
          className='bg-yellow-500 text-gray-900 text-sm px-2 py-1 rounded'
        >
          Login
        </button>
        {!showLogin !== true ? (
          <div 
            
            className='fixed top-0 left-0 flex justify-center items-center w-full h-screen z-10 bg-gray-100/[0.5]'
          >
            <div className='flex flex-col w-[90%] xl:w-[25%] h-[260px] xl:h-[270px] p-5 mx-auto border border-yellow-500 bg-gray-800 rounded-md'>
              <div className='flex items-center justify-end'>
                <AiOutlineClose 
                  className='pointer bg-yellow-500 p-1 w-4 h-4 rounded-full text-gray-800 text-sm font-semibold' 
                  onClick={handleOpenLogin} 
                />
              </div>
              <div>
                <Login />
              </div>
            </div>
          </div>
        ) : null}

        <button
          onClick={handleOpenCadastro}
          className='bg-yellow-500 text-gray-900 text-sm px-2 py-1 rounded'
        >
          Cadastrar
        </button>
        {!showCadastro !== true ? (
          <div 
            
            className='fixed top-0 left-0 flex justify-center items-center w-full h-screen z-10 bg-gray-100/[0.5]'
          >
            <div className='flex flex-col w-[90%] xl:w-[25%] h-[330px] p-5 mx-auto border border-yellow-500 bg-gray-800 rounded-md'>
              <div className='flex items-center justify-end'>
                <AiOutlineClose 
                className='pointer bg-yellow-500 p-1 w-4 h-4 rounded-full text-gray-800 text-sm font-semibold' 
                onClick={handleOpenCadastro} 
                />
              </div>
              <div>
                <Cadastro />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}
export default Topbar;

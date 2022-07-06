import Link from "next/link";
import { useState } from "react";
import Login from "./Login";

const Topbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCadastro, setShowCadastro] = useState(false);

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
        {!showLogin !== true ? (<Login />) : null}
        <button
          onClick={handleOpenCadastro}
          className='bg-yellow-500 text-gray-900 text-sm px-2 py-1 rounded'
        >
          Cadastrar
        </button>
      </div>
    </header>
  )
}
export default Topbar;

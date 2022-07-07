import { useState } from "react";
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    axios.post('http://192.241.151.105/login', {
        email,
        password,
    }).then((response) => {
      if (response.data.loggedIn === true) {
        localStorage.setItem('@Auth:user', response.data.loggedIn);
        localStorage.setItem('@user:email', response.data.email);
        window.location.reload();
      }

      if (response.data.loggedIn === false) {
        toast.error(response.data.message);
      }

    })
  }

  return (
    <form className='flex gap-4 items-center justify-center flex-col' onSubmit={handleSubmit}>

      <h1 className="uppercase font-semibold">Login</h1>
      <div>
        <p>Email:</p>
        <input className='rounded px-2' type="email" placeholder='Digite o email' onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div>
        <p>Senha:</p>
        <input className='rounded px-2' type="password" placeholder='Digite sua senha' onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <input className="pointer text-gray-800 bg-yellow-500 rounded px-3 font-semibold" type="submit" />

      <ToastContainer
        autoClose={2500}
        position="top-center"
        className="toast-container"
        toastClassName="dark-toast"
        theme="colored"
      />

    </form>
  )
}

export default Login;
import { useState } from "react";
import validator from 'validator';
import {toast, ToastContainer} from 'react-toastify';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (validator.isEmail(email)) {
      if (email === '' || password === '' || repeatPassword === '') {
        toast.error('Campos obrigatórios não preenchidos');
      } else if (password.length < 6) {
        toast.error('A senha precisa ter no mínimo 6 caracteres');
      } else if (password !== repeatPassword) {
        toast.error('As senhas precisam ser iguais');
      } else {
        axios.post('https://nurvtreinamentos.com/register', {
          email,
          password,
          repeatPassword,
        }).then((response) => {
          if (response.data.error) {
            toast.error(response.data.error);
          } else {
            toast.success(response.data);
          }
        });
      }
    } else {
      toast.error('Email inválido');
    }
  }

  return (
    <form className='flex gap-4 items-center justify-center flex-col' onSubmit={handleSubmit}>

      <h1 className="uppercase font-semibold">Cadastrar</h1>
      <div>
        <p>Email:</p>
        <input className='rounded px-2' type="email" placeholder='Digite o email' onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div>
        <p>Senha:</p>
        <input className='rounded px-2' type="password" placeholder='Digite sua senha' onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div>
        <p>Repetir a senha:</p>
        <input className='rounded px-2' type="password" placeholder='Digite sua senha' onChange={(e) => setRepeatPassword(e.target.value)}/>
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

export default Cadastro
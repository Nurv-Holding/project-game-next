import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import axios from "axios";

const Roleta = () => {
  const [email, setEmail] = useState('');
  const [aposta1, setAposta1] = useState('')
  const [aposta2, setAposta2] = useState('')
  const [aposta3, setAposta3] = useState('')
  const [aposta4, setAposta4] = useState('')
  const [aposta5, setAposta5] = useState('')
  const [aposta6, setAposta6] = useState('')
  const [aposta7, setAposta7] = useState('')
  const [aposta8, setAposta8] = useState('')
  const [aposta9, setAposta9] = useState('')
  const [aposta10, setAposta10] = useState('')
  const [lucro1, setLucro1] = useState('')
  const [lucro2, setLucro2] = useState('')
  const [lucro3, setLucro3] = useState('')
  const [lucro4, setLucro4] = useState('')
  const [lucro5, setLucro5] = useState('')
  const [lucro6, setLucro6] = useState('')
  const [lucro7, setLucro7] = useState('')
  const [lucro8, setLucro8] = useState('')
  const [lucro9, setLucro9] = useState('')
  const [lucro10, setLucro10] = useState('')

  useEffect(() => {
    const loadingStorage = async () => {
      const storageUser = localStorage.getItem('@user:email');

      if (storageUser) {
        setEmail(storageUser);
      }
    };
    loadingStorage();
  })

  axios.get('https://nurvtreinamentos.com/apostas-roleta', {
  }).then((response) => {
    setAposta1(response.data[0]);
    setAposta2(response.data[1]);
    setAposta3(response.data[2]);
    setAposta4(response.data[3]);
    setAposta5(response.data[4]);
    setAposta6(response.data[5]);
    setAposta7(response.data[6]);
    setAposta8(response.data[7]);
    setAposta9(response.data[8]);
    setAposta10(response.data[9]);
  })

  axios.get('https://nurvtreinamentos.com/historico-roleta', {
  }).then((response) => {
    setLucro1(response.data[0]);
    setLucro2(response.data[1]);
    setLucro3(response.data[2]);
    setLucro4(response.data[3]);
    setLucro5(response.data[4]);
    setLucro6(response.data[5]);
    setLucro7(response.data[6]);
    setLucro8(response.data[7]);
    setLucro9(response.data[8]);
    setLucro10(response.data[9]);
  })

  return (
    <Layout>
      <div className="h-auto w-full flex flex-col gap-6 items-center py-5">
        <div className="flex w-full px-2 xl:px-0 bg-gray-600 rounded-md xl:w-[650px] justify-center xl:flex-row flex-1">

          <div className='flex-1 border-r border-yellow-500'>
            <p className='border-b border-yellow-500 text-center text-semibold'>Usuarios</p>
            <p className='flex flex-col items-center justify-center'>{email}</p>
          </div>

          <div className='flex-1 border-r border-yellow-500'>
            <p className='border-b border-yellow-500 text-center text-semibold'>Apostas</p>
            <ul className='flex flex-col items-center justify-center'> 
              <li>{aposta1}</li> 
              <li>{aposta2}</li> 
              <li>{aposta3}</li> 
              <li>{aposta4}</li> 
              <li>{aposta5}</li>
              <li>{aposta6}</li>
              <li>{aposta7}</li> 
              <li>{aposta8}</li> 
              <li>{aposta9}</li> 
              <li>{aposta10}</li>
            </ul>
          </div>

          <div className='flex-1 w-full'>
            <p className='border-b border-yellow-500 text-center text-semibold'>Lucro</p>
            <ul className='flex flex-col items-center justify-center'>
              <li>{lucro1}</li>
              <li>{lucro2}</li>
              <li>{lucro3}</li>
              <li>{lucro4}</li>
              <li>{lucro5}</li>
              <li>{lucro6}</li>
              <li>{lucro7}</li>
              <li>{lucro8}</li>
              <li>{lucro9}</li>
              <li>{lucro10}</li>
            </ul>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Roleta
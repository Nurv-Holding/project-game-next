import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import axios from "axios";

const Jackpot = () => {
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

  axios.get('http://192.241.151.105/apostas-jackpot', {
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

  axios.get('http://192.241.151.105/historico-jackpot', {
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
      <div className="h-screen">
          <div className="flex gap-4 items-center justify-center flex-col">
            <p>User: {email}</p>

            <p>Apostas</p> 
            <p>{aposta1}</p> 
            <p>{aposta2}</p> 
            <p>{aposta3}</p> 
            <p>{aposta4}</p> 
            <p>{aposta5}</p>
            <p>{aposta6}</p> 
            <p>{aposta7}</p> 
            <p>{aposta8}</p> 
            <p>{aposta9}</p> 
            <p>{aposta10}</p>

            <p>Lucro</p>
            <p>{lucro1}</p>
            <p>{lucro2}</p>
            <p>{lucro3}</p>
            <p>{lucro4}</p>
            <p>{lucro5}</p>
            <p>{lucro6}</p>
            <p>{lucro7}</p>
            <p>{lucro8}</p>
            <p>{lucro9}</p>
            <p>{lucro10}</p>
          </div>
      </div>
    </Layout>
  )
}

export default Jackpot
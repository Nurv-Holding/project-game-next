import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

const User = () => {
  const [email, setEmail] = useState('');
  const router = useRouter()

  useEffect(() => {
    const loadingStorage = async () => {
      const storageUser = localStorage.getItem('@user:email');

      if (storageUser) {
        setEmail(storageUser);
      }
    };
    loadingStorage();
  })

  const signOut = () => {
    localStorage.clear()
    return router.push('/')
  }

  return (
    <form className='flex gap-4 items-center justify-center flex-col'>

      <h1 className="uppercase font-semibold">User</h1>
      <div>
        <p>Email: {email}</p>
      </div>
      <div>
        <button 
        onClick={signOut}
        className='bg-red-700 text-gray-900 text-sm px-2 py-1 rounded'
        >Sair</button>
      </div>
    </form>
  )
}

export default User;
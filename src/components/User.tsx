import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router'

const User = () => {
  const [email, setEmail] = useState('');
  const router = useRouter()

  useEffect(() => {
    axios.get('http://192.241.151.105/user', {
    }).then((response) => {
        setEmail(response.data.user_email);
    })
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
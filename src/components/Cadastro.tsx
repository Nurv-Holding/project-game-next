

const Cadastro = () => {
  return (
    <form className='flex gap-4 items-center justify-center flex-col'>
      <h1 className="uppercase font-semibold">Cadastrar</h1>
      <div>
        <p>Email:</p>
        <input className='rounded px-2' type="email" placeholder='Digite o email' />
      </div>
      <div>
        <p>Senha:</p>
        <input className='rounded px-2' type="password" placeholder='Digite sua senha' />
      </div>
      <div>
        <p>Repetir a senha:</p>
        <input className='rounded px-2' type="password" placeholder='Digite sua senha' />
      </div>
      <input className="pointer text-gray-800 bg-yellow-500 rounded px-3 font-semibold" type="submit" />
    </form>
  )
}

export default Cadastro
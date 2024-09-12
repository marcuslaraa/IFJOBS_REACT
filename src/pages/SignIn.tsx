import React, { useState } from 'react'

const SignIn = () => {
  const [data, setData] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(e.target)
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nome</label>
        <input
          name="nome"
          type="text"
          placeholder="Entre com seu nome para logar"
          onChange={(e) => setData(e.target.value)}
        />
        <p style={{ wordBreak: 'break-word', width: '500px' }}>{data}</p>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default SignIn

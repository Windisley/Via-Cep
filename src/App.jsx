import { useState, useEffect } from 'react'
import axios from "axios"

import './App.css'

function App() {
  // viacep.com.br/ws/01001000/json/

  // 01001000
  const [viacep, setViacep] = useState()
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState()

  useEffect(() => {
    axios.get("https://viacep.com.br/ws/01001000/json/").then((response) => {
      const data = response.data

      console.log(data)
    })
  }, [])

  return (
    <div className="container">
      <div className="boxviacep">
        <h1>via cep</h1>
        <div className="boxinput">
          <input type="text" placeholder='Informe um cep'></input>
          <button>buscar</button>
        </div>

        <div className="boxinfo">
          <div>
            <h2>estado</h2>
            <p>bairro</p>
          </div>
          <div>
            <h2>bairro</h2>
            <p>bairro</p>
          </div>
          <div>
            <h2>rua</h2>
            <p>bairro</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

import { useState} from 'react'
import axios from "axios"

import './App.css'

function App() {
  // viacep.com.br/ws/01001000/json/

  // 01001000
  const [viacep, setViacep] = useState()
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState()
  const [input, setInput] = useState("")

   const searchcep = ()=>{
    setLoading(true)
    if(!input){
      alert("Campo vazio informe um cep!")
    }else{
      axios.get(`https://viacep.com.br/ws/${input}/json/`).then((response) => {
        const data = response.data
        setViacep(data)
        console.log(viacep)
  
      }).catch(()=>{
        const error = console.error("Erro");
        setErr(error)
  
      }).finally(()=>{
        setLoading(false)
        setInput("")
      })

    }
    
   
  }
  
         

  

  return (
    <div className="container">
      <div className="boxviacep">
        <h1>via cep</h1>
        <div className="boxinput">
          <input type="text" placeholder='Informe um cep' onChange={(iten)=>{setInput(iten.target.value)}} value={input}></input>
          <button onClick={searchcep}>buscar</button>
        </div>

        <div className="boxinfo">
          <div>
          <h2>estado:</h2>
          {loading ? (
              <p>Carregando...</p>
            ) : err ? (
              <p>{err}</p>
            ) : (
              <p>{viacep ? viacep.estado : "N/A"}</p>
            )}
 
          </div>

          <div>
            <h2>bairro:</h2>
            {loading ? (
              <p>Carregando...</p>
            ) : err ? (
              <p>{err}</p>
            ) : (
              <p>{viacep ? viacep.localidade : "N/A"}</p>
            )}
 
          </div>

          <div>
            <h2>rua:</h2>
            {loading ? (
              <p>Carregando...</p>
            ) : err ? (
              <p>{err}</p>
            ) : (
              <p>{viacep ? viacep.logradouro : "N/A"}</p>
            )}
 
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

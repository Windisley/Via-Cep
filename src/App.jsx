import { useState, useEffect } from 'react'
import axios from "axios"

import './App.css'

function App() {
  // viacep.com.br/ws/01001000/json/

  // 01001000
  const [viacep, setViacep] = useState()
  const [loading, setLoading] = useState()
  const [err, setErr] = useState()

  useEffect(()=>{
    axios.get("https://viacep.com.br/ws/01001000/json/").then((response)=>{
      const data = response.data

      console.log(data)
    })
  }, [])

  return (
    <div className="container">
  
    </div>
  )
}

export default App

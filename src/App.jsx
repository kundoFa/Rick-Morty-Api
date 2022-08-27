import React, { useState, useContext, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { UserApi } from './context/UserApi'
import Header from './componets/Header'
import ContentRes from "./componets/contents/ContentRes";
import Buscador from './componets/Buscador'
function App() {
  const [data,setData]=useState([])
  const [dataInfo,setDataInfo] = useState([])
  const [bus,setBus] = useState("")
  const buscar = (e)=>{
    e.preventDefault();
    let valInp = e.target[0].value
    console.log(e)
    console.log(e.target[0].value)
    setBus(valInp)
  }

  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character/?name=${bus}`)
    .then(res=>res.json())
    .then(res=>{
      setDataInfo(res.info)
      setData(res.results)
    })
  },[bus])
  return (
    <React.Fragment>
    <UserApi.Provider value={data}>
      <div className='App'>

      
        <Header/>
        <main>
          <Buscador funBuscar={buscar}/>
          <ContentRes/>

        </main>

      </div>
    </UserApi.Provider>
    <footer>
      Version 0.2 Creado por: <a href='https://github.com/kundoFa'>https://github.com/kundoFa</a>
      <br></br>
      Hecho con ReactJS
    </footer>

    </React.Fragment>
  )
}

export default App

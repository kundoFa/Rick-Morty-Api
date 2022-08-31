import React, { useState, useContext, useEffect } from 'react'
import './App.css'

import { UserApi } from './context/UserApi'
//! Componentes custom
import Header from './componets/Header'
import ContentRes from "./componets/contents/ContentRes";
import Buscador from './componets/Buscador'
//!
function App() {
  const [data,setData]=useState([])
  const [dataInfo,setDataInfo] = useState([])
  const [url,setUrl] = useState("https://rickandmortyapi.com/api/character/")
  const buscar = (e)=>{
    e.preventDefault();
    let valInp = e.target[0].value
    setUrl(`https://rickandmortyapi.com/api/character/?name=${valInp}`)
  }
  const paginations = (e)=>{
    if(e.target.className === "next_page"){
      setUrl(dataInfo.next)
    }
    else if (e.target.className==="prev_page"){
      console.log("prevv lol");
      setUrl(dataInfo.prev)
    }
    
  }
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(res=>{
      setDataInfo(res.info)
      setData(res.results)
    })
    
  },[url])
  return (
    <React.Fragment>
    <UserApi.Provider value={[data,dataInfo,paginations]} >
      <div className='App'>
        <Header/>
        <main>
          <Buscador funBuscar={buscar}/>
          <ContentRes funBut={paginations}/>
        </main>
      </div>
    </UserApi.Provider>
    <footer>
      Version 0.2 Creado por: <a href='https://github.com/kundoFa'>https://github.com/kundoFa</a>
      <br></br>
      Repositorio <a href='https://github.com/kundoFa/Rick-Morty-Api'>https://github.com/kundoFa/Rick-Morty-Api</a>
      <br></br>
      Hecho con <b>ReactJS</b>
    </footer>

    </React.Fragment>
  )
}

export default App

import './App.css'
import { baseColaboradores } from './components/BaseColaboradores'
import Listado from './components/Listado'
import Formulario from './components/Formulario'
import Buscador from './components/Buscador'
import AlertComponent from './components/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'


function App() {
  const [lista, setLista] = useState(baseColaboradores)
  const [error, setError] = useState("")
  const [succes, setSucces] = useState("")
  return (
    <>
      <Buscador />
      <Formulario setLista={setLista} baseColaboradores={baseColaboradores} setError={setError} setSucces={setSucces}/>
      <AlertComponent error={error} succes={succes}/>
      <Listado lista={lista} />
    </>
  )
}

export default App

import './App.css'
import { baseColaboradores } from './components/BaseColaboradores'
import Listado from './components/Listado'
import Formulario from './components/Formulario'
import Buscador from './components/Buscador'
import Alert from './components/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'


function App() {
  const [lista, setLista] = useState(baseColaboradores)
  return (
    <>
      <Buscador />
      <Formulario setLista={setLista} baseColaboradores={baseColaboradores}/>
      <Alert />
      <Listado lista={lista}/>
    </>
  )
}

export default App

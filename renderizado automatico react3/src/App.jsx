import './App.css'
import { baseColaboradores } from './components/BaseColaboradores'
import Listado from './components/Listado'
import Formulario from './components/Formulario'
import Buscador from './components/Buscador'
import Alert from './components/Alert'

function App() {
  return (
    <>
      <Buscador />
      <Formulario />
      <Alert />
      <Listado baseColaboradores={baseColaboradores} />
    </>
  )
}

export default App

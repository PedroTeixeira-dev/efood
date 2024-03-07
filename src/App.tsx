import { BrowserRouter } from 'react-router-dom'

import EstiloGlobal from './styles'

import Footer from './components/Footer'
import Rotas from './routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <EstiloGlobal />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

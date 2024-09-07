import { BrowserRouter } from 'react-router-dom'

import EstiloGlobal from './styles'

import Footer from './components/Footer'
import Rotas from './routes'
import Cart from './components/Cart'

function App() {
  return (
    <>
      <BrowserRouter>
        <EstiloGlobal />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </>
  )
}

export default App

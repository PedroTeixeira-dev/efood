import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

import { Header, HeaderContent } from './styles'

const HeaderRestaurante = () => (
  <Header>
    <HeaderContent className="container">
      <h2>Restaurantes </h2>
      <div>
        <Link to={'/'}>
          <img src={logo} alt="logo do efood" />
        </Link>
      </div>

      <h2>0 produto(s) no carrinho</h2>
    </HeaderContent>
  </Header>
)

export default HeaderRestaurante

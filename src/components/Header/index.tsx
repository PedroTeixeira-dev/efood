import { HeaderBar, HeaderContent } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar>
    <HeaderContent className="container">
      <img src={logo} />
      <a href="http://localhost:3000/">Cadastrar</a>
      <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
    </HeaderContent>
  </HeaderBar>
)

export default Header

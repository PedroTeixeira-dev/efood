import { HeaderBar, HeaderContent } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar>
    <HeaderContent className="container">
      <img src={logo} />
      <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
    </HeaderContent>
  </HeaderBar>
)

export default Header

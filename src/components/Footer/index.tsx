import logo from '../../assets/images/logo.png'
import insta from '../../assets/images/instagram.png'
import face from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

import { FooterDiv, Logo, SocialMedia, FooterInfo } from './styles'

const Footer = () => (
  <FooterDiv>
    <FooterInfo className="container">
      <Logo src={logo} />
      <SocialMedia>
        <img src={insta} />
        <img src={face} />
        <img src={twitter} />
      </SocialMedia>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </FooterInfo>
  </FooterDiv>
)

export default Footer

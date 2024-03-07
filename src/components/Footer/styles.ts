import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterDiv = styled.footer`
  background-color: ${cores.bege};
  color: ${cores.laranja};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  p {
    margin-bottom: 40px;
    font-size: 10px;
    line-height: 12px;
    max-width: 480px;
    text-align: center;
  }
`

export const Logo = styled.img`
  margin-top: 40px;
`

export const SocialMedia = styled.div`
  margin-top: 32px;

  img {
    margin-left: 8px;
    width: 24px;
    margin-bottom: 80px;
  }
`

export const FooterInfo = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

import styled from 'styled-components'

import imagemDeFundo from '../../assets/images/fundo.png'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-image: url(${imagemDeFundo});
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 125px;
    margin-top: 64px;
    margin-bottom: 138px;
  }

  h1 {
    color: ${cores.laranja};
    font-weight: bold;
    font-size: 36px;
    max-width: 560px;
    text-align: center;
    line-height: 42px;
    margin-bottom: 42px;
  }
`

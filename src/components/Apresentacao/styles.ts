import styled from 'styled-components'

import fundo from '../../assets/images/macarrao2.png'
import { cores } from '../../styles'

export const Banner = styled.section`
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;

  h3 {
    font-size: 32px;
    color: ${cores.branco};
    font-weight: 100;
    padding-top: 24px;
  }

  h2 {
    color: ${cores.branco};
    margin-top: 156px;
    margin-bottom: 32px;
    font-size: 32px;
    font-weight: 400;
  }
`

export const EfeitoFade = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`

import styled from 'styled-components'

import backgroundImage from '../../assets/images/fundo.png'
import { cores } from '../../styles'

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${cores.laranja};
  font-weight: bold;
  font-family: 'Roboto', sans-serif;

  position: relative;

  div {
    max-width: 125px;
    position: absolute;
    margin-left: 446px;
  }

  h2 {
    font-weight: bold;
    font-size: 18px;
  }
`

export const Header = styled.header`
  background-image: url(${backgroundImage});
  padding-top: 40px;
  padding-bottom: 65px;
  margin: 0 auto;
`

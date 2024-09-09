import styled from 'styled-components'

import backgroundImage from '../../assets/images/fundo.png'
import { breakpoints, cores } from '../../styles'

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${cores.laranja};
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  position: relative;

  @media (max-width: ${breakpoints.desktop}) {
    justify-content: space-between;
  }

  div {
    max-width: 125px;
    position: absolute;
    margin-left: 446px;

    @media (max-width: ${breakpoints.desktop}) {
      margin-left: 40%;
    }
    @media (max-width: ${breakpoints.tablet}) {
      margin-left: 30%;

      img {
        max-width: 60px;
      }
    }
  }

  h2 {
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
  }
`

export const Header = styled.header`
  background-image: url(${backgroundImage});
  padding-top: 40px;
  padding-bottom: 65px;
  margin: 0 auto;
`

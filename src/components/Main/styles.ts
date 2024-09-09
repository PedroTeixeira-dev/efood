import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Categorias = styled.main`
  padding-top: 139px;
  padding-bottom: 61px;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    row-gap: 48px;

    @media (max-width: ${breakpoints.desktop}) {
      grid-template-columns: 1fr;
      column-gap: 0px;
    }
  }

  li {
    list-style: none;
    text-decoration: none;

    @media (max-width: ${breakpoints.desktop}) {
      display: flex;
      justify-content: center;
    }
  }
`

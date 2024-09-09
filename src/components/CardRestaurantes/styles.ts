import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Card = styled.div`
  display: block;
  background-color: ${cores.laranja};
  padding: 8px;
  width: 260px;
  height: 100%;
  color: ${cores.bege};
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    width: 260px;
  }

  img {
    width: 100%;
    max-width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
  }

  button {
    display: block;
    width: 95%;
    margin: none;
    border: none;
    color: ${cores.laranja};
    background-color: ${cores.bege};
    font-size: 14px;
    font-weight: bold;
    padding: 4px;
    position: absolute;
    bottom: 8px;
    cursor: pointer;
  }
`

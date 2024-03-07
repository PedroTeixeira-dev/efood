import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  display: block;
  background-color: ${cores.laranja};
  padding: 8px;
  width: 320px;
  height: 100%;
  color: ${cores.bege};

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 8px;
  }

  button {
    display: block;
    width: 100%;
    margin: none;
    border: none;
    color: ${cores.laranja};
    background-color: ${cores.bege};
    font-size: 14px;
    font-weight: bold;
    padding: 4px;
  }
`

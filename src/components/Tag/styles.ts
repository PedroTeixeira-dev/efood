import styled from 'styled-components'
import { cores } from '../../styles'

export const Tag = styled.div`
  background-color: ${cores.laranja};
  color: ${cores.bege};
  padding: 6px 4px;
  font-weight: bold;
  display: inline-block;

  margin-left: 8px;

  p {
    font-size: 12px;
    font-weight: bold;
    line-height: 14px;
    margin-bottom: 0;
  }
`

import styled from 'styled-components'

import { cores } from '../../styles'

export const Banner = styled.section`
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 56px;

  h3 {
    font-size: 32px;
    color: ${cores.branco};
    font-weight: 100;
    padding-top: 24px;
  }

  h2 {
    color: ${cores.branco};
    margin-top: 156px;
    font-size: 32px;
    font-weight: 800;
  }
`

export const EfeitoFade = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  padding-bottom: 32px;
`

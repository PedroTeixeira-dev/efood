import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 472px;
  height: 398px;
  background-color: ${cores.branco};
  border: 2px solid ${cores.laranja};
  color: ${cores.laranja};
  height: 100%;
  position: relative;

  h3 {
    font-size: 18px;
    font-weight: Bold;
  }

  img {
    width: 100%;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }
`

export const InformacaoNivel1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const Nota = styled.div`
  display: flex;
  flex-direction: row;

  p {
    font-size: 18px;
    font-weight: bold;
  }

  img {
    margin-left: 8px;
    width: 21px;
    height: 21px;
  }
`

export const TodasInfos = styled.div`
  padding: 8px;
`

export const Botao = styled.button`
  color: ${cores.branco};
  background-color: ${cores.laranja};
  margin: none;
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`

export const InfoTags = styled.div`
  display: inline-block;
  top: 16px;
  right: 16px;
  position: absolute;
`

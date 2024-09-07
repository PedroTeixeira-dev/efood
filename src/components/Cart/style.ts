import styled from 'styled-components'

import lixeira from '../../assets/images/lixeira.png'

import { cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
`

export const Sidebar = styled.aside`
  background-color: ${cores.laranja};
  z-index: 1;
  width: 100%;
  max-width: 360px;
  height: 100%;
  padding: 32px 8px 0 8px;

  .EntregaBtn {
    display: block;
    width: 100%;
    margin: none;
    border: none;
    color: ${cores.laranja};
    background-color: ${cores.bege};
    font-size: 14px;
    font-weight: bold;
    padding: 8px;
    cursor: pointer;
  }

  ul {
    margin-bottom: 40px;
  }

  li {
    display: flex;
    justify-content: flex-start;
    background-color: #ffebd9;
    padding: 8px;
    color: ${cores.laranja};
    font-family: Roboto;
    position: relative;
    margin-bottom: 16px;

    img {
      height: 80px;
      width: 80px;
      object-fit: cover;
      margin-right: 8px;
    }

    h3 {
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 16px;
    }

    h4 {
      font-size: 14px;
    }

    button {
      background-image: url(${lixeira});
      background-repeat: no-repeat;
      position: absolute;
      right: 8px;
      bottom: 8px;
      height: 16px;
      width: 16px;
      background-color: transparent;
      border: none;
    }
  }
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${cores.bege};
  font-weight: 700;
  font-size: 14px;
  font-family: Roboto;
  margin-bottom: 16px;
`

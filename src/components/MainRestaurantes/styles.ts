import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Section = styled.section`
  margin-top: 56px;
  margin-bottom: 120px;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
    row-gap: 32px;

    @media (max-width: ${breakpoints.desktop}) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: ${breakpoints.tablet}) {
      grid-template-columns: 1fr;
    }
  }

  li {
    list-style: none;
    text-decoration: none;

    @media (max-width: ${breakpoints.tablet}) {
      display: flex;
      justify-content: center;
    }
  }
`

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  display: none;

  &.visivel {
    display: flex;
  }

  .modalBody {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1024px;
    height: 344px;
    background-color: #e66767;
    padding: 32px;
    z-index: 2;

    @media (max-width: ${breakpoints.tablet}) {
      height: 80%;
      width: 80%;
      padding: 16px;
      border-radius: 16px;
    }

    img {
      width: 280px;
      height: 280px;
      margin-right: 24px;
      object-fit: cover;

      @media (max-width: ${breakpoints.tablet}) {
        margin-bottom: 8px;
      }
    }

    .modalInfo {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      height: 280px;

      h4 {
        font-size: 18px;
        line-height: 21px;
        font-weight: bold;
        margin-bottom: 16px;
        color: #ffebd9;
      }

      p {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 16px;
        color: #ffebd9;
      }

      button {
        width: 260px;
        height: 24px;
        background-color: #ffebd9;
        border: none;
        cursor: pointer;
        font-size: 14px;
        color: #e66767;
        font-weight: bold;
        padding-right: 8px;
        padding-left: 8px;
      }
    }
  }
`

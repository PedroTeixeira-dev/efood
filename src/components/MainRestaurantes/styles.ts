import styled from 'styled-components'

export const Section = styled.section`
  margin-top: 56px;
  margin-bottom: 120px;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
    row-gap: 32px;
  }

  li {
    list-style: none;
    text-decoration: none;
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
    align-items: center;
    justify-content: center;
    max-width: 1024px;
    height: 344px;
    background-color: #e66767;
    padding: 32px;
    z-index: 2;

    img {
      width: 280px;
      height: 280px;
      margin-right: 24px;
      object-fit: cover;
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
        width: 240px;
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

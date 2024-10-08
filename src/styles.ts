import { createGlobalStyle } from 'styled-components'

export const cores = {
  laranja: '#E66767',
  bege: '#FFEBD9',
  branco: '#FFFFFF',
  brancoMaisEscuro: '#FFF8F2'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

const EstiloGlobal = createGlobalStyle`
 * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif ;
  font-weight: 400;
  text-decoration: none;
 }

 a {
  color: ${cores.branco};
 }

 .container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width:${breakpoints.desktop} ) {
    max-width: 90%;
  }
 }

 body {
  background-color: ${cores.brancoMaisEscuro};
 }
`

export default EstiloGlobal

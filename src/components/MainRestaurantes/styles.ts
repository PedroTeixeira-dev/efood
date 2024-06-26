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

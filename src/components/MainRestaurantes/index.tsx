import { useParams } from 'react-router-dom'
import Cardrestaurante from '../CardRestaurantes'

import { Section } from './styles'
import { useEffect, useState } from 'react'
import { Cardapio } from '../Main'

const MainRestaurantes = () => {
  const { id } = useParams()

  const [cardapio, setCardapio] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.cardapio)
        setCardapio(res.cardapio)
      })
  }, [id])

  if (!cardapio) {
    return <div>Carregando...</div>
  }

  return (
    <Section className="container">
      <ul>
        {cardapio.map((prato) => (
          <li key={prato.id}>
            <Cardrestaurante
              imagem={prato.foto}
              nome={prato.nome}
              descricao={prato.descricao}
            />
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default MainRestaurantes

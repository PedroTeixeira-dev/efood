import { useParams } from 'react-router-dom'
import { Banner, EfeitoFade } from './styles'
import { useEffect, useState } from 'react'
import { Restaurantes } from '../Main'

const Apresentacao = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurantes | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setRestaurante(res)
      })
  }, [id])

  if (!restaurante) {
    return <div>Carregando...</div>
  }

  return (
    <Banner style={{ backgroundImage: `url(${restaurante.capa})` }}>
      <EfeitoFade>
        <div className="container">
          <h3>{restaurante.tipo}</h3>
          <h2>{restaurante.titulo}</h2>
        </div>
      </EfeitoFade>
    </Banner>
  )
}

export default Apresentacao

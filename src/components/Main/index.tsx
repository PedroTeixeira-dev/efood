import { Categorias } from './styles'
import { ProductCard } from '../ProductCard/index'
import { useEffect, useState } from 'react'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Main = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <Categorias className="container">
      <ul>
        {restaurantes.map((restaurante) => (
          <li key={restaurante.id}>
            <ProductCard restaurante={restaurante} />
          </li>
        ))}
      </ul>
    </Categorias>
  )
}

export default Main

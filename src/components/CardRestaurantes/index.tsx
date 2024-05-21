import { Card } from './styles'

type Props = {
  imagem: string
  nome: string
  descricao: string
}

const Cardrestaurante = ({ imagem, nome, descricao }: Props) => {
  return (
    <Card>
      <img src={imagem} alt="pizza" />
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <button>Adicionar ao carrinho</button>
    </Card>
  )
}

export default Cardrestaurante

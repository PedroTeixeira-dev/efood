import pizza from '../../assets/images/pizza.png'

import { Card } from './styles'

const Cardrestaurante = () => (
  <Card>
    <img src={pizza} alt="pizza" />
    <h3>Pizza Margeritta</h3>
    <p>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </p>
    <button>Adicionar ao carrinho</button>
  </Card>
)

export default Cardrestaurante

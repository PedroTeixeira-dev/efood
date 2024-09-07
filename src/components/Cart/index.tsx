import { CartContainer, Overlay, Sidebar, Price } from './style'

import pizza from '../../assets/images/pizza.png'
import { Botao } from '../ProductCard/styles'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <ul>
          <li>
            <img src={pizza} />
            <div>
              <h3>Pizza Marguerita</h3>
              <h4> R$ 60,90</h4>
            </div>
            <button />
          </li>
          <li>
            <img src={pizza} />
            <div>
              <h3>Pizza Marguerita</h3>
              <h4> R$ 60,90</h4>
            </div>
            <button />
          </li>
        </ul>
        <Price>
          <p>Valor Total</p>
          <p>R$ 80,00</p>
        </Price>
        <button className="EntregaBtn">Continuar com a entrega</button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart

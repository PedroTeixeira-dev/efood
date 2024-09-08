import { CartContainer, Overlay, Sidebar, Price } from './style'

import pizza from '../../assets/images/pizza.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  function formatToCurrency(value: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <h4> {formatToCurrency(item.preco)}</h4>
              </div>
              <button onClick={() => removeItem(item.id)} />
            </li>
          ))}
        </ul>
        <Price>
          <p>Valor Total</p>
          <p>R$ {formatToCurrency(getTotalPrice())}</p>
        </Price>
        <button className="EntregaBtn">Continuar com a entrega</button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart

import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

import { Header, HeaderContent } from './styles'

import { open } from '../../store/reducers/cart'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderRestaurante = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  console.log(items)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Header>
      <HeaderContent className="container">
        <h2>Restaurantes </h2>
        <div>
          <Link to={'/'}>
            <img src={logo} alt="logo do efood" />
          </Link>
        </div>
        <h2 onClick={openCart}>{items.length} produto(s) no carrinho</h2>
      </HeaderContent>
    </Header>
  )
}

export default HeaderRestaurante

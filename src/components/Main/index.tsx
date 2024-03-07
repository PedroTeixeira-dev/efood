import { Categorias } from './styles'
import { ProductCard } from '../ProductCard/index'

export type Props = {
  prato: 'Sushi' | 'Macarrao'
}

const Main = () => (
  <Categorias className="container">
    <ProductCard prato={'Sushi'}></ProductCard>
    <ProductCard prato={'Macarrao'}></ProductCard>
    <ProductCard prato={'Macarrao'}></ProductCard>
    <ProductCard prato={'Macarrao'}></ProductCard>
    <ProductCard prato={'Macarrao'}></ProductCard>
    <ProductCard prato={'Macarrao'}></ProductCard>
  </Categorias>
)

export default Main

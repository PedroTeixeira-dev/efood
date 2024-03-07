import sushi from '../../assets/images/sushi.png'
import macarrao from '../../assets/images/macarrao.png'
import estrela from '../../assets/images/estrela.png'

import {
  Card,
  InformacaoNivel1,
  Nota,
  TodasInfos,
  Botao,
  InfoTags
} from './styles'

import { Props } from '../Main'
import Tags from '../Tag'
import { Link } from 'react-router-dom'

export const ProductCard = (props: Props) => (
  <Card>
    <InfoTags>
      {props.prato === 'Sushi' ? <Tags text={'Destaque da semana'} /> : null}
      <Tags text={props.prato === 'Sushi' ? 'Japonesa' : 'Italiana'} />
    </InfoTags>

    <img
      src={props.prato === 'Sushi' ? sushi : macarrao}
      alt="prato de comida"
    />
    <TodasInfos>
      <InformacaoNivel1>
        <h3>
          {props.prato === 'Sushi' ? 'Hioki Su Shi' : 'La Dolce Trattoria'}
        </h3>
        <Nota>
          <p>{props.prato === 'Sushi' ? '4,9' : '4,6'}</p>
          <img src={estrela} alt="estrela" />
        </Nota>
      </InformacaoNivel1>
      <p>
        {props.prato === 'Sushi'
          ? 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
          : 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'}
      </p>
      <Botao>
        <Link to="/restaurante">Saiba mais</Link>
      </Botao>
    </TodasInfos>
  </Card>
)

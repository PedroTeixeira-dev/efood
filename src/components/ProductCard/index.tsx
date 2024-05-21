import estrela from '../../assets/images/estrela.png'

import {
  Card,
  InformacaoNivel1,
  Nota,
  TodasInfos,
  Botao,
  InfoTags
} from './styles'

import Tags from '../Tag'
import { Link } from 'react-router-dom'
import { Restaurantes } from '../Main'

export type Props = {
  restaurante: Restaurantes
}

export const ProductCard = ({ restaurante }: Props) => (
  <Card>
    <InfoTags>
      {restaurante.destacado ? <Tags text={'Destaque da semana'} /> : null}
      <Tags text={restaurante.tipo} />
    </InfoTags>

    <img src={restaurante.capa} alt="prato de comida" />
    <TodasInfos>
      <InformacaoNivel1>
        <h3>{restaurante.titulo}</h3>
        <Nota>
          <p>{restaurante.avaliacao}</p>
          <img src={estrela} alt="estrela" />
        </Nota>
      </InformacaoNivel1>
      <p>{restaurante.descricao}</p>
      <Botao>
        <Link to={`/restaurante/${restaurante.id}`}>Saiba mais</Link>
      </Botao>
    </TodasInfos>
  </Card>
)

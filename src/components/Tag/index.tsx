import { Tag } from './styles'

export type Props = {
  text: string
}

const Tags = ({ text }: Props) => (
  <Tag>
    <p>{text}</p>
  </Tag>
)

export default Tags

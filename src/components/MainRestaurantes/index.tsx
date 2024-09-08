import { useParams } from 'react-router-dom'

import { Section, Modal } from './styles'
import { useEffect, useState } from 'react'
import { Cardapio } from '../Main'
import { Card } from '../CardRestaurantes/styles'
import { useDispatch } from 'react-redux'
import { add } from '../../store/reducers/cart'

const MainRestaurantes = () => {
  const { id } = useParams()

  const [modalAberta, setModalAberta] = useState(false)
  const [modalFoto, setModalFoto] = useState('')
  const [modalNome, setModalNome] = useState('')
  const [modalDescricao, setModalDescricao] = useState('')
  const [modalPorcao, setModalPorcao] = useState('')
  const [modalPreco, setModalPreco] = useState(0)
  const [modalId, setModalId] = useState(0)

  function formatToCurrency(value: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  const [cardapio, setCardapio] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setCardapio(res.cardapio)
      })
  }, [id])

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(
      add({
        foto: modalFoto,
        preco: modalPreco,
        id: modalId,
        nome: modalNome,
        descricao: modalDescricao,
        porcao: modalDescricao
      })
    )

    if (!cardapio) {
      return <div>Carregando...</div>
    }
  }

  return (
    <Section className="container">
      <ul>
        {cardapio.map((prato) => (
          <li key={prato.id}>
            <Card>
              <img src={prato.foto} alt="pizza" />
              <h3>{prato.nome}</h3>
              <p>{prato.descricao}</p>
              <button
                onClick={() => {
                  setModalAberta(true)
                  setModalFoto(prato.foto)
                  setModalNome(prato.nome)
                  setModalDescricao(prato.descricao)
                  setModalPorcao(prato.porcao)
                  setModalPreco(prato.preco)
                  setModalId(prato.id)
                }}
              >
                Adicionar ao carrinho
              </button>
            </Card>
            <Modal
              onClick={() => setModalAberta(false)}
              className={modalAberta ? 'visivel' : ''}
            >
              <div className="modalBody">
                <img src={modalFoto} alt="Foto do prato" />
                <div className="modalInfo">
                  <h4>{modalNome}</h4>
                  <p>{modalDescricao}</p>
                  <br />
                  <p>{modalPorcao}</p>
                  <button onClick={addToCart}>
                    Adicionar ao carrinho - {formatToCurrency(modalPreco)}
                  </button>
                </div>
              </div>
            </Modal>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default MainRestaurantes

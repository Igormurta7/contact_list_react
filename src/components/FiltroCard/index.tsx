import { alterarFiltro } from '../../store/reducers/filtro'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export type Props = {
  nome?: string
  telefone?: string
  email?: string
  legenda: string
}

const FiltroCard = ({ nome, telefone, email, legenda }: Props) => {
  const { filtro, contatos } = useSelector((state: RootReducer) => state)
  const dispatch = useDispatch()
  const verificaEstaAtivo = () => {
    const mesmoTelefone = filtro.telefone === telefone
    const mesmoEmail = filtro.email === email
    const mesmoNome = filtro.nome === nome

    return mesmoTelefone && mesmoEmail && mesmoNome
  }

  const contarContatos = () => {
    if (nome === '') return contatos.itens.length
    if (criterio === 'prioridade') {
      return contatos.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return contatos.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        telefone,
        email,
        nome
      })
    )
  }
  const contador = contarContatos()
  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard

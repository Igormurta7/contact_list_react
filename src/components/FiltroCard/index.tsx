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
  const { filtro } = useSelector((state: RootReducer) => state)
  const dispatch = useDispatch()
  const verificaEstaAtivo = () => {
    const mesmoTelefone = filtro.telefone === telefone
    const mesmoEmail = filtro.email === email
    const mesmoNome = filtro.nome === nome

    return mesmoTelefone && mesmoEmail && mesmoNome
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
  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      {/* <S.Contador>{contador}</S.Contador> */}
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard

import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form } from './styles'
import { useDispatch } from 'react-redux'
import { cadastrar } from '../../store/reducers/contato'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarTarefa = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    dispatch(
      cadastrar({
        nome,
        telefone,
        email
      })
    )

    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo contato</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={nome}
          onChange={(evento: ChangeEvent<HTMLInputElement>) =>
            setNome(evento.target.value)
          }
          type="text"
          placeholder="Nome"
        />
        <Campo
          value={telefone}
          onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
            setTelefone(target.value)
          }
          type="tel"
          placeholder="Telefone"
        />
        <Campo
          value={email}
          onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
            setEmail(target.value)
          }
          type="email"
          placeholder="E-mail"
        />
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario

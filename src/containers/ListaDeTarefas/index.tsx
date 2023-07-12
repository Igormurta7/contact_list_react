import Tarefa from '../../components/Tarefa'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { nome } = useSelector((state: RootReducer) => state.filtro)
  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (nome !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(nome.toLowerCase()) >= 0
      )

      return contatosFiltrados
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      nome !== undefined && nome?.length > 0 ? `e "${nome}"` : ''
    if (nome === '') {
      mensagem = `${quantidade} contatos encontrados.`
    } else {
      mensagem = `${quantidade} contato(s) encontrado(s) como: "${`${nome} = ${complementacao}`}" ${complementacao}`
    }
    return mensagem
  }

  const tarefas = filtraContatos()
  const mensagem = exibeResultadoFiltragem(tarefas.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {tarefas.map((t) => (
          <li key={t.nome}>
            <Tarefa
              id={t.id}
              nome={t.nome}
              telefone={t.telefone}
              email={t.email}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas

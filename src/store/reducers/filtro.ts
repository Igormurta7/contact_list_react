import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FiltroState = {
  nome?: string
  telefone?: string
  email?: string
  termo?: string
}

const initialState: FiltroState = {
  termo: '',
  nome: '',
  telefone: '',
  email: ''
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.email = action.payload.email
      state.telefone = action.payload.telefone
      state.nome = action.payload.nome
    }
  }
})

export const { alterarTermo, alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer

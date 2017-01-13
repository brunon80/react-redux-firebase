import { combineReducers } from 'redux'

/*
  Reducers

  Reducers combinama a ação disparada com a função que deveria ser chamada.

  Isso pega uma cópia do state, modifica ela, e retorna um novo state
  quando se tem muitos stages, faz sentido ter multipos reducers que somente lide com uma parte do state

*/

import { routerReducer } from 'react-router-redux' // necessário para o react-router
import profile from './profile'
import comments from './comments'
import repos from './repos'
import loading from './loading'

// Combine todos os Reducers em um só
const rootReducer = combineReducers({ loading, repos, profile, comments, routing: routerReducer })

export default rootReducer

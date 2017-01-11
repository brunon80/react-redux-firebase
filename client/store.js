import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

/*
  Store

  Aplicações Redux tem uma unica store a qual faz:
  1. Todos os Reducers serem combinados em `rootReducer`
  2. Um estado opcional de inicialização - similar ao getInitialState do React
*/

const defaultState = {
  profile: {},
  repos: [],
  comments: {commentsList:[], isFetching: true}
}

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, defaultState, enhancers)

// history é exportado porque preciso dela em `reactreduxfirebase.js` para passar para o <Router>
export const history = syncHistoryWithStore(browserHistory, store)

/*
  Habilitar Hot Reloading
*/

if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store

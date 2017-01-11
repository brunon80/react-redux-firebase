/*
  Importar Dependencias
*/
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import 'babel-polyfill'

/*
  Importar Componentes
*/
import App from './components/App'
import Home from './components/Home'
import ProfileContainer from './components/ProfileContainer'

/* Importar CSS */
import css from  './styles/style.styl'

/* Importar our data store */
import store, { history } from './store'

/*
  Rendering
*/
render(
  <Provider store={store}>
    { /* diz ao Router para usar nossa enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/profile/:username" component={ProfileContainer}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)


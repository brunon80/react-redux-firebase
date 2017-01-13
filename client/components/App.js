import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'

import Main from './Main'

/*
  Mapeamento

  Aqui é onde a magica acontece.

  Nós temos que dar um jeito de:
  1. nosso state (nossos dados)
  2. nosso 'dispatch' de funções
  ficarem disponíveis para o componente <Main />.

  Nós vamos propagar states e funções via props (this.props.whatever)

*/


/*
  Aqui especificamos que estados queremos q fiquem disponiveis inicialmente para nosso componente
  nossos state.profile, state.comments e state.repos estarão disponíveis via this.props.profile, this.props.comments e this.props.repos
*/

function mapStateToProps(state) {
    return {
        loading: state.loading,
        repos: state.repos,
        profile: state.profile,
        comments: state.comments,
    }
}

/*
  Isso vai amarrar nossa ações ao dispatch (fazê-las disparáveis)
  e deixa-las disponíveis via props
*/

export function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}


/*
  Aqui criamos um componente <App/>  que é apenas o <Main/> com seus props
  populados com nossas ações e states

  Estou injetando dados em um nível alto, mas você pode connect() qualquer componente para fazer ações e store disponíveis para você.
*/

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App

/*
  Função de Reducer dos loadings
*/
function loading(state = true, action) {
    switch (action.type) {
    case 'STOP_LOADING' :
        return action.loading
    default:
        return state
    }
}

export default loading

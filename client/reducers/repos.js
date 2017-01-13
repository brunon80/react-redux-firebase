/*
  Função de Reducer dos repositórios
*/
function repos(state = [], action) {
    switch (action.type) {
    case 'FETCH_GIT_REPOS' :
        return [...state, ...action.repos]
    case 'RESET_GIT_REPOS' :
        return []
    default:
        return state
    }
}

export default repos

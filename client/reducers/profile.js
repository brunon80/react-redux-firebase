/*
  Função de Reduce dos profile
*/
function profile(state = [], action) {
    switch (action.type) {
    case 'FETCH_GIT_PROFILES':
        return action.profile
    default:
        return state
    }
}

export default profile

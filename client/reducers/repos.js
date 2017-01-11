function repos(state = [], action) {
  switch (action.type) {
    case 'FETCH_GIT_REPOS' :
      return action.repos;
    default:
      return state;
  }
}

export default repos;

import axios from 'axios' // biblioteca para fazer requisição Ajax, nunca tinha usado, agora vou usar sempre xD

/*
  Profile e lista de repositorios
*/

/*
  Métodos assinconos que usam um middleware pra despachar ações para os reducers
*/

/*
  Método para pegar o profile de usuario Github
*/
export function fetchGitProfile(username) {
  return (dispatch) => {
    axios.get(`https://api.github.com/users/${username}`)
    .then((response) => dispatch(fetchGitProfileAsync(response.data)))
    .catch((error) => console.log(error)) // não estou fazendo tratamento de erros para agilizar as tarefas restantes do teste (ou seja eu sei fazer :D)
  }
}

/*
  Método para pegar a lista de repositórios de um usuario Github
*/
export function fetchGitReps(username) {
  return (dispatch) => {
    axios.get(`https://api.github.com/users/${username}/repos`)
    .then((response) => dispatch(fetchGitReposAsync(response.data)))
    .catch((error) => console.log(error)) // não estou fazendo tratamento de erros para agilizar as tarefas restantes do teste (ou seja eu sei fazer :D)
  }
}

/*
  Métodos estaticos que são chamados pelo middleware
*/

export function fetchGitProfileAsync(profile) {
  return {
    type: 'FETCH_GIT_PROFILES',
    profile
  }
}

export function fetchGitReposAsync(repos) {
  return {
    type: 'FETCH_GIT_REPOS',
    repos
  }
}

/*
  Comments
*/

/*
  Método assincono que busca os comentarios na base de dados do firebase
*/

export function getComment(username, firebase) {
  if (firebase) {
    return (dispatch) => {
        const parsedPayload = []
        firebase.database().ref(`${username}/comments`).once('value').then(function(snapshot) {
        if (snapshot.val()) {
          const commentsIds = Object.getOwnPropertyNames(snapshot.val())
          for (let i = 0; i < commentsIds.length; i++) {
            const parsedAuthor = Object.getOwnPropertyNames(snapshot.val()[commentsIds[i]])[0]
            parsedPayload.push({
              id: commentsIds[i],
              user: parsedAuthor,
              text: snapshot.val()[commentsIds[i]][parsedAuthor]
            })
          }
          return dispatch(getCommentAsync(parsedPayload))
        } else return dispatch(getCommentAsync(parsedPayload))
      })
    }
  } else return dispatch(getCommentAsync([]))
}

export function getCommentAsync(payload) {
  return {
    type: 'GET_COMMENT',
    comments: payload,
    isFetching: false
  }
}

/*
  Método adiciona comentarios na base de dados do firebase e localmente
*/
export function addComment(author, comment, username, firebase) {
  if (firebase) {
    firebase.database().ref(`${username}/comments`).push(
      {
        [author]: comment,
      }
    )
  }
  return {
    type: 'ADD_COMMENT',
    author, 
    comment 
  }
}

/*
  Método edita comentarios na base de dados do firebase e localmente
*/
export function editComment(author, comment, i, username, id, firebase) {
  if (firebase) {
    const postData = {[author]: comment}
    let updates = {}
    updates[`${username}/comments/${id}`] = postData
    firebase.database().ref().update(updates)
  }
  return {
    type: 'EDIT_COMMENT',
    author, 
    comment, 
    i,
    id,
  }
}

/*
  Método exclui comentarios na base de dados do firebase e localmente
*/
export function removeComment(username, i, id, firebase){
  if (firebase) firebase.database().ref(`${username}/comments/${id}`).remove()
  return {
    type: 'REMOVE_COMMENT',
    i,
  }
}

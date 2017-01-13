/*
  Função de Reducer dos comentarios
*/

function comments(state = {}, action) {
    switch (action.type) {
    case 'ADD_COMMENT':
        if (typeof action.author !== 'undefined') {
            return {
                commentsList: [...state.commentsList, {
                    user: action.author,
                    text: action.comment,
                }],
            }
        } else {
            return [...state]
        }
    case 'EDIT_COMMENT':
        return {
            commentsList: [
                ...state.commentsList.slice(0, action.i),
                ...state.commentsList[action.i], { user: action.author, text: action.comment, id: action.id },
                ...state.commentsList.slice(action.i + 1),
            ],
        }
    case 'GET_COMMENT':
        return { commentsList: action.comments, isFetching: action.isFetching }
    case 'REMOVE_COMMENT':
        return {
            commentsList: [
                ...state.commentsList.slice(0, action.i),
                ...state.commentsList.slice(action.i + 1),
            ],
        }
    default:
        return state
    }
}

export default comments

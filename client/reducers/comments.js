function comments(state = {}, action) {
    switch(action.type) {
      case 'ADD_COMMENT':
        if (typeof action.author !== 'undefined') {
          return [...state, {
            user : action.author,
            text : action.comment
          }];
        } else {
          return [...state]
        }
      case 'EDIT_COMMENT':
        return [
          ...state.slice(0, action.i),
          {...state[action.i], user: action.author, text : action.comment},
          ...state.slice(action.i + 1)
        ];
      case 'REMOVE_COMMENT':
        return [
          ...state.slice(0, action.i),
          ...state.slice(action.i + 1)
        ];
      default:
        return state;
    }


  return state;
}

export default comments;

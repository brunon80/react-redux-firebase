// function posts(state = [], action) {
//   switch (action.type) {
//     case 'INCREMENT_LIKES' :
//       const i = action.index;
//       return [
//         ...state.slice(0, i),
//         {...state[i],  likes: state[i].likes + 1 },
//         ...state.slice(i + 1)
//       ];
//     default:
//       return state;
//   }
// }

function profile(state = [], action) {
  switch (action.type) {
    case 'FETCH_GIT_PROFILES' :
      return action.profile;
    default:
      return state;
  }
}

export default profile;

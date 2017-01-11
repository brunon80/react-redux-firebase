import axios from 'axios'
/**
  Action Creators

  These fire events which the reducer will handle
  We will later call these functions from inside our component

  Later these functions get bound to 'dispatch' fires the actual event
  Right now they just return an object

  It's a code convention to use all capitals and snake case for the event names
  We use const to store the name of the event so it is immutable

*/

export function increment(i) {
  return {
    type: 'INCREMENT_LIKES',
    index: i
  };
}

export function fetchGitProfiles(username) {
  return (dispatch) => {
    axios.get(`https://api.github.com/users/${username}`) // /repos
    .then(function (response) {
      //console.log(response.data);
      return dispatch(fetchGitProfileAsync(response.data))
    })
    .catch(function (error) {
      console.log(error);
    })
  }
}

export function fetchGitReps(username) {
  return (dispatch) => {
    axios.get(`https://api.github.com/users/${username}/repos`) // /repos
    .then(function (response) {
      //console.log(response.data);
      return dispatch(fetchGitReposAsync(response.data))
    })
    .catch(function (error) {
      console.log(error);
    })
  }
}

function fetchGitProfileAsync(profile) {
  return {
    type: 'FETCH_GIT_PROFILES',
    profile
  };
}

function fetchGitReposAsync(repos) {
  return {
    type: 'FETCH_GIT_REPOS',
    repos
  };
}


/*
  Comments
*/


export function addComment(author, comment) {
  return {
    type: 'ADD_COMMENT',
    author, // same as author: author
    comment // same as comment: comment
  };
}

export function editComment(author, comment, i) {
  return {
    type: 'EDIT_COMMENT',
    author, // same as author: author
    comment, // same as comment: comment
    i,
  };
}

export function removeComment(i){
  return {
    type: 'REMOVE_COMMENT',
    i,
  };
}

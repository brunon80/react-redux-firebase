import expect from 'expect'
import {  fetchGitProfileAsync, fetchGitReposAsync, getCommentAsync, addComment, editComment, removeComment, resetGitRepos } from '../../client/actions/actionCreators.js'

describe('Action Creators', () => {

  describe('fetchGitProfileAsync',()=> {

    it('should return a profile from server', () => {
      const payload = {
        id: '-GYUASSbhjasjkd',
        name: 'joaozinho',
        following: 150
      }


      const actual = fetchGitProfileAsync(payload)
      expect(typeof(actual)).toEqual('object')
      expect(actual.type).toEqual('FETCH_GIT_PROFILES')
    })

  })
  
  describe('fetchGitReposAsync',()=> {

    it('should return a list of repositories from server', () => {
      const repos = [{
        id: '-GYUASSbhjasjkd',
        name: 'ionic-test',
        commits: 150
      }]


      const actual = fetchGitReposAsync(repos)
      expect(typeof(actual)).toEqual('object')
      expect(actual.type).toEqual('FETCH_GIT_REPOS')
    })

  })
  
  describe('resetGitRepos',()=> {

    it('should return a list of a empty repos', () => {

      const actual = resetGitRepos()
      expect(actual.repos.length).toEqual(0)
      expect(actual.type).toEqual('RESET_GIT_REPOS')
    })

  })

  describe('getCommentAsync',()=> {

    it('should return data from server to comments array', () => {
      const payload = [{
        id: '-GYUASSbhjasjkd',
        user: 'joaozinho',
        text: 'frase de teste'
      }]

      const expected = {
        type: 'GET_COMMENT',
        comments: payload,
        isFetching: false
      }

      const actual = getCommentAsync(payload)
      expect(actual).toEqual(expected)
    })

  })

  describe('addComment',()=> {

    it('should create an action to add a comment', () => {
      const username = 'andrody'
      const author = 'Bruno'
      const comment = 'Certeza que esse cara é bom'
      const firebase = null

      const expected = {
        type: 'ADD_COMMENT',
        author,
        comment
      }

      const actual = addComment(author, comment, username, firebase)
      expect(actual).toEqual(expected)
    })

  })

  describe('removeComment',()=> {

    it('should create an action to remove a comment', () => {
      const expected = {
        type: 'REMOVE_COMMENT',
        i: 3
      }

      const actual = removeComment('andrody', 3, '-BAcyDyQwcXX', null)
      expect(actual).toEqual(expected)
    })

  })
  
  describe('editComment',()=> {

    it('should create an action to edit a comment', () => {
      const username = 'andrody'
      const author = 'Bruno'
      const comment = 'Certeza que esse cara é bom'
      const firebase = null
      const i = 2
      const id = '-adsfDFsdf5441'

      const expected = {
        type: 'EDIT_COMMENT',
        author,
        comment,
        i,
        id,
      }

      const actual = editComment(author, comment, i, username, id, firebase)
      expect(actual).toEqual(expected)
    })

  })


})

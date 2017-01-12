import expect from 'expect'
import comments from '../../client/reducers/comments'

describe('Coments Reducer', function () {

    describe('Adding a comment', () => {

        const author = 'Bruno Rolim'
        const comment = 'Cool!'
        const expected = { user: author, text: comment }
        const defaultComments = {
            commentsList: []
        }

        function addComment() {
            const action = { type: 'ADD_COMMENT', author, comment }
            const commentJson = comments(defaultComments, action)
            return commentJson.commentsList
        }

        it('should be able to add a new comment to an profile', () => {
            const profileComments = addComment()
            expect(profileComments[0]).toEqual(expected)
        })

        it('should add increase the length of the array by 1', () => {
            const profileComments = addComment()
            expect(profileComments.length).toEqual(defaultComments.commentsList.length + 1)
        })

    })

    describe('Removing a comment', function () {
        let comment1, comment2, commentState, updatedCommentsState

        before(() => {
            let action = { type: 'REMOVE_COMMENT', i: 0 }
            comment1 = { text: 'Great looking sandwich!', user: 'Bruno' }
            comment2 = { text: 'That dog though!', user: 'Andrody' }
            commentState = { commentsList: [comment1, comment2] }
            updatedCommentsState = comments(commentState, action)
            // console.log('-----------------------------------------------------------')
        })

        it('should remove a comment',()=> {
          expect(updatedCommentsState.commentsList).toExclude(comment1)
        })

        it('should decrease the length of the array by 1', ()=> {
          expect(updatedCommentsState.commentsList.length).toEqual(commentState.commentsList.length - 1)
        })

    })
    
    describe('Get comment`s list', function () {
        let commentsArray, updatedCommentsState

        before(() => {
            commentsArray = [{ text: 'Great looking sandwich!', user: 'Bruno' }, { text: 'That dog though!', user: 'Andrody' }]
            let action = { type: 'GET_COMMENT', comments: commentsArray, isFetching: false }
            updatedCommentsState = comments(commentsArray, action)
        })

        it('should return a comment`s list',()=> {
            expect(updatedCommentsState.commentsList).toEqual(commentsArray)
        })

    })

    describe('Edit a comment', function () {
        let comment1, comment2, commentState, updatedCommentsState

        before(() => {
            let action = { type: 'EDIT_COMMENT', i: 0, comment: 'Great looking Toast!', author: 'Bruno', id: '-kjsdhflSDFG' }
            comment1 = { text: 'Great looking sandwich!', user: 'Bruno' }
            comment2 = { text: 'That dog though!', user: 'Andrody' }
            commentState = { commentsList: [comment1, comment2] }
            updatedCommentsState = comments(commentState, action)
        })

        it('should edit the first comment',()=> {
          expect(updatedCommentsState.commentsList[0]).toNotEqual(comment1)
        })

        it('should keep same length of the original array', ()=> {
          expect(updatedCommentsState.commentsList.length).toEqual(commentState.commentsList.length)
        })

    })

})

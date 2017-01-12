import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)
import RepositoryList from '../../client/components/RepositoryList'
import Comments from '../../client/components/Comments'


describe('RepositoryList Component', function () {
  var result
  before(()=> {
    var renderer = ReactTestUtils.createRenderer()
    
    const props = {
      repos: [
            {
                name: 'reactreduxfirebase',
                language: 'javascript',
                private: false
            },
            {
                name: 'titulo do rep',
                language: 'javascript',
                private: true
            }
      ],
      comments: {
          commentsList:[{
              user: 'bruno',
              text: 'uma frase de teste',
              id: '-jhsahjfksdgf'
          }],
          isFetching: false
      },
      firebase: null,
      params: {
        username: 'brunon80'
      }
    }

    renderer.render(<RepositoryList {...props} />)
    result = renderer.getRenderOutput()
  })

  it('should render properly',()=>{
    expect(result.type).toEqual('div')
    expect(result.props.className).toEqual('right-col')
  })

  it('should have the right children', ()=> {
    const [ comments, title, repositorylist  ] = result.props.children
    expect(result.props.children.length).toEqual(3)
    expect(repositorylist.props.children.length).toEqual(2)
    expect(comments.type).toBe(Comments)
  })
  
  it('Comments should have one children to given props', ()=> {
    const comments = result.props.children[0]
    // console.log(comments)
    expect(comments.props.comments.isFetching).toEqual(false)
    expect(comments.props.comments.commentsList.length).toEqual(1)
  })

})




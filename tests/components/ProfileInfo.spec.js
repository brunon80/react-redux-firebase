import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)
import ProfileInfo from '../../client/components/ProfileInfo'

describe('ProfileInfo Component', function () {
  var result
  
  before(()=> {
    var renderer = ReactTestUtils.createRenderer()
    
    const props = {
      profile : {
          name: 'bruno',
          avatar_url: 'https://avatars.githubusercontent.com/u/4116121?v=3',
          bio: 'um texto qualquer',
          html_url: 'github.com/brunon80',
          followers: 500,
          following: 300,
          public_repos: 40,
          email: 'bruno@gmail.com',
          blog: 'umaurl.com.br',
          company: 'Koruja',
          location: 'bem ali'
      },
    }

    renderer.render(<ProfileInfo {...props} />)
    result = renderer.getRenderOutput()
  })

  it('should return a section element',()=>{
    expect(result.type).toEqual('section')
  })

  it('should have two children',()=>{
    expect(result.props.children.length).toEqual(3)
  })

})

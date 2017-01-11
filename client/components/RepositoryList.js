import React from 'react'
// import Photo from './Photo'
import Comments from './Comments'

const RepositoryList = React.createClass({

  render() {
    const { repos, comments  } = this.props
    // retorna uma lista de repositórios
    const repositorylist = repos.map((rep, i) => {
            return (
                <div key={i} className="rep-container">
                    <div className="rep-wrapper">
                        <p className="rep-label">Repository Name</p>
                        <p className="rep-name"><a href={`https://github.com/${this.props.params.username}/${rep.name}`}>{rep.name}</a></p>
                    </div>
                    <div className="rep-wrapper">
                        <p className="rep-label">Repository Language</p>
                        <p className="rep-language">{rep.language}</p>
                    </div>
                    <div className="rep-wrapper">
                        <p className="rep-label">Repository privacy</p>
                        <p className="rep-privacy">{rep.private ? 'Closed' : 'Opened'}</p>
                    </div>
                    
                </div>
            )
            })
    return (
        <div className="right-col">
            <Comments {...this.props} comments={comments}/> {/*aproveitando a coluna da direita para por o componente de comentários*/}
            <h1 className="right-col__title">My repositories</h1>
            <div className="repos-wrapper">
                {repositorylist}
            </div>
        </div>
    )
  }
})

export default RepositoryList

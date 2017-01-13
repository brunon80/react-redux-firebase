import React from 'react'


class RepositoryList extends React.Component {

    render() {
        const { repos } = this.props
        // retorna uma lista de repositórios
        const repositorylist = repos.map((rep, i) => (
            <div key={i} className="rep-container">
                <a className="rep-link" href={`https://github.com/${this.props.params.username}/${rep.name}`}>
                    <div className="rep-wrapper">
                        <p className="rep-label">Repository Name</p>
                        <p className="rep-name">{rep.name}</p>
                    </div>
                    <div className="rep-wrapper">
                        <p className="rep-label">Repository Language</p>
                        <p className="rep-language">{rep.language}</p>
                    </div>
                    <div className="rep-wrapper">
                        <p className="rep-label">Repository privacy</p>
                        <p className="rep-privacy">{rep.private ? 'Closed' : 'Opened'}</p>
                    </div>
                </a>
            </div>
            ))
        return (
            <div className="wrapper">
                <h1 className="right-col__title">My repositories</h1>
                <div className="repos-wrapper">
                    {repositorylist}
                </div>
            </div>
        )
    }
}

export default RepositoryList

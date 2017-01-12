import React from 'react'
import { Link } from 'react-router'

class Main extends React.Component{

  constructor(props) {
    super(props)
    this.submitSearch = this.submitSearch.bind(this)
  }

  // envia a requisição de um novo profile
  submitSearch(event) {
    event.preventDefault()
    const urlUsername = this.searchField.value.trim().toLowerCase()
    if (urlUsername) this.context.router.push(`/profile/${urlUsername}`)
    this.searchForm.reset()
  }

  render() {
    return (
      <section>
        <header className="header-container">
          <div className="header-title-wrapper"> 
            <Link to={'/'}>
              <img className="header-logo" src="http://www.iconsplace.com/icons/preview/white/github-256.png" alt="logo image" />
            </Link>
            <h1 className="header-title">Github profile search</h1>
          </div>
          <form ref={(searchForm) => {this.searchForm = searchForm}} onSubmit={this.submitSearch} className="search-form">
            <input ref={(searchField) => { this.searchField = searchField }} className="search-input" placeholder="Search here a user" type="text" />
            <button className="btn-search" type="submit">GO!</button>
          </form>
        </header>
        {/* Usando cloneElement aqui podemos passar props para baixo */}
        { this.props && React.cloneElement(this.props.children, this.props) }
      </section>
    )
  }

}

// aqui extraio o metodo push do react-router para levar a uma pagina interna de profile 
Main.contextTypes = {
    router: React.PropTypes.object,
}

export default Main

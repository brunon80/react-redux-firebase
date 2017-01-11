import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component{

  constructor(props) {
    super(props)
    this.submitSearch = this.submitSearch.bind(this)
  }

  submitSearch(event) {
    event.preventDefault()
    if (this.searchField.value) this.context.router.push(`/profile/${this.searchField.value}`)
  }

  render() {
    // Then we go ahead and return some JSX
    return (
      <div>
        <header className="header-container">
          <div className="header-title-wrapper"> 
            <Link to={'/'}>
              <img className="header-logo" src="http://www.iconsplace.com/icons/preview/white/github-256.png" alt="logo image" />
            </Link>
            <h1 className="header-title">Github profile search</h1>
          </div>
          <form onSubmit={this.submitSearch} className="search-form">
            <input ref={(searchField) => { this.searchField = searchField }} className="search-input" placeholder="Search here a user" type="text" />
            <button className="btn-search" type="submit">GO!</button>
          </form>
        </header>
        {/* We use cloneElement here so we can auto pass down props */}
        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }

};

Main.contextTypes = {
    router: React.PropTypes.object.isRequired,
}

export default Main;

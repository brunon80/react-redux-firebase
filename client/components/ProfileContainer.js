import React from 'react'
import firebase from 'firebase'
import ProfileInfo from './ProfileInfo'
import RepositoryList from './RepositoryList'

class ProfileContainer extends React.Component{
  
  constructor(props) {
    super(props)
  }

// Esse é o smart component ele quem busca os dados para serem passados para os filhos via props
  componentDidMount() {

    const username = this.props.params.username
    this.props.fetchGitProfile(username)
    this.props.fetchGitReps(username)
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyDO2S-Bt0FSZIEu-qoY3ofssoUbezGcTy8',
      authDomain: 'react-redux-firebase-54964.firebaseapp.com',
      databaseURL: 'https://react-redux-firebase-54964.firebaseio.com',
      storageBucket: 'react-redux-firebase-54964.appspot.com',
      messagingSenderId: '98839263065'
    }
    firebase.initializeApp(config)
    this.props.getComment(username, firebase)
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.params.username !== nextProps.params.username) {
      const newUsername = nextProps.params.username
      this.props.fetchGitProfile(newUsername)
      this.props.fetchGitReps(newUsername)
      this.props.getComment(newUsername, firebase)
    }

  }

  render() {

    const { profile, repos } = this.props
    return (
      <div className="photo-grid">
          <ProfileInfo {...this.props} profile={profile} />
          <RepositoryList {...this.props} reposList={repos} firebase={firebase} />
      </div>
    )
  }
}

export default ProfileContainer

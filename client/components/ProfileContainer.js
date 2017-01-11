import React from 'react';
import ProfileInfo from './ProfileInfo';
import RepositoryList from './RepositoryList';

class ProfileContainer extends React.Component{
  
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const username = this.props.params.username
    this.props.fetchGitProfiles(username)
    this.props.fetchGitReps(username)
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyDO2S-Bt0FSZIEu-qoY3ofssoUbezGcTy8',
      authDomain: 'react-redux-firebase-54964.firebaseapp.com',
      databaseURL: 'https://react-redux-firebase-54964.firebaseio.com',
      storageBucket: 'react-redux-firebase-54964.appspot.com',
      messagingSenderId: '98839263065'
    };
    firebase.initializeApp(config);
    this.props.getComment(username)
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.params.username !== nextProps.params.username) {
      const newUsername = nextProps.params.username
      this.props.fetchGitProfiles(newUsername)
      this.props.fetchGitReps(newUsername)
      this.props.getComment(newUsername)
    }

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.refs.item.value);
  }

  render() {
    const { profile, repos } = this.props
    return (
      <div className="photo-grid">
          <ProfileInfo {...this.props} profile={profile} />
          <RepositoryList {...this.props} reposList={repos} />
      </div>
    );
  }
};

export default ProfileContainer;

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
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.params.username !== nextProps.params.username) {
      this.props.fetchGitProfiles(nextProps.params.username)
      this.props.fetchGitReps(nextProps.params.username)
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

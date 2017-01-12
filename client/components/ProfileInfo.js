import React from 'react'
import Comments from './Comments'
import { Link } from 'react-router'

class ProfileInfo extends React.Component {

  render() {
    const { profile } = this.props
    return (
      <section className="left-col">
        <div className="profile-container">
          <img className="profile-image" src={profile.avatar_url} alt="profile" />
          <p className="profile-name">{profile.name}</p>
          <p className="profile-about">{profile.bio}</p>
          <a className="btn-green" href={profile.html_url || '#'}>see my Github</a>
        </div>
        <div className="info-container">
          <div className="info-statics">
            <span className="info-number">{profile.followers}</span>
            <p className="info-sub">Followers</p>
          </div>
          <div className="info-statics">
            <span className="info-number">{profile.following}</span>
            <p className="info-sub">Following</p>
          </div>
          <div className="info-statics">
            <span className="info-number">{profile.public_repos}</span>
            <p className="info-sub">Public Repos</p>
          </div>
        </div>
        <div className="other-info">
          <p className="other-info-title">
            Others Informations
          </p>
          <p className="other-info-item">{profile.email}</p>
          <p className="other-info-item">{profile.blog}</p>
          <p className="other-info-item">{profile.company}</p>
          <p className="other-info-item">{profile.location}</p>
        </div>
      </section>
    )
  }
}

export default ProfileInfo

import React from 'react';
import Comments from './Comments';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';

const ProfileInfo = React.createClass({

  render() {
    const { profile } = this.props;
    return (

      <section className="left-col">
        <div className="profile-container">
          <img className="profile-image" src={profile.avatar_url} alt="profile"/>
          <p className="profile-name">{profile.name}</p>
          <p className="profile-about">{profile.bio}</p>
          <a className="profile-github" href={profile.html_url || '#'}>see my Github</a>
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
      // <figure key={i} className="grid-figure">

      //   <div className='grid-photo-wrap'>
      //     <Link to={`/view/${post.code}`}>
      //       <img className='grid-photo' src={post.display_src} alt={post.caption} />
      //     </Link>

      //     { /*<CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
      //       <span key={post.likes} className="likes-heart">{post.likes}</span>
      //     </CSSTransitionGroup> */} 

      //   </div>

      //   <figcaption>
      //     <p>{post.caption}</p>

      //     <div className="control-buttons">
      //       <button onClick={this.props.increment.bind(null,i)} className="likes">&hearts; {post.likes}</button>

      //       <Link to={`/view/${post.code}`} className="button">
      //         <span className="comment-count">
      //           <span className="speech-bubble"></span> {(comments[post.code] ? comments[post.code].length : 0)}
      //         </span>
      //       </Link>
      //     </div>

      //   </figcaption>

      // </figure>
    )
  }
});

export default ProfileInfo;

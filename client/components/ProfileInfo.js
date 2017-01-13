import React from 'react'

class ProfileInfo extends React.Component {

    render() {
        const { profile } = this.props
        return (
            <section className="left-col">
                <div className="profile-container">
                    <img className="profile-image" src={profile.avatar_url || 'https://ssl.gstatic.com/images/branding/product/1x/avatar_circle_grey_512dp.png'} alt="profile" />
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
                    <p className="other-info-item">
                        <a href={`mailto:${profile.email}`}>{profile.email}</a>
                    </p>
                    <p className="other-info-item">
                        <a href={profile.blog}>{profile.blog}</a>
                    </p>
                    <p className="other-info-item">{profile.company}</p>
                    <p className="other-info-item">{profile.location}</p>
                </div>
            </section>
        )
    }
}

export default ProfileInfo

import React from 'react'
import firebase from 'firebase'
import ProfileInfo from './ProfileInfo'
import RepositoryList from './RepositoryList'
import Comments from './Comments'

class ProfileContainer extends React.Component {

    constructor(props) {
        super(props)
        this.showEditFields = this.showEditFields.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEditSubmit = this.handleEditSubmit.bind(this)
        this.detectBotton = this.detectBotton.bind(this)
        this.step = 1
        this.state = {
            isFieldOpened: false,
            index: null,
        }
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
            messagingSenderId: '98839263065',
        }
        firebase.initializeApp(config)
        this.props.getComment(username, firebase)

        document.addEventListener('scroll', this.detectBotton)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.params.username !== nextProps.params.username) {
            this.step = 1
            const newUsername = nextProps.params.username
            this.props.resetGitRepos()
            this.props.fetchGitProfile(newUsername)
            this.props.fetchGitReps(newUsername)
            this.props.getComment(newUsername, firebase)
        }
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.detectBotton)
    }

    detectBotton() {
        if (document.body.scrollHeight === document.body.scrollTop + window.innerHeight) {
            this.step += 1
            this.props.fetchGitReps(this.props.params.username, this.step)
        }
    }

    // toggle pra abrir e fechar o form de edição

    showEditFields(index) {
        this.setState({
            isFieldOpened: this.state.isFieldOpened && index !== this.state.index ? true : !this.state.isFieldOpened,
            index,
        })
    }

    // submeter uma edição
    handleEditSubmit(index, id) {
        /*
          this não está disponvel no retorno da função pois o contexto é outro
          então faz-se: const that = this, como um truque onde a referência pode ser obtida dentro no novo contexto
        */
        const that = this
        return (event) => {
            event.preventDefault()
            that.showEditFields(index)
            if (that.commentsComp.editedAuthor.value && that.commentsComp.editedComment.value) {
                that.props.editComment(that.commentsComp.editedAuthor.value, that.commentsComp.editedComment.value, index, that.props.params.username, id, firebase)
            }
        }
    }

    // submeter uma adição de comentario
    handleSubmit(e) {
        e.preventDefault()
        if (this.commentsComp.author.value && this.commentsComp.comment.value) {
            this.props.addComment(this.commentsComp.author.value, this.commentsComp.comment.value, this.props.params.username, firebase)
        }
        this.commentsComp.commentForm.reset()
    }

    render() {
        const { profile, repos, comments } = this.props
        return (
            <div className="photo-grid">
                <ProfileInfo {...this.props} profile={profile} />
                <div className="right-col">
                    <Comments
                      {...this.props}
                      ref={(commentsComp) => { this.commentsComp = commentsComp }}
                      comments={comments}
                      firebase={firebase}
                      showEditFields={this.showEditFields}
                      index={this.state.index}
                      isFieldOpened={this.state.isFieldOpened}
                      handleEditSubmit={this.handleEditSubmit}
                      handleSubmit={this.handleSubmit}
                    />
                    <RepositoryList {...this.props} reposList={repos} firebase={firebase} />
                </div>
            </div>
        )
    }
}

export default ProfileContainer

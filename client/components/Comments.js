import React from 'react'

class Comments extends React.Component{
  constructor(props) {
    super(props)
    this.renderComment = this.renderComment.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.showEditFields = this.showEditFields.bind(this)
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
    this.state = {
      isFieldOpened: false,
      index: null,
    }
  }

// toggle pra abrir e fechar o form de edição

  showEditFields(index) {
    this.setState({
      isFieldOpened: !this.state.isFieldOpened,
      index,
    })
  }

// retorna um comentário
  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}:</strong>
          {comment.text}
          <span className="control-btn-wrapper">
            <button className="edit-comment" onClick={() => this.showEditFields(i)}>edit</button>
            <button className="remove-comment" onClick={() => this.props.removeComment(this.props.params.username, i, comment.id)}>Remove</button>
          </span>
        </p>
        {
          this.state.index === i && this.state.isFieldOpened &&
            <form onSubmit={this.handleEditSubmit(i, comment.id)} ref={ (editForm) => {this.editForm = editForm} } className="comment-form">
              <input type="text" ref="editedAuthor" placeholder="author"/>
              <input type="text" ref="editedComment" placeholder="comment"/>
              <button type="submit" className="btn-green">Done!</button>
            </form>
        }
      </div>
    )
  }

// submeter uma edição
  handleEditSubmit(index, id) {
    /*
      this não está disponvel no retorno da função pois o contexto é outro
      então faz-se: const that = this, como um truque onde a referência pode ser pega dentro no novo contexto
    */
    const that = this
    return (event) => {
      event.preventDefault()
      that.showEditFields(index)
      if (that.refs.editedAuthor.value && that.refs.editedAuthor.value) {
        that.props.editComment(that.refs.editedAuthor.value, that.refs.editedComment.value, index, that.props.params.username, id)
      }

    }
  }

// submeter uma adição de comentario
  handleSubmit(e) {
    e.preventDefault()
    if (this.refs.author.value && this.refs.comment.value) {
      this.props.addComment(this.refs.author.value, this.refs.comment.value, this.props.params.username)
    }
    this.commentForm.reset()
  }


  render() {

    const { commentsList, isFetching } = this.props.comments
    return (
      <div className="comments">
        <h1 className="right-col__title">Comments</h1>

        {
          isFetching ?          
            <h3>Loading comments...</h3>
            :
            commentsList.length > 0 ?  commentsList.map(this.renderComment) 
            :
            <h3>There is no comments for this user now, be the first! :D</h3>
        }
        <h2 className="right-col__title default-margin-top">Write a comment</h2>
        <form onSubmit={this.handleSubmit} ref={(commentForm) => {this.commentForm = commentForm}} className="comment-form">
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <button type="submit" className="btn-green">Send comment</button>
        </form>
      </div>
    )
  }
}

export default Comments

import React from 'react';

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

  showEditFields(index) {
    this.setState({
      isFieldOpened: !this.state.isFieldOpened,
      index,
    })
  }

  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}:</strong>
          {comment.text}
          <span className="flex flex-center">
            <button className="remove-comment" onClick={() => this.showEditFields(i)}>edit</button>
            <button className="remove-comment" onClick={this.props.removeComment.bind(null, i)}>&times;</button>
          </span>
        </p>
        {
          this.state.index === i && this.state.isFieldOpened &&
            <form onSubmit={this.handleEditSubmit(i)} ref={(editForm) => {this.editForm = editForm}} className="comment-form">
              <input type="text" ref="editedAuthor" placeholder="author"/>
              <input type="text" ref="editedComment" placeholder="comment"/>
              <button type="submit" className="btn-green">Done!</button>
            </form>
        }
      </div>
    );
  }

  handleEditSubmit(index) {
    const that = this
    return (event) => {
      event.preventDefault()
      console.log(index)
      that.showEditFields(index)
      that.props.editComment(that.refs.editedAuthor.value, that.refs.editedComment.value, index);

    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addComment(this.refs.author.value, this.refs.comment.value);
    this.commentForm.reset();
  }
  render() {

    const comments = this.props.comments || [];
    return (
      <div className="comments">
        <h1 className="right-col__title">Comments</h1>

        {
          comments.length > 0 ?
            comments.map(this.renderComment) 
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
    );
  }
};

export default Comments;

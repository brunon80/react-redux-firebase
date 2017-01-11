import React from 'react';

class Comments extends React.Component{
  constructor(props) {
    super(props)
    this.renderComment = this.renderComment.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={this.props.removeComment.bind(null,this.props.params.postId, i)}>&times;</button>
        </p>
      </div>
    );
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addComment(this.props.params.postId, this.refs.author.value, this.refs.comment.value);
    this.commentForm.reset();
  }
  render() {

    const comments = this.props.comments[this.props.params.username] || [];
    return (
      <div className="comments">
        <h1 className="right-col__title">Comments</h1>

        {comments.map(this.renderComment)}

        <h2 className="right-col__title">Write a comment</h2>
        <form onSubmit={this.handleSubmit} ref={(commentForm) => {this.commentForm = commentForm}} className="comment-form">
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden/>
        </form>
      </div>
    );
  }
};

export default Comments;

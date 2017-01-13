import React from 'react'

class Comments extends React.Component {
    constructor(props) {
        super(props)
        this.renderComment = this.renderComment.bind(this)
    }

    // retorna um comentário
    renderComment(comment, i) {
        const { firebase, removeComment, params, showEditFields, index, isFieldOpened, handleEditSubmit } = this.props
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}:</strong>
                    {comment.text}
                    <span className="control-btn-wrapper">
                        <button className="edit-comment" onClick={() => showEditFields(i)}>edit</button>
                        <button className="remove-comment" onClick={() => removeComment(params.username, i, comment.id, firebase)}>Remove</button>
                    </span>
                </p>
                {
                    (index === i && isFieldOpened) &&
                        <form onSubmit={handleEditSubmit(i, comment.id)} ref={(editForm) => { this.editForm = editForm }} className="comment-edit-form ">
                            <input type="text" ref={(editedAuthor) => { this.editedAuthor = editedAuthor }} placeholder="author" defaultValue={comment.user} />
                            <textarea ref={(editedComment) => { this.editedComment = editedComment }} placeholder="comment" defaultValue={comment.text} />
                            <button type="submit" className="btn-green">Done!</button>
                        </form>
                }
            </div>
        )
    }

    render() {
        const { comments, isFetching, handleSubmit } = this.props
        return (
            <div className="comments">
                <h1 className="right-col__title">Comments</h1>

                {
                    isFetching ?
                        <h3>Loading comments...</h3>
                        :
                        comments.commentsList.length > 0 ? comments.commentsList.map(this.renderComment)
                            :
                            <h3>There is no comments for this user now, be the first! :D</h3>
                }
                <h2 className="right-col__title default-margin-top">Write a comment</h2>
                <form onSubmit={handleSubmit} ref={(commentForm) => { this.commentForm = commentForm }} className="comment-form">
                    <input type="text" ref={(author) => { this.author = author }} placeholder="author" />
                    <textarea ref={(comment) => { this.comment = comment }} placeholder="comment" />
                    <button type="submit" className="btn-green">Send comment</button>
                </form>
            </div>
        )
    }
}

export default Comments

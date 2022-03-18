import React from 'react';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
        this.handleAuthor = this.handleAuthor.bind(this);
    }

    handleDeleteComment(){
        this.props.deleteComment(this.props.comment._id);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleAuthor(){
        const { comment, users } = this.props;
        let username;
        users.forEach(user => {
            if (comment.author === user._id) {
                username = user.username;
                return;
            }
        });
        return username;
    }

    render(){
            return(
                <div className="comment-items">
                    <div className="comment-body">
                            <div className="author">
                                {this.handleAuthor()}
                            </div>
                            
                            <div className="comment">
                                {this.props.comment.body}
                            </div>

                    </div>

                    <div className="delete-button" onClick={this.handleDeleteComment}>Delete</div>
                </div>
        )
    }
}

export default CommentIndexItem;
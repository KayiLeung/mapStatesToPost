import React from 'react';
import { TiDelete } from 'react-icons/ti';
import { Link } from 'react-router-dom'; 



class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
        this.handleAuthor = this.handleAuthor.bind(this);
    }

    handleDeleteComment() {
        this.props.deleteComment(this.props.comment._id);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleAuthor() {
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

    render() {
        const { comment, users } = this.props;
        return (
            <div className="comment-items">
                <div className="comment-body">
                    <div className="author">
                    <Link to={`/users/${comment.author}`}>
                        {this.handleAuthor()}
                    </Link>
                    </div>

                    <div className="comment">
                        {this.props.comment.body}
                    </div>

                </div>

                <div className="delete-button" onClick={this.handleDeleteComment}><TiDelete /></div>
            </div>
        )
    }
}

export default CommentIndexItem;
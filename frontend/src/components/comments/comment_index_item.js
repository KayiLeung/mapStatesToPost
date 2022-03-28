import React from 'react';
import { TiDelete } from 'react-icons/ti';


class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
        this.handleAuthor = this.handleAuthor.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    handleDeleteComment() {
        if (this.props.userId === this.props.comment.author) {
            this.props.deleteComment(this.props.comment._id);
        }
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

    openModal(){
        if (this.props.userId === this.props.comment.author) {
            this.props.giveCommentId(this.props.comment._id);
            this.props.openModal('editcomment');
            console.log('opened modal')
        }
    }

    render() {
        return (
            <div className="comment-items">
                <div className="comment-body">
                    <div className="author">
                        {this.handleAuthor()}
                    </div>

                    <div className="comment">
                        {this.props.comment.body}
                    </div>

                </div>
                <div className="dropdown">
                    <div className="delete-button" onClick={this.handleDeleteComment}><TiDelete /></div>
                    <button className="edit-button" onClick={this.openModal}>Edit</button>
                </div>
            </div>
        )
    }
}

export default CommentIndexItem;
import React from 'react';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
        // this.openModal = this.openModal.bind(this);
    }
    
    // openModal() {
    //     if (this.props.user_id === this.props.comment.author_id) {
    //         this.props.giveCommentId(this.props.comment.id);
    //         this.props.openModal('editcomment');
    //     }
    // }

    handleDeleteComment(){
        this.props.deleteComment(this.props.comment._id);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render(){
            return(
                <div className="comment-items">
                    <div className="comment-body">
                        <div className="comment-box">
                            <div className="head">
                                <div className="author">
                                    Author: {this.props.comment.author}
                                </div>
                                <div>
                                    Post: {this.props.comment.post}
                                </div>
                            </div>
                            <div className="comment">
                                {this.props.comment.body}
                            </div>
                        </div>
                        <div className="delete-button" onClick={this.handleDeleteComment}>Delete</div>
                        {/* <div className="dropdown">
                            <div className="dropbutton"><i className="fa-solid fa-ellipsis"></i></div>
                            <div className="dropdown-content">
                                <div className="edit-button" onClick={this.openModal}>Edit</div>
                                <div className="delete-button" onClick={this.handleDeleteComment}>Delete</div>
                            </div>
                        </div> */}
                    </div>
                </div>
        )
    }
}

export default CommentIndexItem;
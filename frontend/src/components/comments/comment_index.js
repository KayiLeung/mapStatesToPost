import React from 'react';
import CommentIndexItem from './comment_index_item';
import './comment_index.css'

class CommentIndex extends React.Component {
  
  render() {
    const { comments, deleteComment, postId, users } = this.props;
    const postComments = comments.filter(comment => comment.post === postId);

    return (
        <ul className="comment-container"> 
          {
            postComments.map(comment => (
              <CommentIndexItem
                comment={comment}
                users={users}
                deleteComment={deleteComment}
                key={comment._id}
              />
            ))
          }
        </ul>
    );
  }
}

export default CommentIndex;
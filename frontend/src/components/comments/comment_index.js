import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  render() {
    const { comments, deleteComment } = this.props;

    return (
        <ul className="commentcontainer"> 
          {
            comments.map(comment => (
              <CommentIndexItem
                comment={comment}
                // post_id={post_id}
                // user={user}
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
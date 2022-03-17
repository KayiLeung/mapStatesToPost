import React from 'react';
import CommentIndexContainer from './comment_index_container';
import CreateCommentContainer from './create_comment_form_container';

class CommentTest extends React.Component {
    componentDidMount(){
        this.props.fetchComments();
    }
    
    render(){
        return(
            <div>
                <div>Testing Comments Here</div>
                <div>
                    <CommentIndexContainer />
                </div>
                <div>
                    <CreateCommentContainer />
                </div>
            </div>
        )
    }
}

export default CommentTest;
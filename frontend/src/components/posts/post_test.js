import React from 'react';

class PostTest extends React.Component {
    componentDidMount(){
        this.props.fetchComments();
        this.props.fetchPosts();
        this.props.fetchUsers();
    }
    
    render(){
        return(
            <div>
                <h1>Posts Test</h1>
            </div>
        )
    }
}

export default PostTest;
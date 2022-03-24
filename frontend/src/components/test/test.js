import React from 'react';
import CommentIndexContainer from '../comments/comment_index_container';
import PostsIndexContainer from '../posts/posts_index_container';

class Test extends React.Component {
    // componentDidMount(){
    //     this.props.fetchPosts();
    // }
    constructor(props){
        super(props);
        this.handlePosts = this.handlePosts.bind(this);
    }

    handlePosts(){
        const { posts } = this.props;
        const newPosts = posts.filter(post => post.stateName === 'New York')
        return newPosts
    }

    render(){
        // const { posts } = this.props
        const posts = this.handlePosts()
        return(
            <div>
                <h1>Test</h1>
                <PostsIndexContainer posts={posts} />
            </div>
        )
    }
}

export default Test;
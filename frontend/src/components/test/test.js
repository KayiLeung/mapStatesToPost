import React from 'react';
import PostsIndexContainer from '../posts/posts_index_container';

class Test extends React.Component {
    constructor(props){
        super(props);
        this.handlePosts = this.handlePosts.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    handlePosts(){
        const { posts } = this.props;
        const newPosts = posts.filter(post => post.stateName === 'NY')
        return newPosts
    }

    openModal(){
        this.props.openModal('createpost');
    }

    render(){
        // const { posts } = this.props
        const posts = this.handlePosts()
        return(
            <div>
                <h1>Test</h1>
                <div>
                    <div className='createpostbutton' onClick={this.openModal}>
                        Create Post
                    </div>
                </div>
                <PostsIndexContainer posts={posts} />
            </div>
        )
    }
}

export default Test;
import * as PostUtil from '../util/post_api_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_USER_POSTS = "RECEIVE_USER_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receiveUserPosts = posts => ({
  type: RECEIVE_USER_POSTS,
  posts
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

export const removePost = postId => ({
  type: REMOVE_POST,
  postId
})

export const fetchPosts = () => dispatch => (
  PostUtil.getPosts()
    .then(posts => dispatch(receivePosts(posts)))
    .catch(err => console.log(err))
);

export const fetchUserPosts = id => dispatch => (
  PostUtil.getUserPosts(id)
    .then(posts => dispatch(receiveUserPosts(posts)))
    .catch(err => console.log(err))
);

export const createPost = data => dispatch => {
  
  return (
  PostUtil.writePost(data)
    .then(post => {
      return dispatch(receivePost(post)
      )})
    .catch(err => console.log(err))
  )
};

export const updatePost = data => dispatch => (
  PostUtil.updatePost(data)
    .then(data => dispatch(receivePost(data)))
    .catch(err => console.log(err))
);

export const deletePost = postId => dispatch => (
  PostUtil.deletePost(postId)
      .then(() => dispatch(removePost(postId)))
      .catch(err => console.log(err))
);
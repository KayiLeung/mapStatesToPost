import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

// import '../App.scss'

import MainPageContainer from './main/main_container';
import HomePageContainer from './home/home_container';
import ModalContainer from './modal/modal_container';
import PostCreateContainer from './posts/post_create_container';
import PostShowContainer from './posts/post_show_container';
import NavBarContainer from './navbar/navbar_container';


import CommentTestContainer from './comments/comment_test_container';

const App = () => (
  <div>
    {/* <NavBarContainer /> */}
    <ModalContainer />
    <Switch>
        <AuthRoute exact path="/" component={MainPageContainer} />
        <ProtectedRoute exact path="/home" component={HomePageContainer} />
        <ProtectedRoute exact path="/posts/new" component={PostCreateContainer} />
        <ProtectedRoute exact path="/posts/postId" component={PostShowContainer} /> 
        <ProtectedRoute exact path="/comments" component={CommentTestContainer} />
    </Switch>
  </div>
);

export default App;
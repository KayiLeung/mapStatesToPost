## Description

mapStatesToPost is an original web app where users can upload a post (photo and caption) from every U.S. state they have visited, and view and comment on other user's posts.  The title is an insider developer's nod to the react-redux function `mapStateToProps`.

Inspired by the fact that people like to share about all the countries they have visited, we wondered how many U.S. states people have visited.  mapStatesToPost gives users the opportunity to share a visual scrapbook of all of those destinations. 

Try it live [here!](https://mapstatestopost.herokuapp.com/#/)

(click `Demo User` for quick access)

![splash](./frontend/public/mstpthumb.png)

## Technologies, Libraries, APIs

- MongoDB for the database
- Mongoose for models and validations
- Express.js for HTTP routes / backend API
- React/Redux for creating interactive UI and managing state
- Node.js as a runtime environment to use JavaScript in-app
- JavaScript/Axios for frontend code
- CSS to style components rendered on the browser
- React-icons library for icons
- SVG for map rendering
- AWS Simple Storage Service (S3) for uploading and hosting photos 
- Heroku to host the live site

## Features

With mapStatesToPost users can:

- Signup / Signin to an account
- View a personalized map where each state they have visited and uploaded a post/photo for is highlighted
- Click on any state to view fun facts about that state and see all other user's posts associated with that state
- View a personalized user's page with all of their posts for all states they have visited
- Create, read, edit, and delete a post with photo upload for a state they have visited (CRUD)
- Create, read, edit, and delete comments on other user's posts (CRUD)

## Coding Challenges

CHALLENGE: The MAP!

![splash](./frontend/public/mstpgif.gif)


SOLUTION:  SOLUTION HERE

```javascript
statesFilling = () => {
    const { posts, currentUser} = this.props;
    
    let states = [];
    posts.map(post => {

      if (post.user === currentUser.id) {
      states.push(post.stateName)
      }
    })

    const res = states.reduce((acc, state) => {
       acc[state] = {
        fill: "#c8808c"
      };
      return acc;
    }, {})
    return res
  }
```

CHALLENGE: Using AWS and the MongoDB server to upload photos

SOLUTION: SOLUTION HERE

```javascript
        Code snippets about photo uploads here?
```

## Future Implementations

- Users can post details on their user profile page about upcoming trips to new states
- On the user's map the user's uploaded photo for a state is transformed into the actual shape of that state and displayed on the map

const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Post = require("../../models/Post");
const posts = require("../../validation/posts");
const validatePostInput = require("../../validation/posts")

router.get("/test", (req, res) => res.json({ msg: "This is the posts route" }));

// retrieves single user's posts (user's posts index)
router.get('/user/:user_id', (req, res) => {
    Post.find({user: req.params.user_id})
        .then(posts => res.json(posts))
        .catch(err =>
            res.status(404).json({ nopostsfound: 'No posts found from that user' }
        )
    );
});

// retrieves individual post
router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err =>
            res.status(404).json({ nopostfound: 'No post found with that ID' })
        );
});

// user can create posts, protected
router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validatePostInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newPost = new Post({
        caption: req.body.caption,
        user: req.user.id
      });
  
      newPost.save().then(post => res.json(post));
    }
  );


module.exports = router;
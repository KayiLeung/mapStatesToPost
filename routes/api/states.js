const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const State = require("../../models/State");

router.get("/test", (req, res) => res.json({ msg: "This is the states route" }));

// retrieves all states
router.get('/', (req, res) => {
  State.find()
      .sort({ date: -1 })
      .then(states => res.json(states))
      .catch(err => res.status(404).json({ nostatesfound: 'No states found' }));
});

// retrieves individual state
router.get('/:id', (req, res) => {
    State.findById(req.params.id)
        .then(state => res.json(state))
        .catch(err =>
            res.status(404).json({ nostatefound: 'No state found with that ID' })
        );
});

// we create states on the backend
router.post('/', (req, res) => {
  
  const newState = new State({
    posts: req.body.posts,
    name: req.body.name,
  });
  
  newState.save().then(state => res.json(state));
}
);

module.exports = router;
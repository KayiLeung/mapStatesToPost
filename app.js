const mongoose = require("mongoose");
const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const users = require("./routes/api/users")
const posts = require("./routes/api/posts")
const passport = require("passport");
app.use(passport.initialize());
require('./config/passport')(passport);

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello Mars"));
app.use("/api/users", users);
app.use("/api/posts", posts);

const port = process.env.PORT || 5500; // change this back to 5000?

app.listen(port, () => console.log(`Server is running on port ${port}`));

const mongoose = require("mongoose");

const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const users = require("./routes/api/users")
const posts = require("./routes/api/posts")
const photos = require('./routes/api/photos')
const passport = require("passport");

debugger

app.use(passport.initialize());
require('./config/passport')(passport);

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello Mars"));
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/photos", photos)

const port = process.env.PORT || 5000; // change this back to 5000?

app.listen(port, () => console.log(`Server is running on port ${port}`));

//use for upload photo

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}
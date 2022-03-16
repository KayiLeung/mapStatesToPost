const express = require("express");
const router = express.Router();

const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const AWS = require('aws-sdk');
const path = require('path')
const fs = require('fs')


// const cors = require('cors')

// const upload = require("../../services/photo_upload")
// const deleteImage = require("../../services/imageDelete");


router.get('/',(req, res) => res.json({ msg: "This is the photos index" })),
router.get("/test", (req, res) => res.json({ msg: "This is the photos route" }));

router.post('/upload', async(req,res) => {
    const file = req.file
    console.log(file)

    // apply filter
    // resize 

    // const result = await uploadFile(file)
    // await unlinkFile(file.path)
    // console.log(result)
    // const description = req.body.description
    // res.send({ imagePath: `/images/${result.Key}` })
    res.send('hello world')
})


module.exports = router;
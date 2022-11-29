const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const { User } = require("../models/user");

router.post("/register", (req, res) => {
  let newUser = new User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save((err, doc) => {
        if (!err) {
          res.send(doc);
        } else console.log(err);
      });
    });
  });
});

router.post("/auth", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username }, (err, doc) => {
    if (err) throw err;
    if (!doc) {
      return res.json({ success: false });
    }
    bcrypt.compare(password, doc.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        return res.json({ success: true });
      } else {
        return res.json({ success: false});
      }
    });
  });
});

module.exports = router;

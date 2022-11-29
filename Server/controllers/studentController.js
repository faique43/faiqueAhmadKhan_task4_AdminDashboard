const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;

const { Student } = require("../models/student");

// localhost:3000/students/
router.get("/", (req, res) => {
  Student.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(err);
    }
  });
});

router.get("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res
      .status(400)
      .send(`No records found with given Id: ${req.params.id}`);
  }
  Student.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(err);
    }
  });
});

router.post("/", (req, res) => {
  var std = new Student({
    name: req.body.name,
    course: req.body.course,
    batch: req.body.batch,
    dob: req.body.dob,
    semester: req.body.semester,
    resStatus: req.body.resStatus,
  });
  std.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(err);
    }
  });
});

router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res
      .status(400)
      .send(`No records found with given Id: ${req.params.id}`);
  }

  var std = {
    name: req.body.name,
    course: req.body.course,
    batch: req.body.batch,
    dob: req.body.dob,
    semester: req.body.semester,
    resStatus: req.body.resStatus,
  };
  Student.findByIdAndUpdate(
    req.params.id,
    { $set: std },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log(err);
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res
      .status(400)
      .send(`No records found with given Id: ${req.params.id}`);
  }

  Student.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;

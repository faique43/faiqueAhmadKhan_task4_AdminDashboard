const mongoose = require("mongoose");

const Student = mongoose.model("Student", {
  name: { type: String },
  course: { type: String },
  batch: { type: String },
  dob: { type: Date },
  semester: { type: Number },
  resStatus: { type: String },
});

module.exports = { Student };

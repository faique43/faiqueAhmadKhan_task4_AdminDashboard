const mongoose = require("mongoose");

const Student = mongoose.model("Student", {
  name: { type: String },
  course: { type: String },
  batch: { type: String },
  semester: { type: String },
  resStatus: { type: String },
});

module.exports = { Student };

const mongoose = require("mongoose");

const emergencyContactSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "You must provide a name for the emergency contact"],
    minlength: 1,
  },
  phone: {
    type: String,
    required: [true, "You must provide a phonenumber for the emergency contact"],
    minlength: 6,
  },
})

const patientSchema = mongoose.Schema({
  _userId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  firstName: {
    type: String,
    maxlength: 20,
    required: [true, "You must provide a firstname"],
    minlength: 1,
  },
  lastName: {
    type: String,
    maxlength: 20,
    required: [true, "You must provide a lastname"],
    minlength: 1,
  },
  _doctorId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    index: true,
  },
  emergencyContact: {
    type: [emergencyContactSchema],
  },
  profilePicture: {
    type: mongoose.Schema.Types.String,
  }
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;

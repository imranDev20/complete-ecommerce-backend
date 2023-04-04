const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide us your name"],
      trim: true,
      //   unique: [true, "Name must be unique."],
      minLength: [3, "Name must be atleast 3 characters."],
      maxLength: [100, "Name is too large."],
    },

    email: {
      type: String,
      required: [true, "Please provide an email address."],
      trim: true,
      unique: [true, "This email already exists. Email must be unique."],
    },
    password: {
      type: String,
      required: [true, "Password is required for user authentication."],
    },
    address: {
      type: String,
      required: [true, "Please provide an address"],
      trim: true,
      minLength: [3, "Address is too short."],
      maxLength: [200, "Address is way too large. "],
    },

    phone: {
      type: String,
      required: [true, "Please provide a phone number."],
      trim: true,
      validate: {
        validator: function (v) {
          var regex =
            /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/;

          return !v || !v.trim().length || regex.test(v);
        },
        message: "Provided phone number is invalid.",
      },
    },
  },
  { timestamp: true }
);

const User = mongoose.model("Users", userSchema);

module.exports = User;

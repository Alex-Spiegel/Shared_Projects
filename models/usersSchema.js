const { Schema, model } = require("mongoose");

const DOCUMENT_NAME = "user";
const COLLECTION_NAME = "users";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userModel = model(DOCUMENT_NAME, userSchema, COLLECTION_NAME);

module.exports = userModel;

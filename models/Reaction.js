const { Schema, Types } = require("mongoose");
const moment = require("moment");

const reactionSchema = new Schema({
  reactionId: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: Date.now,
    get: (createdAt) => moment(createdAt).format("MMMM Do YYYY, h:mm:ss a"),
  },
  toJson: {
    getters: true,
  },
  id: false,
});

module.exports = reactionSchema;

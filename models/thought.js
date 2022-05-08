const { Schema, model } = require("mongoose");
const moment = require("moment");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: String,
    default: Date.now,
    get: createdAt => moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")
  },
  username: 
    {
      type: String,
      required: true,
    },
  reactions: [reactionSchema],
    
  toJson: {
    virtuals: true,
    getters: true
  },
  id: false,
});

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;

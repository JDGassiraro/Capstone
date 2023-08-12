import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,

    //validation allows special characters along with letters and numbers to be accepted
    validate: /^\w+/
  }
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;

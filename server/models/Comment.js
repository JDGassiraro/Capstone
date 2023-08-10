import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,

    //validation that allows
    validate: /^\w+/
  }
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;

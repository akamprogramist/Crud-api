import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  creator: {
    type: String,
    require: true,
  },
});

const Post = mongoose.model("post", postSchema);
export default Post;

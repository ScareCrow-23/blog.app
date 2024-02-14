import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        "https://i.pinimg.com/564x/ed/f5/dc/edf5dccbce70efe5e11efe8b9dea9c22.jpg",
    },
    category: {
      type: String,
      default: "uncategorized",
    },
    slug: {
      type: String,
      require: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;

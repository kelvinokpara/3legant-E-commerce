import mongoose from "mongoose";

const wishlistSchema = mongoose.Schema(
  {
    user: { type: String, required: true },
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
      },
    ],
  },
  { timestamps: true }
);

const wishlistModel = mongoose.model("wishlist", wishlistSchema);

export default wishlistModel;

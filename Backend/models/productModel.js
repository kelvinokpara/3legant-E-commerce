import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: { type: String, required: [true, "Please provide title"] },
    subtitle: { type: String },
    description: { type: String },
    creator: { type: String, required: [true, "Name of author is required"] },
    price: { type: String },
    stock: { type: Number },

    image: { type: String, required: [true, "please provide image url"] },
    url: {
      type: String,
      required: [true, "please provide  url"],
      unique: true,
    },
    category: {
      type: String,
      enum: ["electronics", "clothing", "gaming", "general", "furniture"],
      default: "general",
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("product", productSchema);

export default productModel;

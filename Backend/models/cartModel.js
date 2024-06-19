import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
  {
    user: { type: String, required: true },
    cart: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
      },
    ],
  },
  { timestamps: true }
);

const cartModel = mongoose.model("cart", cartSchema);

export default cartModel;

import mongoose, { Types } from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      min: 6,
      max: 40,
      required: [true, "Please provide a username"],
    },
    email: {
      type: String,
      unique: [true, "This email address has been used by another user."],
      min: 6,
      max: 40,
      required: [true, "Please provide an email address"],
    },
    password: {
      type: String,
      min: 8,
      required: [
        true,
        "Password must be valid with a minimum or eight(8) characters.",
      ],
    },
    role: {
      type: String,
      enum: ["regular", "admin", "seller"],
      default: "regular",
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);
export default userModel;

import mongoose from "mongoose";
import userModel from "../models/userModel";
import httpStatus from "http-status";

export const CreateUser = async (req, res) => {
  const user = req.body;

  try {
    const usernameExist = await userModel.findOne(
      { username: user.username } || { email: user.email }
    );
    if (usernameExist) {
      res.status(httpStatus.BAD_REQUEST).json({
        status: "error",
        data: "user does not exist",
      });
    }
    return;
  } catch (error) {}
};
export const GetSingleUser = (req, res) => {
  let userId = req.userId;
  console.log(userId);
  if (userId) {
    res.status(httpStatus.OK).json({
      status: "success",
      data: "single user exists",
    });
  } else {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "Error",
      data: "single user does not exists",
    });
  }
};
export const GetAllUsers = (req, res) => {};
export const RemoveUser = (req, res) => {};

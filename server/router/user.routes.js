import express from "express";
import { UserModel } from "../model/user.model.js";
import mongoose from "mongoose"

const userRouter = express.Router();

userRouter.post("/user", async (req, res) => {
  try {

    const { name, email, username } = req.body;

    if (
      !name
    ) {
      return res.status(400).json({
        msg: "Please enter your name",
      });
    };


    if (
      !email ||
      !email.match(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
      )
    ) {
      return res.status(400).json({
        msg: "Invalid email. Please check if your email meet the requirements",
      });
    };

    if (
      !username
    ) {
      return res.status(400).json({
        msg: "Username is required",
      });
    }; 

    const createdUser = await UserModel.create({
      ...req.body,
    });

    return res.status(201).json(createdUser);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

userRouter.get("/:id", async (req, res) => {
  try {
    // const id = (req.params.id).trim();
    // const ObjectId = new ObjectId();
    // console.log(ObjectId);
    
    const userData = await UserModel.findOne({_id: req.params.id});

    //({_id:mongoose.Types.ObjectId.(id)})

    console.log(userData); 
    return res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

export { userRouter };


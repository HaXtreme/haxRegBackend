import express from "express";
import { post as UserReg } from "../models/user.js";

const router = express.Router();

router.post("/users/reg", async (req, res, next) => {
  try {
    const userData = req.body;
    const userPost = new UserReg({
        haxtreme_id: Math.random(),
        data: userData
    });
    userPost.set(userData);
    const userVerify = await userPost.save();
    console.log(userVerify)
    if (userVerify.data.teamName === userData.teamName) {
      res.status(201).send({
        message: "user application submited",
      });
    } else {
      res.status(422).send({
        message: "Failed",
      });
      throw Error("user registration unsuccessful! Plz try again");
    }
  } catch (error) {
    console.log(error);
  }
});


export {router};
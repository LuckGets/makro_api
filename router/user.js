const express = require("express");

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.status(200).json({ message: "This is user path ok>" });
});

userRouter.post("/", (req, res, next) => {
  console.log(req.body);
  const { email } = req.body;
  res.status(200).json({ email: email });
});

userRouter.patch("/", (req, res, next) => {
  console.log(req.body);
  const { email } = req.body;
  res.status(200).json({ pathchEmail: email });
});

userRouter.post("/signup", (req, res, next) => {});

module.exports = userRouter;

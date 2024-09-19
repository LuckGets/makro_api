const express = require("express");

const orderRouter = express.Router();

orderRouter.get("/", (req, res, next) => {
  res.status(200).json({ message: "This is order path!" });
});

orderRouter.post("/", (req, res, next) => {
  res.status(200).json({ message: "This is order path!" });
});

orderRouter.patch("/", (req, res, next) => {
  res.status(200).json({ message: "This is order path!" });
});

module.exports = orderRouter;

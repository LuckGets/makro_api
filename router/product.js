const express = require("express");

const productRouter = express.Router();

productRouter.get("/", (req, res, next) => {
  res.status(200).json({ message: "This is order path!" });
});

productRouter.post("/", (req, res, next) => {
  res.status(200).json({ message: "This is order path!" });
});

productRouter.patch("/", (req, res, next) => {
  res.status(200).json({ message: "This is order path!" });
});

module.exports = productRouter;

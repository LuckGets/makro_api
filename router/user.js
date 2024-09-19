const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
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

userRouter.post("/signup", async (req, res, next) => {
  const { firstname, lastname, email, phone } = req.body;

  const signupObj = { firstname, lastname, email, phone };

  const isUserExist = await prisma.user.findFirst({
    where: {
      OR: [
        {
          email: email,
        },
        {
          phone: phone,
        },
      ],
    },
  });

  if (isUserExist) {
    return res.status(400).json({ message: "User already exist" });
  }

  // SELECT * FROM USER WHERE email = email OR phone = phone

  const user = await prisma.user.create({ data: signupObj });

  if (user) {
    res
      .status(201)
      .json({ message: "The user was created successfully!", user });
  }
});

module.exports = userRouter;

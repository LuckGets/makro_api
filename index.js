const express = require("express");
const server = express();

// Router

const { userRouter, orderRouter, productRouter } = require("./router");

const PORT = 8080;
server.use(express.json());

server.use("/user", userRouter);
server.use("/order", orderRouter);
server.use("/product", productRouter);
server.get("/test", (req, res) => {
  res.status(200).json({ message: "Hello from server" });
});

server.listen(PORT, () => {
  console.log(`Server is listening at PORT:${PORT}...`);
});

// Designed path : /user , /order, /product

// User /user
// C  POST✅
// R GET ✅
// U PATCH or PUT ✅
// D

// Order /order
// C ok
// R ok
// U ok
// D ?

// Address ?path
// C ok
// R ok
// U ok
// D

// user --> order == order_product
// user --> ORDER # 12 --> /order
// order_Product
// C ok ?
// R ok
// U ??
// D ??

// Product /product
// C OK
// R OK
// U OK
// D ??

// Product_image

// Category
// Maybe seeding

// user --> API : role // Admin , client ,

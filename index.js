const express = require("express");
const server = express();

const PORT = 8080;

server.get("/test", (req, res) => {
  res.status(200).json({ message: "Hello from server" });
});

server.listen(PORT, () => {
  console.log(`Server is listening at PORT:${PORT}...`);
});

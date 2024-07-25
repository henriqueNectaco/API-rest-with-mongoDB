const express = require("express");
const app = express();
app.use(express.json())
require("dotenv").config();
const main = require("./db");
main()
const port = process.env.PORT || 3000;

const pictureRouter = require("./routes/picture");
const usersRouters = require('./routes/user')
app.use("/pictures", pictureRouter);
app.use("/users", usersRouters)
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

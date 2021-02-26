require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

const connectDB = require("./config/db");
connectDB();

app.use(cors());
app.use(express.json());

const usersRouter = require("./routes/Users");
const friendsRouter = require("./routes/Friends");

app.use("/users", usersRouter);
app.use("/friends", friendsRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

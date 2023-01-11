const express = require("express");
const dbConnection = require("./db/connect");
const taskRouter = require("./routes/task");
require("dotenv").config();

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome Home!");
});

app.use("/api/tasks", taskRouter);

const PORT = process.env.PORT || 8005;
const DB_URL = process.env.DB_URL;

const start = async () => {
  try {
    console.log(`Connecting to database on url: ${DB_URL}`);
    await dbConnection(DB_URL);
    console.log(`Connected to database on url: ${DB_URL}`);
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();

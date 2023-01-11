const express = require("express");
const {
  addTask,
  getAllTasks,
  updateTask,
  deleteTask,
} = require("../controllers/task");

const router = express.Router();

router.route("/").post(addTask).get(getAllTasks);
router.route("/:id").put(updateTask).delete(deleteTask);

module.exports = router;

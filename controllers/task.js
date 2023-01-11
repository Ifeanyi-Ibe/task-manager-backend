const Task = require("../models/task");
const _ = require("lodash");

exports.addTask = async (req, res) => {
  const { title } = req.body;

  let task = await Task.findOne({ title });

  if (task)
    return res.status(400).send("A task with this title already exists");

  task = new Task({ title });

  await task.save();

  res.status(201).send(_.pick(task, ["_id", "title", "completed"]));
};

exports.getAllTasks = async (req, res) => {
  let tasks = await Task.find().select("title completed");

  if (tasks.length === 0) return res.status(200).send("No tasks were found");

  res.status(200).json({ count: tasks.length, tasks });
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const task = await Task.findById(id);

  if (!task) return res.status(400).send(`No task found with id: ${id}`);

  task.title = title;
  task.completed = completed;

  await task.save();

  res.status(200).send(task);
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);

  if (!task) return res.status(400).send(`No task found with id: ${id}`);

  await task.remove();

  res.status(200).send("Task successfully deleted");
};

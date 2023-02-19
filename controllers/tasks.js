const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ succeed: false });
  }
};

const createTask = async (req, res) => {
  try {
    await Task.create(req.body);
    res.status(201).json({ succeed: true });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getOneTask = (req, res) => {
  res.send("One Task");
};

const updateTask = (req, res) => {
  res.send("Task Updated");
};

const deleteTask = (req, res) => {
  res.send("Task Deleted");
};

module.exports = {
  getAllTasks,
  createTask,
  getOneTask,
  updateTask,
  deleteTask,
};

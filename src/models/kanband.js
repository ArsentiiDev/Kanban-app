// models/kanban.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const subtask = new Schema({
  title: String,
  isDone: Boolean,
});

const taskSchema = new Schema({
  title: String,
  description: String,
  status: String,
  subtasks: [subtask],
});

const statusSchema = new Schema({
  title: String,
});

const projectSchema = new Schema({
  name: String,
  tasks: [taskSchema],
  statuses: [statusSchema],
});

const Project = mongoose.model("Project", projectSchema);

module.exports = {
  Project,
};

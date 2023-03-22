import mongoose from 'mongoose';

const { Schema } = mongoose;

const subtaskSchema = new Schema({
  id: Number,
  title: String,
  isDone: Boolean,
});

const taskSchema = new Schema({
  id: Number,
  title: String,
  description: String,
  subtasks: [subtaskSchema],
});

const columnSchema = new Schema({
  id: Number,
  title: String,
  tasks: [taskSchema],
});

const kanbanSchema = new Schema({
  id: String,
  columns: [columnSchema],
});

const KanbanModel = mongoose.models.Kanban || mongoose.model('Kanban', kanbanSchema);

export default KanbanModel;

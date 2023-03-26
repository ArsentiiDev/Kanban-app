import mongoose from 'mongoose';

const { Schema } = mongoose;

// subtaskSchema
const subtaskSchema = new Schema({
  title: String,
  isDone: Boolean,// Reference to the parent task
});

// taskSchema
const taskSchema = new Schema({
  title: String,
  description: String,
  createdAt: Date, // Reference to the parent column
  subtasks: [subtaskSchema], // List of reference IDs to subtasks
});

const columnSchema = new Schema({
  title: String,
  tasks: [taskSchema],
});

const kanbanSchema = new Schema({
  title: String,
  createdAt: Date,
  columns: [columnSchema],
});

const KanbanModel = mongoose.models.Kanban || mongoose.model('Kanban', kanbanSchema);

export default KanbanModel;

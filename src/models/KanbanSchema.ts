import mongoose from 'mongoose';
import { kanbanBoards } from '@/Types/KanbanTypes';
import { tasks } from '@/Types/KanbanTypes';
import { columns } from './../Types/KanbanTypes';

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

export const KanbanModel = mongoose.models.Kanban || mongoose.model('Kanban', kanbanSchema);

export const getBoards = () => KanbanModel.find();
export const deleteBoardById = (id:string) => KanbanModel.findOneAndDelete({_id: id});
export const createBoard = (values: Record<string,any>) => new KanbanModel(values).save().then((board:any)=>board.toObject());

export const addTask = async (boardId:string, columnId:string, task:tasks) => {
  const board = await KanbanModel.findById(boardId);
  if (!board) {
    throw new Error('Board not found');
  }

  const column = board.columns.id(columnId);
  if (!column) {
    throw new Error('Column not found');
  }

  const createdTask = column.tasks.create(task); // Create a new task with a populated _id
  column.tasks.push(createdTask);
  await board.save();
  return createdTask;
};

export const addColumn = async (boardId:string, column:columns) => {
  const board = await KanbanModel.findById(boardId);
  if (!board) {
    throw new Error('Board not found');
  }
  const createdColumn = board.columns.create(column);
  board.columns.push(createdColumn);
  await board.save();
  return createdColumn;
}


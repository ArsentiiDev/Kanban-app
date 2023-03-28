// pages/api/tasks.js
import dbConnect from '../../lib/dbConnect';
import { NextApiRequest } from 'next';
import { NextApiResponse } from 'next';
import { addTask } from './../../models/KanbanSchema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body, query } = req;

  await dbConnect();

  switch (method) {
    case 'POST': // Adding a task
      try {
        const { kanbanId, task, columnId } = body;
        console.log(kanbanId)
        console.log(task)

        const addedTask = await addTask(kanbanId, columnId, task);

        res.status(200).json({ success: true, data: {task: addedTask} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;


    default:
      res.status(400).json({ success: false });
      break;
  }
}

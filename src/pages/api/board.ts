import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/dbConnect';
import KanbanModel from '../../models/KanbanSchema';

export default async function handler(req:NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const kanbanBoards = await KanbanModel.find({});
        res.status(200).json({ success: true, data: kanbanBoards });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'POST':
      try {
        const kanbanBoard = await KanbanModel.create(req.body);
        res.status(201).json({ success: true, data: kanbanBoard });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
        try {
          const { id } = req.query;
          const deletedBoard = await KanbanModel.findOneAndDelete({ id });
          if (!deletedBoard) {
            res.status(404).json({ success: false, message: 'Board not found' });
          } else {
            res.status(200).json({ success: true, data: deletedBoard });
          }
        } catch (error) {
          res.status(400).json({ success: false });
        }
    break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

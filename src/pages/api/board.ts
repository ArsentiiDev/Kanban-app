import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/dbConnect';
import {createBoard, deleteBoardById, getBoards, KanbanModel} from '../../models/KanbanSchema';

export default async function handler(req:NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await dbConnect();
  console.log('CONNECTED SUCCESSFULL')

  switch (method) {
    case 'GET':
      try {
        const kanbanBoards = await getBoards();
        res.status(200).json({ success: true, data: kanbanBoards });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'POST':
      try {
        const kanbanBoard = await createBoard(req.body)
        res.status(201).json({ success: true, data: kanbanBoard });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
        try {
          let deletedBoard;
          const {id} = req.query;
          if (id) {
            deletedBoard = await deleteBoardById(id as string);
          }
          
          res.status(200).json({ success: true, data: deletedBoard });
        } catch (error) {
          res.status(400).json({ success: false });
        }
    break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

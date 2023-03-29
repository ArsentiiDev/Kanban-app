import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/dbConnect';
import {createBoard, deleteBoardById, getBoards, KanbanModel} from '../../models/KanbanSchema';
import { editBoard } from './../../models/KanbanSchema';

export default async function handler(req:NextApiRequest, res: NextApiResponse) {
  const { method, body, query } = req;

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
        const kanbanBoard = await createBoard(body)
        res.status(201).json({ success: true, data: kanbanBoard });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT': 
      try {
        const {activeBoard, newBoard} = body
        const kanbanBoard = await editBoard(activeBoard, newBoard)
        console.log('boardsAPi', kanbanBoard)
        res.status(200).json({success: true, data: {board: kanbanBoard}})
      } catch (error) {
        res.status(400).json({success: false})
      }
      break;
    case 'DELETE':
        try {
          let deletedBoard;
          const {id} = query;
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

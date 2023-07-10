import { NextRequest, NextResponse } from "next/server";
import { addColumn, KanbanModel } from './../../models/KanbanSchema';
import dbConnect from './../../lib/dbConnect';
import { NextApiRequest, NextApiResponse } from "next";
import { columns } from './../../Types/KanbanTypes';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const { method } = req;

    
    await dbConnect();

    switch(method) {
        case 'POST':
            try {
                let {boardId, column} = req.body;
                let addedColumn = await addColumn(boardId as string, column as columns);
                res.status(200).json({success: true, data: {column: addedColumn}})
            } catch(err) {
                res.status(400).json({ success: false });
            }
            break;
        default: 
            res.status(400).json({success:false})
    }


}
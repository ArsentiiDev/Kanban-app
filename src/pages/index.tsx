import Board from '@/components/Board';
import EmptyBoard from '@/components/EmptyBoard';
import Layout from '@/components/Layout';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddModalVisibility } from '@/store/SidebarSlice';
import AddBoardModal from './../Modals/AddBoardModal';
import { kanbanBoards } from './../Types/KanbanTypes';
import { setActiveBoard } from '@/store/boardSlice';
import { GetServerSideProps } from 'next';



export default function Home({ kanbanBoards }: {
  kanbanBoards: kanbanBoards[] | []
}) {

  const [boards, setBoards] = useState(kanbanBoards.length ? kanbanBoards : [])
  const addBoardModalOpen = useSelector((state: any) => state.sidebar.addBoardModalOpen);

  const dispatch = useDispatch();


  const toggleAddModal = () => {
    dispatch(toggleAddModalVisibility(!addBoardModalOpen))
  }

  useEffect(() => {
    dispatch(setActiveBoard(boards ? boards[0] : null));
  })

  return (
    <Layout boards={boards}>
      <Board boards={boards} />
      {addBoardModalOpen && (
        <AddBoardModal triggerEvent={toggleAddModal} setBoards={setBoards} boards={boards} />
      )}
    </Layout >
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get('http://localhost:3000/api/board');
  const data = await response.data.data

  return {
    props: {
      kanbanBoards: data
    }
  }
}

import Board from '@/components/Board';
import EmptyBoard from '@/components/EmptyBoard';
import Layout from '@/components/Layout';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddModalVisibility } from '@/store/SidebarSlice';
import AddBoardModal from './../Modals/AddBoardModal';
import { kanbanBoards } from './../Types/KanbanTypes';



export default function Home({ kanbanBoards }: {
  kanbanBoards: kanbanBoards[]
}) {

  const [boards, setBoards] = useState(kanbanBoards.length ? kanbanBoards : null)
  const addBoardModalOpen = useSelector((state: any) => state.sidebar.addBoardModalOpen);

  const dispatch = useDispatch();


  const toggleAddModal = () => {
    dispatch(toggleAddModalVisibility(!addBoardModalOpen))
  }

  return (
    <Layout boards={boards}>
      <Board boards={boards} />
      {addBoardModalOpen && (
        <AddBoardModal triggerEvent={toggleAddModal} setBoards={setBoards} boards={boards} />
      )}
    </Layout >
  )
}

export async function getServerSideProps() {
  const response = await axios.get('http://localhost:3000/api/kanban');
  // console.log('RESPONSE:', response)
  const data = await response.data.data

  return {
    props: {
      kanbanBoards: data
    }
  }
}

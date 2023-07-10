import Board from '@/components/Board';
import EmptyBoard from '@/components/EmptyBoard';
import Layout from '@/components/Layout';
import axios from 'axios';
import {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { kanbanBoards } from './../Types/KanbanTypes';
import { GetServerSideProps } from 'next';
import { setBoards } from '@/store/boardSlice';
import { Dispatch } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

export default function Home({ kanbanBoards }: {
  kanbanBoards: kanbanBoards[] | []
}) {

  const dispatch:Dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBoards(kanbanBoards))
  }, [kanbanBoards])

  return (
    <Layout>
      <Board />
    </Layout >
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get(`${process.env.BASE_URL}/api/board`);
  const data = await response.data.data

  return {
    props: {
      kanbanBoards: data
    }
  }
}

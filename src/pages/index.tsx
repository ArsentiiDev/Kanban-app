import Board from '@/components/Board';
import Layout from '@/components/Layout';


export default function Home() {
  const boards = [
    {
      id: 'Platform Launch',
      statuses: [{
        id: 1,
        title: 'To Do',
        tasks: [
          { id: 1, title: 'Task 1', description: 'Description for Task 1' },
          { id: 2, title: 'Task 2', description: 'Description for Task 2' },
        ],
      },
      {
        id: 2,
        title: 'In Progress',
        tasks: [
          { id: 3, title: 'Task 3', description: 'Description for Task 3' },
        ],
      },
      {
        id: 3,
        title: 'Done',
        tasks: [
          { id: 4, title: 'Task 4', description: 'Description for Task 4' },
        ],
      }]
    },
    {
      id: 'Marketing Plan',
      statuses: [{
        id: 1,
        title: 'To Do',
        tasks: [
          { id: 1, title: 'Create Marketing Plan', description: 'Description for Task 1' }
        ],
      },
      {
        id: 2,
        title: 'In Progress',
        tasks: [
        ],
      },
      {
        id: 3,
        title: 'Done',
        tasks: [
          { id: 2, title: 'Marketing plan approved', description: 'Description for Task 4' },
        ],
      }]
    },
    {
      id: 'Roadmap',
      statuses: [{
        id: 1,
        title: 'To Do',
        tasks: [
          { id: 1, title: 'Create a Roadmap', description: 'Description for Task 1' }
        ],
      },
      {
        id: 2,
        title: 'In Progress',
        tasks: [
        ],
      },
      {
        id: 3,
        title: 'Done',
        tasks: [
        ],
      }]
    }
  ]
  return (
    <Layout boards={boards}>
      <Board boards={boards} />
    </Layout >
  )
}

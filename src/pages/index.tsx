import Column from './../components/Column';
import Task from './../components/Task';
import { useEffect, useState } from 'react';
import AddColumnModal from '../Modals/AddColumnModal';

// const columns = [
//   {
//     id: 1,
//     title: 'To Do',
//     tasks: [
//       { id: 1, title: 'Task 1', description: 'Description for Task 1' },
//       { id: 2, title: 'Task 2', description: 'Description for Task 2' },
//     ],
//   },
//   {
//     id: 2,
//     title: 'In Progress',
//     tasks: [
//       { id: 3, title: 'Task 3', description: 'Description for Task 3' },
//     ],
//   },
//   {
//     id: 3,
//     title: 'Done',
//     tasks: [
//       { id: 4, title: 'Task 4', description: 'Description for Task 4' },
//     ],
//   },
// ];

export default function Home() {
  const [addColumnOpen, setAddColumnOpen] = useState(false)
  const [columns, setColumns] = useState([
    {
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
    },
  ])
  const toggleAddColumnModal = () => {
    setAddColumnOpen(!addColumnOpen)
  }

  useEffect(() => {

  })
  return (
    <div>
      <div className={`flex md:relative md:left-[18rem] md:top-[1rem] overflow-x-scroll min-h-screen bg-mainBG text-white pt-12`}>
        {columns.map((column) => (
          <Column key={column.id}>
            <h2 className="font-bold text-sm mb-4 tracking-widest text-secondary">{column.title} ({column.tasks.length})</h2>
            {column.tasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </Column>
        ))}
        <Column
          stylings={`bg-newColumn hover:shadow-xl hover:text-lightBlue hover:shadow-lightBlue/10 cursor-pointer`}>
          <div
            onClick={() => toggleAddColumnModal()}
            className="h-[100%] flex items-center justify-center"
          >
            <h2 className="font-bold text-2xl tracking-widest text-center">+New Column</h2>
          </div>
        </Column>
      </div>
      {
        addColumnOpen && (
          <AddColumnModal setAddColumnOpen={setAddColumnOpen} />
        )
      }
    </div >

  )
}

import React, { useState } from 'react';
import { IoCheckmarkCircleOutline, IoCheckmarkCircle } from 'react-icons/io5';
import { RiDeleteBinLine } from 'react-icons/ri';

function Background() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [timeLimitation, setTimeLimitation] = useState('');
  const [tasks, setTasks] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      name: taskName,
      timeLimit: timeLimitation,
      complete: false, // Initialize completion status to false
    };
    setTasks([newTask, ...tasks]);
    setTaskName('');
    setTimeLimitation('');
    closeModal();
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].complete = !updatedTasks[index].complete;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="relative w-full h-screen bg-zinc-800">
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[12vw] leading-none tracking-tighter">
          DOCS
        </h1>
        <button onClick={openModal} className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md">
          Add Task
        </button>
        <div className="flex flex-col p-3">
          {tasks.map((task, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-md mb-4 w-80 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">{task.name}</h3>
                <p className="mb-2">Deadline: {task.timeLimit}</p>
                <div>
                  {task.complete ? (
                       <>
                       <div className="flex">
                       <IoCheckmarkCircle
                         className="text-green-500"
                         size={24}
                         onClick={() => handleToggleComplete(index)}
                       />
                       <span className="text-green-500 ml-2">Done</span>
                       </div>
                     </>
                  ) : (
                    <div className="flex">
                      <IoCheckmarkCircleOutline
                      className="text-gray-500"
                      size={24}
                      onClick={() => handleToggleComplete(index)}
                    /><span className="text-gray-500 ml-2">Pending</span>
                    </div>
                  
                  )}
                </div>
              </div>
              <button onClick={() => handleDeleteTask(index)}>
                <RiDeleteBinLine className="text-red-500" size={24} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-2xl mb-4">Add Task</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="taskName" className="block mb-1">Task Name:</label>
                <input
                  type="text"
                  id="taskName"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  className="border-gray-300 border rounded-md px-3 py-1 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="timeLimitation" className="block mb-1">Deadline:</label>
                <input
                  type="text"
                  id="timeLimitation"
                  value={timeLimitation}
                  onChange={(e) => setTimeLimitation(e.target.value)}
                  className="border-gray-300 border rounded-md px-3 py-1 w-full"
                />
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
              <button onClick={closeModal} className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Cancel</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Background;

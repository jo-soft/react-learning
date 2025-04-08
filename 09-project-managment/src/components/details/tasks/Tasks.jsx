import { useRef } from 'react';
export default function Tasks({ tasks, setTasks }) {

    const taskInputRef = useRef();

    const handleAddTask = (e) => {
        e.preventDefault();
        setTasks([
            ...tasks, 
            {
                name: taskInputRef.current.value,
                id: Date.now(),
            }
        ]);

        taskInputRef.current.value = '';
    }

    const handleClearTaskClick = (taskId, e) => {
        e.preventDefault
        setTasks(
            [...tasks].filter((task) => task.id !== taskId)
        )
    }

    return (
        <div className="pt-4">
            <h3 className="mb-8 font-bold uppercase md:text-xl text-stone-500">Tasks</h3>
            <div className="flex items-center justify-between">
                <input ref={taskInputRef} type="text" placeholder="Add a new task" className="border border-gray-300 rounded p-2" />
                <button 
                type="button" 
                onClick={handleAddTask} 
                className="text-stone-600 hover:text-stone-950"
                >Add</button>
            </div>
            <div>
                {tasks.length === 0 ? (
                    <p className="text-gray-500">No tasks available</p>
                ) : (
                    <ul className="py-4 mt-8 100 flex flex-col gap-4">
                        {tasks.map((task) => (
                            <li key={task.id} className="flex justify-between p-4 rounded-md border">
                                <span className="ml-2">{task.name}</span>
                                <button 
                                    onClick={(e) => handleClearTaskClick(task.id, e)} type="button"
                                    className="text-stone-700 hover:text-red-500"
                                >
                                    Clear
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
};
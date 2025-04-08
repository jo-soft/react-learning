import noProject from "../../assets/no-projects.png"
import Tasks from "./tasks/Tasks"

export default function Details({activeProject, onRemoveProject, onSetTasks}) {


    return (
        <section className="w-[35rem] mt-16">
            {activeProject ? (<>
                <menu className="flex flex-col gap-1 pb-2 border-b-2 border-stone-200">
                    <div className="flex flex-row items-center gap-4 justify-between ">
                        <h2 className="text-3xl font-bold">{activeProject.name}</h2>
                        <button className="text-red-500 hover:text-red-700" onClick={() => onRemoveProject(activeProject.id)}>Remove</button>
                    </div>
                    <p className="text-gray-500">{activeProject.dueDate}</p>
                    <p className="text-gray-500">{activeProject.description}</p>
                </menu>
                <Tasks tasks={activeProject.tasks} setTasks={onSetTasks} />
                </>
        ) : 
        (<div className="flex flex-col gap-1 justify-center items-center mt-16">
            <h2 className="text-3xl font-bold">Select a Project</h2>
            <p className="text-gray-500">To view the details</p>
            <img src={noProject} alt="No project selected" className="w-1/2 mx-auto mt-8" />
        </div>
        )
    }
    </section>
    )
}
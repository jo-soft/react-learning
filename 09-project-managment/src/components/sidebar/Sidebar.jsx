import { createPortal } from "react-dom";
import { useRef } from "react";
import AddProjectModal from "../addProjectModal/AddProjectModal";

export default function Sidebar({projects, setProjects, setActiveProjectId, activeProjectId}) {
    const modalRef = useRef();

    const onNewProjectClick = () => {
        modalRef.current.open();
    }

    const onCloseModal = (newProject) => setProjects((oldProjects) => [...oldProjects, newProject])

    return (<>
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h1 className="text-3xl font-bold">Your Projects</h1>
        <div>
                <button 
                    onClick={onNewProjectClick}
                    type="button"
                    className="bg-stone-50 text-stone-900 px-4 py-2 rounded-md mt-4"
                >
                    New Project
                </button>
        </div>
        <div>
            {projects.map((project) => (
                <button 
                    type="button"
                    onClick={() => setActiveProjectId(project.id)} key={project.id}
                    className={`py-4 text-stone-700 hover:text-stone-950 ${activeProjectId === project.id ? "bg-stone-900" : ""}`}

                >
                    <h2 className="text-2xl font-bold">{project.name}</h2>
                    <p className="text-sm text-stone-400">{project.description}</p>
                </button>
            ))}
        </div>
        </aside>
        {createPortal(
            <AddProjectModal ref={modalRef} onClose={onCloseModal}/>,
            document.body
        )}
    </>
    )
}
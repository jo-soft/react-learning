import { useRef, useImperativeHandle } from "react";
export default function AddProjectModal({ref, onClose}) {

    const modalRef = useRef();
    const projectNameRef = useRef();
    const projectDescriptionRef = useRef();
    const dueDateRef = useRef();

    useImperativeHandle(ref, () => ({
        open: () => {
            modalRef.current.showModal();
        },
    }));


    const resetForm = () => {
        projectNameRef.current.value = '';
        projectDescriptionRef.current.value = '';
        dueDateRef.current.value = '';
    }
    const handleCloseBtnClick = () => {
        resetForm();

        modalRef.current.close();
    }

    const handleFormSubmit = () => {
        const newProject = {
            id: Date.now(),
            name: projectNameRef.current.value,
            description: projectDescriptionRef.current.value,
            dueDate: dueDateRef.current.value,
            tasks: [],
        };
        
        resetForm();
        onClose(newProject);
    }


    return (
        <dialog ref={modalRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            <h2 className="text-2xl font-bold">Add Project</h2>
            <form 
                method="dialog"
                className="flex flex-col gap-3 mt-4 text-right"
                onSubmit={handleFormSubmit}
            >
                <div className="flex flex-col gap-2">
                    <input  ref={projectNameRef} type="text" placeholder="Project Name" className="border border-stone-300 p-2 rounded-md"/>
                    <textarea ref={projectDescriptionRef} placeholder="Project Description" className="border border-stone-300 p-2 rounded-md"/>
                    <input ref={dueDateRef} type="date" className="border border-stone-300 p-2 rounded-md"/>
                </div>
                <div className="flex flex-col gap-2">
                    <button type="submit" className="bg-stone-900 text-stone-50 px-4 py-2 rounded-md">Create Project</button>
                </div>
            </form>
            <button onClick={handleCloseBtnClick} className="mt-4 text-red-500">Cancel</button>
        </dialog>
    )
}
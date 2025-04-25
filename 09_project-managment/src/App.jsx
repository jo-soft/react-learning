import Sidebar from "./components/sidebar/Sidebar";
import Details from "./components/details/Details";

import { useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);
  const [activeProjectId, setActiveProjectId] = useState(null);

  const activeProject = projects.find((project) => project.id === activeProjectId);

  const handleRemoveProject = (id) => {
    setProjects((prevProjects) => {
      return prevProjects.filter((project) => project.id !== id);
    });
  };

  const handleSetTasks = (tasks) => {
    setProjects((prevProjects) => {
      return prevProjects.map((project) => {
        if (project.id === activeProjectId) {
          return { ...project, tasks: tasks };
        }
        return project;
      });
    });
  };


  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar 
        projects={projects} 
        setProjects={setProjects}
        activeProjectId={activeProjectId}
        setActiveProjectId={setActiveProjectId}
        />
        <Details activeProject={activeProject} onRemoveProject={handleRemoveProject} onSetTasks={handleSetTasks}/>
    </main>
  )
}

export default App;

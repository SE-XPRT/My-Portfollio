import Header from "@/components/header";
import React from "react";

const Projects = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center min-h-screen p-4">
        <h1 className="text-4xl font-bold mb-8">Projets</h1>
        <div className="bentoGrid"></div>
      </div>
    </div>
  );
};
export default Projects;

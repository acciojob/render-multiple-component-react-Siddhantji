import React from "react";

const ProjectDtls = ({ name, desc }) => {
  return (
    <div className="ns-wrapper">
      <h1 data-ns-test="project-name"> {name} </h1>
      <h6 data-ns-test="project-description"> {desc} </h6>
    </div>
  );
};

export default ProjectDtls;

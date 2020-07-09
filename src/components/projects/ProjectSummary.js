import React from "react";

export default function ProjectSummary({ project }) {
  return (
    <div>
      <div className="project-summary card z-depth-1">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>Posted by nikhil</p>
          <p>3rd September</p>
        </div>
      </div>
    </div>
  );
}

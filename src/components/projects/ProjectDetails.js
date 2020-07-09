import React from "react";

function ProjectDetails(props) {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            lorem dnvj vndcnd aijdic akjsd cdjcedman iajcikamc ajlllllll aaaaaa
            aaaaaaaa jdd
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by nikhil</div>
          <div>#rd September</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;

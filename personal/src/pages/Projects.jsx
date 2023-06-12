import React, { useState } from "react";
import { Data } from "./Data";
import { Button, Card } from "react-bootstrap";

const Projects = () => {
  const [projects, setProjects] = useState(Data);
  console.log(projects);
  return (
    <><h1 style={{width:'40%',textAlign:'center'}}>Projects</h1>
    <div className="projects">
      
      {projects.map((project) => {
        return (
          <div className="card-projects">
            
            <Card style={{ width: "18rem" }}>
              <Card.Img className="img" variant="top" src={project.img} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                <div className="project-buttons">
                <a href={project.live}>
                <Button className="btn" variant="primary">Live</Button>
                </a>
                <a href={project.gitHub}>
                <Button className="btn" variant="primary">Github</Button>
                </a>
                
                
                </div>
               

              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Projects;

import React from 'react'

class Projects extends React.Component {
  render() {
    return (
      <div className="Projects">
        <h1>Projects</h1>
        <div className="projects-list col-sm-6">
          <div className="list-group">
            <a href="#" className="list-group-item">
              <h4 className="list-group-item-heading">Racer X</h4>
            </a>
            <a href="#" className="list-group-item">
              <h4 className="list-group-item-heading">LIT</h4>
            </a>
            <a href="#" className="list-group-item">
              <h4 className="list-group-item-heading">Euphoria</h4>
            </a>
          </div>
          <a className="btn btn-success btn-lg">
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Add Project
          </a>
        </div>
      </div>
    )
  }
}

export default Projects

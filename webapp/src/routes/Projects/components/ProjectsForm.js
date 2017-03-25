import React from 'react'

class ProjectsForm extends React.Component {
  render() {
    return (
      <div className="ProjectsForm">
        <h1>Create Project</h1>
        <form className="col-sm-6">
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Project Name" />
          </div>
          <div className="form-group">
            <label>Budget</label>
            <input type="text" className="form-control" placeholder="Budget" />
          </div>
          <div className="form-group">
            <label>Rate</label>
            <input type="text" className="form-control" placeholder="Rate" />
          </div>
          <button type="submit" className="btn btn-success btn-lg">
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Create
          </button>
        </form>
      </div>
    )
  }
}

export default ProjectsForm

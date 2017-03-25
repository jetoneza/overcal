import React from 'react'

import { Link } from 'react-router'

class ProjectView extends React.Component {
  render() {
    return (
      <div className="ProjectView">
        <nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/projects" className="navbar-brand">Back</Link>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <a>Project Name</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a>Settings</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="timer text-center col-sm-12">
            03:40
            <label>Countdown</label>
          </div>
          <div className="info col-sm-6">
            <div className="info-group">
              <label>Budget</label>
              <div>20,000</div>
            </div>
            <div className="info-group">
              <label>Rate</label>
              <div>10/hr</div>
            </div>
          </div>
          <div className="actions col-sm-6">
            <a className="btn btn-success">Start</a>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectView

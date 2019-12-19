import React from 'react';
import logo from './logo.svg';
import './img/App.css';
import projects from "./Projects.js"
import ProjectPreview from "./ProjectPreview"
import resume from "./Resume.pdf"

class App extends React.Component{

  constructor(props) {
      super(props);
      this.state = {
          project : null
      }
  }

  setProject = (project) => {
      this.setState({project : project})
  };

  clearProject = () => {
      this.setState({project : null})
  };


  render() {


      return (
          <div className="App">
              <div className={"header"}>
                  <h1>Grace Bramley-Simmons</h1>
                  <h2>Student Developer at Brown University</h2>
                  <div className={"links"}>

                      <a href={"https://www.linkedin.com/in/grace-bramley-simmons"}>linkedin</a>
                      <a href={"mailto:grace_bramley-simmons@gmail.com"}>email</a>
                      <a href={"https://github.com/gbramleysimmons"}>github</a>
                      <a href={resume}>resume</a>




                  </div>
              </div>

              {this.state.project ? this.state.project : <div className={"projects"}>
                  {projects.map(ele => <ProjectPreview setProject={this.setProject}
                                                       clearProject={this.clearProject}
                                                       data={ele}/>)}
              </div> }
          </div>
      );
  }


}

export default App;

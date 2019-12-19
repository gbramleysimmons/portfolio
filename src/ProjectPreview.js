import React from 'react';
import logo from './logo.svg';
import './img/App.css';
import Project from "./Project";

class ProjectPreview extends React.Component {

    constructor(props) {
        super(props);
        this.state =  {
            show : false
        }
    }

    toggle = () => {
            this.props.setProject(<Project data={this.props.data} hide={this.props.clearProject}/>)
    };


    render() {
        return (<div className="ProjectPreview">
                <div className={"preview"}>
                    <img src={this.props.data.preview} alt={this.props.data.name} className={"preview-img"} onClick={this.toggle}/>
                    <h2 className={"project-title"}>{this.props.data.name}</h2>
                </div>


        </div>);

}
}

export default ProjectPreview;

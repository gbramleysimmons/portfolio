import React from 'react';
import './img/App.css';

class Project extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            curr : 0
        }
    }


    nextImg = () => {
        const length = this.props.data.img.length;
        if (this.state.curr === length - 1) {
            this.setState({curr : 0})
        } else {
            this.setState({curr : this.state.curr + 1})

        }
    };

    prevImg = () => {
        const length = this.props.data.img.length;
        if (this.state.curr === 0) {
            this.setState({curr : length - 1})
        } else {
            this.setState({curr : this.state.curr - 1})
        }

    };

    render() {
        return (
            <div className="Project" id={this.props.data.name}>
                <div className={"header"} onClick={this.props.hide}>

            <h3 className={"full-title"}>{this.props.data.name}</h3>

                <button className={"close-button"} onClick={this.props.hide}><i className="material-icons">
                    close
                </i> </button>
                <div className={"project-role"}> <span className={"bold"}> role: </span> {this.props.data.role} </div>
                {this.props.data.link ?  <div className={"project-link"}>
                        <span className={"bold"}> link: </span>
                        <a target="_blank" className={"link"} href={this.props.data.link}> {this.props.data.link} </a> </div> :
                    null}
                <div className={"project-technologies"}> <span className={"bold"}> technologies: </span> {this.props.data.technologies} </div>
                        {this.props.data.src ?  <div className={"project-link"}> <span className={"bold"}> source: </span>
                        <a target="_blank" href={this.props.data.link}> {this.props.data.link} </a> </div> :
                    null}

                </div>
                <div className={"img-div"}>

                <button onClick={this.prevImg} className={"left"}>
                    <i className="material-icons proj-icon">
                        keyboard_arrow_left
                    </i>
                </button>
                    <img src={this.props.data.img[this.state.curr]} alt={this.props.data.name} className={"project-img"}/>
                <button onClick={this.nextImg} className={"right"}>
                    <i className="material-icons proj-icon">
                        keyboard_arrow_right
                    </i>
                </button>

                </div>
            <div className={"project-description"}>{this.props.data.description}
            </div>
            </div>);
    }

}

export default Project;

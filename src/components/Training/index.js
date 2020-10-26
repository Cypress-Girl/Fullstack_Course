import React from "react";
import "./training.css";
import {ViewContent} from "../ViewContent/index";

const TRAINING_THEORY = 0;
const TRAINING_PROJECTS = 1;

class Training extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            training: TRAINING_THEORY
        }
    }

    clickSelector(value) {
        this.toggleProjectsTheory(value);
    }

    toggleProjectsTheory(value) {
        this.setState({
            training: value
        })
    }

    render() {
        return (
            <div className="main-container">
                <div className="wrap-main">

                    <div id="skills-container">
                        <p id="necessary">Необходимые навыки:</p>
                        <p id="practice">Предварительный опыт программирования не требуется.</p>
                    </div>
                    <p id="title">Программа обучения</p>
                    <p id="count">Программа включает 9 курсов:</p>

                    <input className={this.state.training === TRAINING_THEORY ? "selected" : ""} type="text"
                           defaultValue="ТЕОРИЯ"
                           onClick={() => this.clickSelector(TRAINING_THEORY)} readOnly />
                    <input className={this.state.training === TRAINING_PROJECTS ? "selected" : ""} type="text"
                           defaultValue="ПРОЕКТЫ"
                           onClick={() => this.clickSelector(TRAINING_PROJECTS)} readOnly />

                    <ViewContent training={this.state.training} />
                </div>
            </div>
        )
    }
}

export default Training;
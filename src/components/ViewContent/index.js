import React from 'react';
import {theory} from "../../data/theory";
import "./viewcontent.css";
import {projects} from "../../data/projects";
import Section from "../Section";

function Theory() {
    return (
        <React.Fragment>
            {
                Object.entries(theory).map((item, index) => (
                    <Section key={index} course={item}/>
                ))
            }
        </React.Fragment>
    )
}

function Projects() {
    return (
        <React.Fragment>
            {
                Object.entries(projects).map((item, index) => (
                    <Section key={index} course={item}/>
                ))
            }
        </React.Fragment>
    )
}

class ViewContent extends React.Component {

    render() {
        let elem = this.props.training === 0 ? <Theory/> : <Projects/>;
        return (
            <div>
                {elem}
            </div>
        )
    }
}

export {ViewContent};
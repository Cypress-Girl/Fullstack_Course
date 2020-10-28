import React from "react";
import "./other.css";

class ProfessionBox extends React.Component {
    mouseOver = () => {
        let tech = document.getElementById(this.props.id);
        if(tech)
            tech.classList.add("view");
    }

    mouseLeave = () => {
        let tech = document.getElementById(this.props.id);
        if(tech &&  tech.classList.contains("view"))
            tech.classList.remove("view");
    }

    render() {
        return (
            <div className="profession-box" onMouseOver={this.mouseOver} onMouseLeave={this.mouseLeave}>
                <img src={this.props.img} alt=""/>

                <div className="course-about">
                    <p className="course-proff">{this.props.course_proff}</p>
                    <p className="course-name">{this.props.course_name}</p>
                    <div className="technologies" id={this.props.id}>
                        <p>{this.props.technologies}</p>

                    </div>
                    <p className="course-counters">{this.props.course_counters}</p>
                </div>
            </div>
        )
    }
}

class Other extends React.Component {
    render() {
        return (
            <div className="other-container">
                <div id="other-wrap">
                    <p id="other-caption">Другие профессии</p>

                    <div id="profession-container">

                        <ProfessionBox img="/images/html.jpg" alt=""
                                       course_proff="Профессия Веб разработка"
                                       course_name="Frontend"
                                       technologies="HTML/CSS, JavaScript, ReactJS, Client
                        API"
                                       id="course0"
                                       course_counters="3 мес. 25 заданий 75 видео" />

                        <ProfessionBox img="/images/js.jpg" alt=""
                                       course_proff="Профессия Веб разработка"
                                       course_name="JavaScript"
                                       technologies="JavaScript course"
                                       id="course1"
                                       course_counters="2 мес. 101 заданий 31 видео" />

                        <ProfessionBox img="/images/react-js.jpg" alt=""
                                       course_proff="Профессия Веб разработка"
                                       course_name="React JS"
                                       technologies="React JS course"
                                       id="course2"
                                       course_counters="2 мес. 23 заданий 23 видео" />

                        <ProfessionBox img="/images/html.jpg" alt=""
                                       course_proff="Профессия Веб разработка"
                                       course_name="HTML/CSS"
                                       technologies="HTML/CSS course"
                                       id="course3"
                                       course_counters="1 мес. 254 заданий 47 видео" />

                    </div>

                </div>
            </div>
        )
    }
}

export default Other;
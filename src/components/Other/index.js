import React from "react";
import "./other.css";

class Other extends React.Component {
    constructor(props) {
        super(props);
        this.refTech = React.createRef();
    }

    mouseOver() {
        this.refTech.current.style.height = "auto";
        console.log(this.refTech.current)
    }

    render() {
        return (
            <div className="other-container">
                <div id="other-wrap">
                    <p id="other-caption">Другие профессии</p>

                    <div className="profession-box" onClick={() => this.mouseOver()}>
                        <img src="/images/html.jpg" alt="html"/>

                        <div className="course-about">
                            <p className="course-proff">Профессия Веб разработка</p>
                            <p className="course-name">Frontend</p>
                            <p className="technologies" ref={this.refTech} style={{height: 0}}>HTML/CSS, JavaScript, ReactJS, Client
                                API</p>
                            <p className="course-counters">3 мес. 25 заданий 75 видео</p>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Other;
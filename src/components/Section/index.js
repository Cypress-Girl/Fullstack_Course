import React from "react";
import Chapters from "../Chapters";

class Section extends React.Component {
    constructor(props) {
        super(props);

        this.title = props.course[0];
        this.info = props.course[1];

        this.state = {
            view: true,
            viewThemes: true
        }
    }

    componentDidMount() {
        this.viewChapters();
    }

    viewChapters = () => {
        this.setState(state => ({
            view: !state.view
        }))
    }

    render() {
        this.chapters = (this.info.chapters && this.info.chapters.length > 0) ?
            <Chapters list={this.info.chapters}
                      view={this.state.view}
                      course={this.info.title}
            />
            : null;

        return (
            <React.Fragment>

                <div className="one-section" onClick={this.viewChapters}>
                    <div id="section-img-container">
                        <img src={this.info.image} alt="tech"/>
                    </div>
                    <div className="section-about-container">
                        <p id="section-title">{this.title}</p>
                        <p id="section-skills"><span>Необходимые навыки: </span>{this.info.skills}</p>
                        <p id="section-info">{`Тестов:  ${this.info.tests}    Видео:  ${this.info.video}     Практических заданий:  ${this.info.tasks}`}</p>
                    </div>
                    <img className="button-open-close"
                         src={this.state.view ? "/images/button_close.png" : "/images/button_add.png"} alt=""/>
                </div>

                {this.chapters}
            </React.Fragment>
        );
    }
}

export default Section;
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
                        <p className="section-title">{this.title}</p>
                        <span className="section-skills"><span>Необходимые навыки: </span>{this.info.skills}</span>
                        <div className="section-info-container">
                            <span className="section-info">Тестов:  {this.info.tests}</span>
                            <span className="section-info">Видео:  {this.info.video}</span>
                            <span className="section-info">Практических заданий:  {this.info.tasks}</span>
                        </div>
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
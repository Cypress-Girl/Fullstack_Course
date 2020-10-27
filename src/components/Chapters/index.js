import React from 'react';
import "./chapters.css";
import Themes from "../Themes";


class OneChapter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: true
        }
    }

    viewThemes = () => {
        this.setState( state => ({
            view: !state.view
        }))
    }

    componentDidMount() {
        this.viewThemes();
    }

    render() {
        return (
            <React.Fragment>

                <div id="chapters-wrap" onClick={() => this.viewThemes()}>
                    <p>{this.props.chapter.title}</p>
                    <img src="/images/arrow.png" alt="arrow"/>
                </div>

                {(this.props.chapter.themes && this.props.chapter.themes.length > 0) ?
                    <Themes list={this.props.chapter.themes}
                            view={this.state.view}
                            course={this.props.chapter.title}
                            id={this.props.chapter.title}
                    />
                    : null}
            </React.Fragment>
        )
    }
}

class Chapters extends React.Component {
    constructor(props) {
        super(props);
        this.h = -1;
    }

    componentDidMount() {
        //запоминаем реальную высоту контейнера для анимации плавного раскрытия
        let container = document.getElementById(this.props.course);
        this.h = container.clientHeight;
    }

    render() {

        let view;
        if (this.h === -1)   //первый рендер: в стилях height принудительно не ставим
            view = {display: "block"};
        else        //последующие отрисовки: меняем height с 0 на реальную высоту (и обратно)
            view = this.props.view ? {height: this.h} : {height: 0};

        return (
            <React.Fragment>
                <div className="chapters-container" id={this.props.course} style={view}>
                    {this.props.list.map((item, index) => (
                        <OneChapter chapter={item} id={index} key={index}/>
                    ))}
                </div>

            </React.Fragment>
        )
    }
}

export default Chapters;
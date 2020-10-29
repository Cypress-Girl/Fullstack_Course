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
                            resize={this.props.resize}
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
        this.rememberHeight();
        this.setHeightAuto();
    }

    rememberHeight() {
        let container = document.getElementById(this.props.course);

        let child = container.firstElementChild;
        this.h = 0;
        while (child){
            if (child.id === "chapters-wrap"){
                this.h += child.clientHeight;
            } else if (child.classList.contains("show")) {
                this.h += child.clientHeight;
            }
            child = child.nextElementSibling;
        }
        //сменим height="auto" на реальный размер контейнера для плавной анимации закрытия
        container.style.height = this.h + "px";
    }

    closeAllChildren() {
        let container = document.getElementById(this.props.course);

        let child = container.firstElementChild;
        while (child){
            if (child.classList.contains("show")) {
                child.classList.remove("show");
                child.style.height = "0px";
            }
            child = child.nextElementSibling;
        }
    }

    setHeightAuto() {
        console.log("set auto")
        //установим height="auto" для автоматичекого изменения размера контейнера
        //при изменении размера содержимого
        let container = document.getElementById(this.props.course);
        container.style.height = "auto";
    }

    render() {
        let viewStyle;
        if (this.h === -1)   //первый рендер: в стилях height принудительно не ставим
            viewStyle = {display: "block"};
        else        //последующие отрисовки: меняем height с 0 на реальную высоту (и обратно)
        {
            viewStyle = this.props.view ? {height: this.h} : {height: 0};
            if (!this.props.view){
                this.closeAllChildren();
                this.rememberHeight();
            }
        }

        return (
            <React.Fragment>
                <div className="chapters-container" id={this.props.course} style={viewStyle}>
                    {this.props.list.map((item, index) => (
                        <OneChapter chapter={item} id={index} key={index} resize={() => this.setHeightAuto()}/>
                    ))}
                </div>

            </React.Fragment>
        )
    }
}

export default Chapters;
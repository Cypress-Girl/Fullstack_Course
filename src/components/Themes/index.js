import React from 'react';
import "./themes.css";

class Themes extends React.Component {
    constructor(props) {
        super(props);
        this.h = -1;
    }

    componentDidMount() {
        //запоминаем реальную высоту контейнера для анимации плавного раскрытия
        let container = document.getElementById(this.props.id);
        this.h = container.clientHeight;
    }

    render() {
        let viewStyle;
        let show="";

        if (this.h === -1)   //первый рендер: в стилях height принудительно не ставим
            viewStyle = {display: "block"};
        else        //последующие отрисовки: меняем height с 0 на реальную высоту (и обратно)
        {
            viewStyle = this.props.view ? {height: this.h} : {height: "0px"};
            show = this.props.view ? "show" : "";
            if  (this.props.view) this.props.resize();
        }

        return (
            <div className={`themes-container ${show}`} id={this.props.id} style={viewStyle}>
            {/*<div className={`themes-container ${show}`} id={this.props.id} style={viewStyle} onTransitionEnd={() => this.props.resize()}>*/}
                {
                    this.props.list.map((item, index) => (
                        <p key={index}>{++index} {item}</p>
                    ))
                }
            </div>
        )
    }
}

export default Themes;
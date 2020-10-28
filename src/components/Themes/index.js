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
        let view;
        if (this.h === -1)   //первый рендер: в стилях height принудительно не ставим
            view = {display: "block"};
        else        //последующие отрисовки: меняем height с 0 на реальную высоту (и обратно)
            view = this.props.view ? {height: this.h} : {height: 0};


        return (
            <div className="themes-container" id={this.props.id} style={view}>
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
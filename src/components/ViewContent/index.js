import React from 'react';
import {theory} from "../../data/theory";

function Section(props) {
    return (
        <div className="one-section" style={{border: "1px solid black"}}>
            <p>{props.title}</p>
            <span>Необходимые навыки:</span><p>{props.skills}</p>
            <span>{`Тестов: ${props.tests}    Видео: ${props.video}     Практических заданий: ${props.tasks}`}</span>
        </div>
    );
}

function Theory() {
    let arr = [];
    for(let key in theory){
        arr.push(key)
    }

    return (
        <React.Fragment>
            {arr.map((item, index) => (
                <Section key={index} course={arr[item]}/>
            ))}
        </React.Fragment>
    )
}

class ViewContent extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let elem = this.props.training === 0 ? <Theory/> : null;

        return (
            <div>
                {elem}
            </div>
        )
    }
}

export {ViewContent};
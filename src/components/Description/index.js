import  React from "react";
import "./description.css"

const Description = () => {
    return (
        <div className="description-container">
            <div className="wrap">
                <p id="back-to-home"><span>&#8592;</span>Главная</p>
                <p id="profession">ПРОФЕССИЯ</p>
                <p id="title">Full Stack web-разработчик</p>
                <p className="description">Научитесь проектировать и разрабатывать современные веб-приложения, которые являются основой для приложений, веб-сайтов и продуктов, которые люди и компании используют каждый день.</p>
                <p className="description">Программа предназначена для всех людей всех возрастов, которые хотят изучать код. А также для профи, которые хотят стать лучше и расширить свои текущие навыки. Этот курс поможет систематизировать знания, для более эффективной работы.
                </p>
                <input id="button-begin" type="text" defaultValue="Начать обучение" readOnly/>
            </div>
            <div id="image-container">
                <img src="/images/big_cat.png" alt="technologies"/>
            </div>
        </div>
    )
}

export default Description;
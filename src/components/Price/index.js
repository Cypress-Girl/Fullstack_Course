import React from "react";
import "./price.css";

function TariffButton(props) {
    return (
        <div className="tariff-button">
            <p id="tariff-name">{props.name}</p>
            <p id="tariff-price">{props.price}</p>
            <p id="tariff-period">P/месяц</p>
        </div>
    )

}

const Price = () => {
    return (
        <div className="price-container">
            <div id="price-wrap">
                <div id="price-flex">
                    <p id="caption">Стоимость обучения</p>
                    <p className="price-about">Выберите удобный пакет подписки на курс или программу обучения.
                        Вам будут доступны абсолютно все задания, уроки и события из всех курсов на время действия подписки.
                        <br/><br/>
                        Доступные пакеты:
                    </p>
                </div>

                    <div id="tariff-container">
                        <TariffButton name="Бронза" price="500"/>
                        <TariffButton name="Серебро" price="1700"/>
                        <TariffButton name="Золото" price="2400"/>
                        <TariffButton name="Платина" price="4800"/>
                    </div>
            </div>
        </div>
    )
}

export default Price;
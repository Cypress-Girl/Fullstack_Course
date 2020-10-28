import React from "react";

function LinksGroup2(props) {
    return (
        <div className="link-group-container">
            <p className="link-title">{props.title}</p>
            <div className="links-container subscription">
                {props.links.map((link, index) => (
                    <a href="/" className="one-link" key={index}>{link}</a>
                ))}
            </div>
        </div>
    )
}

function LinksGroup(props) {
    return (
        <div className="link-group-container">
            <p className="link-title">{props.title}</p>
            <div className="links-container">
                {props.links.map((link, index) => (
                    <a href="/" className="one-link" key={index}>{link}</a>
                ))}
            </div>
        </div>
    )
}

const Footer = () => {

    return (
        <footer>
            <div id="footer-wrap">
                <LinksGroup
                    title="Компания"
                    links={["О компании", "TMT Soft"]}/>

                <LinksGroup
                    title="Обучение"
                    links={["Профессии", "Курсы", "Бесплатные интенсивы"]}/>

                <LinksGroup2
                    title="Подписывайтесь"
                    links={["Facebook", "YouTune", "Вконтакте", "Instagram", "Twitter", "Tumbler"]}/>

                <LinksGroup
                    title="Помощь"
                    links={["support@educat.courses", "Связаться с тьютором"]}/>
            </div>
        </footer>
    )
}

export default Footer;
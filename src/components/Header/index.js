import  React from "react";

const Header = () => {
    return (
        <header>
            <a href="/" className="logo">
                <img src="/images/Group 23x.png" alt="logo"/>
            </a>
            <div id="right-header">
                <p>Нас уже 5000 человек</p>
                <div id="links-container">
                    <a href="/">Все курсе</a>
                    <a href="/">Подписка</a>
                    <a href="/">О нас</a>
                </div>
                <div id="button-container">
                    <input type="text" value="Регистрация" readOnly/>
                    <input type="text" value="Войти" readOnly/>
                </div>
            </div>
        </header>
    )}

export default Header;
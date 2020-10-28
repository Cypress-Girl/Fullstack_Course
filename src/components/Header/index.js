import React from "react";

class Header extends React.Component {

    clickMenuBurger = () => {
        let side = document.getElementById("burger-sidebar");
        if (side.classList.contains("show"))
            side.classList.remove("show");
        else
            side.classList.add("show");

    }

    render() {
        return (
            <header>
                <a href="/" className="logo">
                    <img src="/images/Group 23x.png" alt="logo"/>
                </a>
                <div id="right-header">
                    <p>Нас уже 5000 человек</p>
                    <div className="links-container">
                        <a href="/">Все курсы</a>
                        <a href="/">Подписка</a>
                        <a href="/">О нас</a>
                    </div>
                    <div id="button-container">
                        <input type="text" value="Регистрация" readOnly/>
                        <input type="text" value="Войти" readOnly/>
                    </div>
                </div>
                <div id="right-header-2">
                    <div id="right-header-burger" onClick={this.clickMenuBurger}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div id="burger-sidebar">
                        <div className="links-container">
                            <a href="/">Все курсы</a>
                            <a href="/">Подписка</a>
                            <a href="/">О нас</a>
                            <div style={{borderBottom: "1px solid"}}></div>
                            <a href="/">Регистрация</a>
                            <a href="/">Войти</a>

                        </div>

                    </div>

                </div>
            </header>
        )
    }
}

export default Header;
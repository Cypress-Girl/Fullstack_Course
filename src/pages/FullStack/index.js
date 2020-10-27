import  React from "react";
import Description from "../../components/Description";
import Training from "../../components/Training";
import Other from "../../components/Other";
import Price from "../../components/Price";

const Fullstack = () => {
    return (
        <div className="main-container">
            <Description/>
            <Training/>
            <Price/>
            <Other/>
        </div>
    )
}

export default Fullstack;
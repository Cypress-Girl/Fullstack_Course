import  React from "react";
import Description from "../../components/Description";
import Training from "../../components/Training";
import Other from "../../components/Other";

const Fullstack = () => {
    return (
        <div className="main-container">
            <Description/>
            <Training/>
            <Other/>
        </div>
    )
}

export default Fullstack;
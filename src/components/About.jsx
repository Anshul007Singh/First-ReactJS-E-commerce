import React, { useContext } from "react";
import UserAction from "../helpers/UserAction";

const About = () => {

    const userActions = useContext(UserAction)


    return (
        <div>
            This is about component.
            <button onClick={userActions.closeCart}>close</button>
        </div>
    )
}

export default About;
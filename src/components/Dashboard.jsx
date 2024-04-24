import React, { useContext } from "react";
import Home from "./Home";
import Login from "./Login";
import {CartContextProvider} from "../helpers/CartContext";
import AuthContext, {  } from "../helpers/AuthContext";
import { UserActionProvider } from "../helpers/UserAction";

const DashBoard = (props) => {
    
    const authContext = useContext(AuthContext);

    let isLoginUser = authContext.state

    // const isLoginHandler = (isLogin) => {
    //     console.log('isloginHangler', isLogin)
    //     setLogin(isLogin);
    // }

    // const onLogout = () => {
    //     localStorage.setItem('isLogin', false);
    //     console.log('islogout')
    // }

    // // console.log('login',login)

    // let isLoginUser = localStorage.getItem('isLogin')
    // console.log('isLoginUser', isLoginUser)
    return (
        <div>
            <UserActionProvider>
                <CartContextProvider>
                    {isLoginUser ? <Home /> : <Login />}
                </CartContextProvider>
            </UserActionProvider>
        </div>
    )
}

export default DashBoard;
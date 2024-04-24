import React, { useContext, useState } from "react";
import Button from "../UI/Button";
import AuthContext from "../helpers/AuthContext";
import { useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from '@greatsumini/react-facebook-login';
import { useSelector, useDispatch} from 'react-redux'

const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);
    const authContext = useContext(AuthContext);
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();


    const onLoginHandler = (event) => {
        event.preventDefault();
        setPassword('');
        setEmail('');
        setIsValid(false);
        authContext.onLogin();
    }
    
    const updateButtonStyle = () => {
        let emailRegx =  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

        if(emailRegx.test(email) && passwordRegex.test(password)){
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }

    const emailHandler = (event)=>{
        setEmail(event.target.value);
        updateButtonStyle();
    }

    const passwordHandler = (event)=>{
        setPassword(event.target.value);
        updateButtonStyle();
    }

    let buttonStyle = !isValid ? { background: 'grey' } : { background: 'green' };

    const googleLogin = useGoogleLogin({
        onSuccess: codeResponse => authContext.onLogin(),
        flow: 'auth-code',
    });

    return (
        <div className="container mt-5" >
            <div className="row p-4">
            <div className="col-md-6 " style={{backgroundColor:'beige'}}>
                    <h1 >Welcome</h1><br />
                    <h4>Please Login to Continue....</h4>
                </div>
                <div className="col-md-3 p-4" style={{backgroundColor:'#DAEACE'}}>
                    <form>
                        <div className="mb-3">
                            <label className="form-label float-start fw-bold">Email address</label>
                            <input type="email" value={email} onChange={emailHandler} className="form-control" id="exampleInputEmail1" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label float-start fw-bold">Password</label>
                            <input type="password" value={password} onChange={passwordHandler} className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <Button className={'btn btn-primary'} text={'Submit'} onClick={onLoginHandler} disabled= {!isValid} style={buttonStyle} />
                    </form>
                </div>
                <div className="col-md-3 p-4" style={{backgroundColor:'#DAEACE'}}>
                    <button className="btn btn-outline-primary px-4 mt-5" onClick={googleLogin}>Google login</button><br />
                    <FacebookLogin
                            appId="1415082412449606"
                            onSuccess={(response) => {
                                console.log( response);
                            }}
                            onFail={(error) => {
                                authContext.onLogout()
                            }}
                        onProfileSuccess={(response) => {
                                console.log(response)
                                authContext.onLogin()
                        }}
                            render={({ onClick, logout }) => (
                                <button onClick={onClick} className="btn btn-outline-primary mt-3 px-3">Facebook login</button>
                            )}
                    />
                </div>
                
            </div>   
            {/* <div>
                <h1>Counter- { counter}</h1>
                <button onClick={()=> dispatch({type:'increment'})} className="btn btn-success">Increment</button>
                <button onClick={()=> dispatch({type:'decrement'})} className="btn btn-danger">Decrement</button>
                <button onClick={()=> dispatch({type: 'reset'})} className="btn btn-secondary">Reset</button>
            </div> */}
        </div>
    )
}

export default React.memo(Login);
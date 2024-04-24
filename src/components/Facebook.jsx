import React, { useContext } from 'react';
import FacebookLogin from 'react-facebook-login';
import AuthContext from '../helpers/AuthContext';


const Facebook = () => {
   
  const authContext = useContext(AuthContext);
   
   const responseFacebook = () => {
    authContext.onLogin();
}

  return (
    <div>
      <FacebookLogin
                        appId="1415082412449606"
                        autoLoad={true}
                        fields="name,email,picture"
                        textButton= 'Facebook login'
                        callback={responseFacebook}
                    />
    </div>
  )
}

export default Facebook;

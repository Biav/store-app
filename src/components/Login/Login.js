import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

class Login extends Component {
    render() {

        const responseFacebook = (response) => {
            console.log(response);
        }
    
        const responseGoogle = (response) => {
            console.log(response);
        }
        
        return(
            <>
                <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

                <FacebookLogin
                appId="575249743205710" //APP ID NOT CREATED YET
                fields="name,email,picture"
                callback={responseFacebook}
                />
                <br />
                <br />


                <GoogleLogin
                clientId="100357852984-14togn75hmr163rck8tk9g06qfp5go29.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                />
            </>
        )
    }
}

export default Login;
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import * as loginActions from './../../store/actions';
import { connect } from 'react-redux';
import './Login.scss'

class Login extends Component {
    render() {

        const responseFacebook = (response) => {
            console.log(response);
            this.props.loginUser(response);
        }
    
        const responseGoogle = (response) => {
            this.props.loginUser(response);
            console.log(response);
        }
        
        return(
            <>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        { this.props.email }
                        <form>
                            <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"/>
                            <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
                            <input type="submit" className="fadeIn fourth" value="LogIn"/>
                        </form>

                        <div id="formFooter">
                            <a className="underlineHover" href="/">Voltar para Home</a>
                        </div>

                    </div>
                </div>
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

const mapStateToProps = state => {
    return {
        email: state.loginUser.email
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: profile => dispatch(loginActions.authUserStart(profile))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import * as loginActions from './../../store/actions';
import * as actionTypes from './../../store/actions/actionTypes';
import { connect } from 'react-redux';
import './Login.scss'

class Login extends Component {
    render() {
        const responseFacebook = (response) => {
            this.props.loginGoogle(response, actionTypes.AUTH_FACEBOOK);
            redirectToHomePage();
        }
    
        const responseGoogle = (response) => {
            this.props.loginGoogle(response, actionTypes.AUTH_GOOGLE);
            redirectToHomePage();
        }

        const redirectToHomePage = () => {
            if(this.props.token) {
                this.props.history.push("/");
            }
        }
        
        return(
            <>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        { this.props.email }
                        <div id="formFooter">
                            <a className="underlineHover" href="#">Login</a>
                        </div>

                        <form>
                            <GoogleLogin clientId={actionTypes.API_GOOGLE} 
                                         buttonText="LOGIN WITH GOOGLE" onSuccess={responseGoogle} onFailure={responseGoogle}/>
                            <FacebookLogin appId={actionTypes.API_FACEBOOK} fields="name,email,picture" callback={responseFacebook}/>
                        </form>

                        <div id="formFooter">
                            <a className="underlineHover" href="/">Voltar para Home</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.loginUser.email,
        token: state.loginUser.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginGoogle: (profile, loginMethod) => dispatch(loginActions.authUserLogin(profile, loginMethod)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
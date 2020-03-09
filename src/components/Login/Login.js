import React, { Component } from 'react';
import './Login.scss'

class Login extends Component {
    render() {
        return(
            <>
                <div className="wrapper fadeInDown">
                    <div id="formContent">

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
            </>
        )
    }
}

export default Login;
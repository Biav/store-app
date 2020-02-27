import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as loginActions from './../../store/actions';

class Logout extends Component {
    componentDidMount() {
        this.props.doLogout();
    }

    render(){
        return (
            <>
                <Redirect to="/"/>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        doLogout: ()=> dispatch(loginActions.authUserLogout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);
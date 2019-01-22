import React, { Component } from 'react';
import SignIn from "../components/LogInModal";
import Nav from "../components/Nav";

function Login() {
    return (
        <div>
            <Nav/>
            <SignIn/>
        </div>
    )
}

export default Login;
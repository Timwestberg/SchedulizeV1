import React, { Component } from 'react';
import SignIn from "../components/LogInModal";
import Nav from "../components/Nav";

function Login() {
    return (
        <div>
            <Nav/>
            <br></br> <br></br><br></br><br></br>
            <SignIn/>
        </div>
    )
}

export default Login;
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';
import { Redirect } from 'react-router';
import { createHashHistory } from 'history';
import Login from '../components/Login';
import Signup from '../components/Signup';

class WelcomeScreen extends React.Component {
	constructor(props) {
		super(props);
	}
	/* This needs to be factored out into a real login and / or register component */
	render(){
	    return (
	        <div className="container">
	    		<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<div className="panel panel-login">
							<div className="panel-heading">
								<div className="row">
									<div className="col-xs-6">
										<a href="#" className="active" id="login-form-link">Login</a>
									</div>
								</div>
							<hr/>
							</div>
							<div className="panel-body">
								<div className="row">
									<div className="col-lg-12">
									<form id="login-form" action="localhost:3000/profile" method="get" role="form">
										<div className="form-group">
											<input type="text" name="username" id="username" tabIndex="1" className="form-control" placeholder="Username" value=""/>
										</div>
										<div className="form-group">
											<input type="password" name="password" id="login-password" tabIndex="2" className="form-control" placeholder="Password"/>
										</div>
										<div className="form-group text-center">
											<input type="checkbox" tabIndex="3" className="" name="remember" id="remember"/>
											<label form="remember">Remember Me</label>
										</div>
										<div className="form-group">
											<div className="row">
												<div className="col-sm-6 col-sm-offset-3">
													<input type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" value="Log In"/>
												</div>
											</div>
										</div>
											<div className="form-group">
												<div className="row">
													<div className="col-lg-12">
														<div className="text-center">
															<a href="localhost:3000/profile" tabIndex="5" className="forgot-password">Forgot Password?</a>
														</div>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
								
							</div>
						</div>
					</div>
					<div className="col-md-6 col-md-offset-3"><Registration /></div>
				</div>
			</div>
    	);
	}
}

//At least this one is a class.
class Registration extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
				<form id="register-form" action="localhost:3000/profile" method="post" role="form">
					<div className="col-xs-6">
						<a href="#" id="register-form-link">Register</a>
					</div>
					<div className="form-group">
						<input type="text" name="username" id="username" tabIndex="1" className="form-control" placeholder="Username" value=""/>
					</div>
					<div className="form-group">
						<input type="email" name="email" id="email" tabIndex="1" className="form-control" placeholder="Email Address" value=""/>
					</div>
					<div className="form-group">
						<input type="password" name="password" id="register-password" tabIndex="2" className="form-control" placeholder="Password"/>
					</div>
					<div className="form-group">
						<input type="password" name="confirm-password" id="confirm-password" tabIndex="2" className="form-control" placeholder="Confirm Password"/>
					</div>
					<div className="form-group">
						<div className="row">
							<div className="col-sm-6 col-sm-offset-3">
								<input type="submit" name="register-submit" id="register-submit" tabIndex="4" className="form-control btn btn-register" value="Register Now"/>
							</div>
						</div>
					</div>
			</form>
		)
	}
}

export default WelcomeScreen;
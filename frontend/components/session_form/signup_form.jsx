import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			email: '',
			price_per_hour: '',
			is_tasker: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.check = this.check.bind(this);
	}

	update(field) {
		if (field === 'price_per_hour') {
			return e => this.setState({
				[field]: parseFloat(e.currentTarget.value)
			});
		}
		else return e => this.setState({
			[field]: e.currentTarget.value
		});
	}


	check() {
		this.setState({
			is_tasker: !this.state.is_tasker
		});		
	}

	handleSubmit(e) {


		e.preventDefault();
		const user = Object.assign({}, this.state);
		this.props.processForm(user);
	}

	// renderErrors(type) {
	// 	return (
	// 		<ul>
	// 			{this.props.errors.map((error, i) => (
	// 				<li key={`error-${i}`}>
	// 					{error}
	// 				</li>
	// 			))}
	// 		</ul>
	// 	);
	// }
	renderErrors(type) {
	
		for(let i = 0; i< this.props.errors.length; i++){

				if (this.props.errors[i].includes(type)) {
						return (
							<div className='error-display'>
								{ this.props.errors[i] }
							</div>
						);
				}
		} 
	}

	render() {
		return (
			<div className = "signup-background">
				<div className = 'left-text'>
					<div className="text-white left-1">Start Tasking.</div>
					<div className="text-white left-2">Earn money your way.</div>
					<div className="text-white left-3">Be someone's hero today. Earn money by helping people with their everyday to-dos.</div>
				</div>
				<div className = "signup-form-container">
					<form onSubmit={this.handleSubmit} className="signup-form-box">
						<h2 className="signup-form-title">Become a Masker</h2>
						<div className="all-fields-required">Create an account to get started. All fields required.	</div>

					
						<div className="signup-form">
						
							<label>
								<input type="text"
									placeholder = "Username"
									value={this.state.username}
									onChange={this.update('username')}
									className="signup-input"
								/>
							</label>
							{this.renderErrors('Username')}
							<br />
							
							<label>
								<input type="password"
									placeholder = "Password"
									value={this.state.password}
									onChange={this.update('password')}
									className="signup-input"
								/>
							</label>
							{this.renderErrors('Password')}
							<br />

							<label>
								<input type="text"
									placeholder="E-mail"
									value={this.state.mail}
									onChange={this.update('email')}
									className="signup-input"
								/>
							</label>
							{this.renderErrors('Email')}
							<br />

							<label>
								<input type="text"
									placeholder="Price Per Hour"
									value={this.state.price_per_hour}
									onChange={this.update('price_per_hour')}
									className="signup-input"
								/>
							</label>
							{this.renderErrors('Price')}
							<br />
							<span className='tasker-txt'>Masker?</span>
							<input type="checkbox"  
									value="true"
									onChange={this.check}></input>									
								<br></br>
							<input className="signup-submit" type="submit" value="Registration" />
							<br></br>Already have an account? <br></br>{this.props.navLink}
							{/* {this.renderErrors()} */}
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default withRouter(SignupForm);
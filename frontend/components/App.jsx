import React from 'react';
import NavbarContainer from './navbar/navbar_container'
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import MainFormContainer from './session_form/main_form_container';
import TasksByCatContainer from './session_form/tasks_by_category_container';
import LoggedInDoerForm from './session_form/logged_in_doer'
import LoggedInMakerForm from './session_form/logged_in_maker'
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
const App = () => (
	<div>

		<Switch>
			<Route path="/maker" component={LoggedInMakerForm} />
			<Route path="/doer" component={LoggedInDoerForm}/>
			<Route path="/tasks/:categoryId" component={TasksByCatContainer}/>
			<AuthRoute exact path="/login" component={LoginFormContainer} />
			<AuthRoute exact path="/signup" component={SignupFormContainer} />
			<Route exact path="/" component={MainFormContainer} />	

		</Switch>
	</div>
);


export default App;
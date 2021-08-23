import React, { useState } from 'react'
import './LoginForm.scss'
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, required } from '../../redux/validators/validators';
import { Element } from '../common/FormsControls/FormsControls';
import cn from 'classnames';

const maxLength6 = maxLengthCreator(6)
const Input = Element("input");



let LoginForm = (props) => {

	const [radioActive, setRadioActive] = useState(0)

	return (
		<form className="login__row" onSubmit={props.handleSubmit}>
			<span className="login__label">Gender</span>
			<div className="login__gender">
				<div className={cn("login__radioContainer", radioActive === 1 && "active")} onClick={() => setRadioActive(1)}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920" height="32px" width="32px">
						<g id="STROKES">
							<path d="M1322.7 1148.1c0 305.3-247.5 552.9-552.9 552.9-305.3 0-552.9-247.5-552.9-552.9 0-305.3 247.5-552.9 552.9-552.9 152.7 0 290.9 61.9 390.9 161.9 100.1 100.1 162 238.3 162 391z" fill="none" stroke="#656565" stroke-width="50" />
							<path d="M1322.7 1148.1c0 305.3-247.5 552.9-552.9 552.9-305.3 0-552.9-247.5-552.9-552.9 0-305.3 247.5-552.9 552.9-552.9 152.7 0 290.9 61.9 390.9 161.9 100.1 100.1 162 238.3 162 391z" fill="none" stroke="#656565" stroke-width="50" />
							<path d="M1700.9 216.9l-540.2 540.2" fill="none" stroke="#656565" stroke-width="50" />
							<path d="M1700.9 658.7V216.9h-441.7" fill="none" stroke="#656565" stroke-width="50" />
							<g>
								<path d="M1322.7 1148.1c0 305.3-247.5 552.9-552.9 552.9-305.3 0-552.9-247.5-552.9-552.9 0-305.3 247.5-552.9 552.9-552.9 152.7 0 290.9 61.9 390.9 161.9 100.1 100.1 162 238.3 162 391z" fill="none" stroke="#656565" stroke-width="50" />
								<path d="M1700.9 216.9l-540.2 540.2" fill="none" stroke="#656565" stroke-width="50" />
								<path d="M1700.9 658.7V216.9h-441.7" fill="none" stroke="#656565" stroke-width="50" />
							</g>
						</g>
					</svg>
					<span>Male</span>
					<Field name="gender" type="radio" value="male" id="male" component="input" className="login__radio" />
				</div>
				<div className={cn("login__radioContainer", radioActive === 2 && "active")} onClick={() => setRadioActive(2)}>
					<svg height="35px" version="1.1" viewBox="0 0 24 24" width="35px">
						<g fill="none" fill-rule="evenodd" id="social/gender/female" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
							<path d="M17.5,8.5 C17.5,11.813 14.813,14.5 11.5,14.5 C8.187,14.5 5.5,11.813 5.5,8.5 C5.5,5.187 8.187,2.5 11.5,2.5 C14.813,2.5 17.5,5.187 17.5,8.5 Z M11.5,14.5 L11.5,21.5 M8.5,18.5 L14.5,18.5"
								id="line" stroke="#656565" />
						</g></svg>
					<span>Female</span>
					<Field name="gender" type="radio" value="female" id="female" component="input" className="login__radio" />
				</div>
				<div className={cn("login__radioContainer", radioActive === 3 && "active")} onClick={() => setRadioActive(3)}>
					<svg height="35px" version="1.1" viewBox="0 0 24 24" width="35px">
						<g fill="none" fill-rule="evenodd" id="social/gender/bigender" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
							<path d="M5.9648,6.9648 C7.9168,5.0118 11.0828,5.0118 13.0348,6.9648 C14.9878,8.9168 14.9878,12.0828 13.0348,14.0348 C11.0828,15.9878 7.9168,15.9878 5.9648,14.0348 C4.0118,12.0828 4.0118,8.9168 5.9648,6.9648 Z M13.0352,6.9648 L17.5002,2.4998 M13.5,2.5 L17.5,2.5 L17.5,6.5 M9.5,15.5 L9.5,21.5 M6.5,18.5 L12.5,18.5"
								id="line" stroke="#656565" /></g>
					</svg>
					<span>Other</span>
					<Field name="gender" type="radio" value="other" id="other" component="input" className="login__radio" />
				</div>
			</div>
			<label htmlFor="Email" className="login__label">E-mail</label>
			<div className="login__item">
				<Field type="email" id="Email" name="Email" placeholder="johnsmith@mail.com" component={Input} validate={[required]} className="login__input" />
			</div>
			<label htmlFor="CreatePassword" className="login__label">Create Password</label>
			<div className="login__item">
				<Field type="password" id="CreatePassword" name="CreatePassword" placeholder="***********" component={Input} validate={[required, maxLength6]} className="login__input" />
			</div>
			<label htmlFor="ConfirmPassword" className="login__label">Confirm Password</label>
			<div className="login__item">
				<Field type="password" id="ConfirmPassword" name="ConfirmPassword" placeholder="***********" component={Input} validate={[required, maxLength6]} className="login__input" />
			</div>
			<div className="login__item">
				<button className="login__btn">Sign Up</button>
			</div>
		</form>
	)
}
LoginForm = reduxForm({ form: 'login' })(LoginForm)


export default LoginForm
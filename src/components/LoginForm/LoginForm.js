import React from 'react'
import style from './LoginForm.scss'
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, required } from '../../redux/validators/validators';
import { Element } from '../common/FormsControls/FormsControls';

const maxLength6 = maxLengthCreator(6)
const Input = Element("input");

let LoginForm = (props) => {

	return (
		<form className="login__row" onSubmit={props.handleSubmit}>
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
import LoginForm from './components/LoginForm/LoginForm'
import logo from './assets/img/logo.png'
import cn from 'classnames';

function AppForm() {
	const sendData = (formData) => {
		console.log(formData);
		alert(`gender - ${formData.gender === undefined ? "not indicated" : formData.gender}, \n login - ${formData.Email}, \n password - ${formData.CreatePassword}`)
	}
	return (
		<div className="wrapper">
			<div className={cn("wrapper__content", "_container")}>
				<section className="login">
					<div className="login__logo">
						<img alt="logo" src={logo} />
					</div>
					<h1 className="login__title">Sign Up with email</h1>
					<LoginForm onSubmit={sendData} />
					<p className="login__text">Already have an account? <a href="#">Log In</a></p>
					<p className="login__text">Review privacy and disclosures <a href="#">here</a> </p>
				</section>
			</div>
		</div>
	);
}

export default AppForm;

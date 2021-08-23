import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/null.scss';
import './assets/css/index.scss';
import './assets/css/fonts.scss';
import AppForm from './AppForm';
import store from './redux/store'
import { Provider } from 'react-redux';

	ReactDOM.render(
		<Provider store={store}>
			<AppForm/>
		</Provider>,document.getElementById('root'));



import React from 'react'
import style from './FormsControls.module.scss'

export const Element = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;
	const hasValid = meta.active && meta.valid;

	return (
		<div className={`${style.form__control} ${hasError ? style.error : ""} ${hasValid ? style.valid : ""}`}>
			<input {...input} {...props} className={style.form__element} required />
			{hasError && <span> {meta.error} </span>}
		</div>
	);
};

import React from 'react'
import style from './FormsControls.module.scss'

export const Element = Element => ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={`${style.form__control} ${hasError ? style.error : ""}`}>
			<Element {...input} {...props} className={style.form__element} />
			{hasError && <span> {meta.error} </span>}
		</div>
	);
};

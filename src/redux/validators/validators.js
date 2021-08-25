export const required = value => {
	if (value) return undefined
	return "Error description"
}

export const emailValid = value =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
		'Invalid email address' : undefined

export const maxLengthCreator = (maxLength) => value => {
	if (value && value.length < maxLength) return `Min length is ${maxLength} symbol`
	return undefined
}

export const passwordMatch = (valuePassword) => value => {
	if (value && valuePassword === false) return "Password mismatch"
	return undefined
}

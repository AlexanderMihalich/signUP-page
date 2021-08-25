export const required = value => {
	if (value) return undefined
	return "Error description"
}

export const maxLengthCreator = (maxLength) => value => {
	if (value && value.length < maxLength) return `Min length is ${maxLength} symbol`
	return undefined
}

export const passwordMatch = (valuePassword) => value => {
	if (value && valuePassword === false) return "Password mismatch"
	return undefined
}

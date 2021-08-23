export const required = value => {
	if (value) return undefined
	return "Error description"
}

export const maxLengthCreator = (maxLength) => value => {
	if (value && value.length < maxLength) return `Max length is ${maxLength} symbol`
	return undefined
}
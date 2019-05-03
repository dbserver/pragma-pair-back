const createExceptionObject = (message, status) => {
	return {
		error: true,
		message: message,
		status: status
	}
};

export default {
	createExceptionObject
}

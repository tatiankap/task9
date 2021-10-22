export const validator = (data, config) => {
	const errors = {};
	const validate = (validateMethod, data, config) => {
		let satusValidate;
		switch (validateMethod) {
			case 'isRequired':
				satusValidate = data.trim() === '';
				break;
			case 'isYear': {
				const isYear = /\d{4}/g;
				satusValidate = !isYear.test(data) || Number(data) > new Date().getFullYear() || Number(data) < 1870;
				break;
			}
			case 'isLink': {
				const isLink = /(https?:\/\/)?([\da-z\.-]+)\.([a-z]{2,6})([\/\w\.-]*)*\/?/g;
				satusValidate = !isLink.test(data);
				break;
			}
			default:
				break;
		}
		if (satusValidate) return config.message;
	}

	for(const fieldName in data){
		for(const validateMethod in config[fieldName]){
			const error = validate(
				validateMethod,
				data[fieldName],
				config[fieldName][validateMethod]
			);
			if(error && !errors[fieldName]) errors[fieldName] = error;
		}
	}
	return errors;
}
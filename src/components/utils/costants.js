export const formFields = [
	{
		name: 'Имя',
		value: 'name',
		type: 'text',
	},
	{
		name: 'Фамилия',
		value: 'surname',
		type: 'text',
	},
	{
		name: 'Год рождения',
		value: 'year',
		type: 'number',
	},
	{
		name: 'Портфолио',
		value: 'link',
		type: 'text',
	},
];

export const validatorConfig = {
	name: {
		isRequired: {
			message: "Поле 'Имя' обязательно для заполнения",
		},
	},
	surname: {
		isRequired: {
			message: "Поле 'Фамилия' обязательно для заполнения",
		},
	},
	year: {
		isRequired: {
			message: "Поле 'Год рождения' обязательно для заполнения",
		},
		isYear: {
			message: "Поле 'Год рождения' не корректно"
		}
	},
	link: {
		isRequired: {
			message: "Поле 'Портфолио' обязательно для заполнения",
		},
		isLink: {
			message: "Поле 'Портфолио' должно быть ссылкой",
		}
	},
};
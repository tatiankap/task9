import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import TextField from '../ui/textFiels';
import { formFields, validatorConfig } from '../utils/costants';
import { validator } from '../utils/validator';
import Modal from '../ui/modal';

const EdditPage = () => {
	const history = useHistory();
	const [data, setData] = useState({});
	const [errors, setErrors] = useState({});
	const [showModal, setShowModal] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		localStorage.setItem('data', JSON.stringify(data));
	};

	const validate = () => {
		const errors = validator(data, validatorConfig);

		setErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleChange = ({ target }) => {
		setData(prev => ({ ...prev, [target.name]: target.value }));
	};

	useEffect(() => {
		validate();
	}, [data]);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('data'));
		if (user) {
			setData(user);
		} else {
			setData({ name: '', surname: '', year: '', link: '' });
		}
	}, []);

	const isValid = Object.keys(errors).length === 0;

	return (
		<>
			<div className='container'>
				<h1>Создать</h1>
				{data.hasOwnProperty('name') && <form onSubmit={handleSubmit}>
					{formFields.map(({ name, type, value }) => (
						<TextField key={name} label={name} name={value} type={type} value={data[value]} error={errors[value]} onChange={handleChange} />
					))}
					{localStorage.getItem('data') ? (
						<>
							<button className='btn btn-secondary me-2' type='button' onClick={() => history.push('/')}>
								Назад
							</button>
							<button className='btn btn-primary' type='submit' onClick={() => setShowModal(true)}>
								Обновить
							</button>
						</>
					) : (
						<button className='btn btn-primary' type='submit' onClick={() => setShowModal(true)} disabled={!isValid}>
							Создать
						</button>
					)}
				</form>}
			</div>

			<Modal showModal={showModal} />
		</>
	);
};

export default EdditPage;

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { formFields } from '../utils/costants';
import UserCard from '../ui/userCard';

const CardPage = () => {
	const [user, setUser] = useState({});
	const history = useHistory();

	useEffect(() => {
		JSON.parse(localStorage.getItem('data')) && setUser(JSON.parse(localStorage.getItem('data')));
	}, []);

	return (
		<div className='container'>
			<h1>Карточка студента</h1>
			{user.hasOwnProperty('name') ? (
				<div>
					{formFields.map(({ name, value }) => (
						<UserCard key={value} name={name} value={value} field={user[value]} />
					))}
					<button className='btn btn-primary' onClick={() => history.push('/add')}>
						Редактировать
					</button>
				</div>
			) : (
				<>
					<p>Нет данных</p>
					<button className='btn btn-primary' onClick={() => history.push('/add')}>
						Добавить
					</button>
				</>
			)}
		</div>
	);
};

export default CardPage;

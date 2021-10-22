import React from 'react';
import PropTypes from 'prop-types';
import { checkAge } from '../utils/functions';

const UserCard = ({ name, value, field }) => {
	return (
		<div className='mb-3'>
			<span className='fw-bold'>{name}: </span>
			{value === 'link' ? (
				<a href={field}>{field}</a>
			) : value === 'year' ? (
				`${field} (${new Date().getFullYear() - Number(field)} ${checkAge(new Date().getFullYear() - Number(field))})`
			) : (
				<span>{field}</span>
			)}
		</div>
	);
};

UserCard.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	field: PropTypes.string.isRequired,
};

export default UserCard;

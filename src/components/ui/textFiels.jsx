import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ label, type, name, value, error, onChange }) => {
	const getInputClasses = () => {
		return 'form-control' + (error ? ' is-invalid' : ' is-valid');
	};

	return (
		<div className='mb-3'>
			<label htmlFor={name} className='form-label'>
				{label}
			</label>
			<div className='input-group has-validation'>
				<input type={type} name={name} className={getInputClasses()} id={name} value={value} onChange={onChange} />
				{error && <div className='invalid-feedback'>{error}</div>}
			</div>
		</div>
	);
};

TextField.propTypes = {
	label: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	error: PropTypes.string,
	onChange: PropTypes.func,
};

export default TextField;

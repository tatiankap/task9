import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

const Modal = ({ showModal }) => {
	const history = useHistory();
	return (
		<div className='modal fade show' style={{ display: showModal && 'block', background: '#9d9d9dbf' }}>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title' id='exampleModalLabel'>
							Обновлено!
						</h5>
					</div>
					<div className='modal-footer'>
						<button type='button' className='btn btn-secondary' onClick={() => history.push('/')}>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	showModal: PropTypes.bool,
};

export default Modal;

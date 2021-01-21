import React, { useState } from 'react';
import { observer } from 'mobx-react';

import { API_KEYS } from '../../constants';
import './VideoForm.css';

import meetStore from '../../store/store';

const VideoForm = observer(() => {
	const [meetingNumber, setNumberMeeting] = useState('');
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState(0);

	const handleClick = (evt) => {
		evt.preventDefault();

		const meetConfig = {
			apiKey: API_KEYS.apiKey,
			meetingNumber,
			userName,
			password,
			role,
		};

		if (meetingNumber && userName && password) {
			meetStore.meetConfig(meetConfig);
		}
	}

	return (
		<header className="header">
			<div className="header__container">
				<a className="header__logo" href="#">Zoom-Retranslator</a>
				<form className="header__form">
					<input 
						className="header__form-input" 
						type="text" 
						maxLength="200" 
						placeholder="Meeting Number"
						onChange={(evt) => setNumberMeeting(evt.target.value)}
						required
					/>
					<input 
						className="header__form-input" 
						type="text" 
						maxLength="32" 
						placeholder="Meeting Password" 
						onChange={(evt) => setPassword(evt.target.value)}
					/>
					<input 
						className="header__form-input" 
						type="text" 
						maxLength="32" 
						placeholder="Email option" 
						onChange={(evt) => setUserName(evt.target.value)}
					/>
					<select className="header__form-input">
						<option value={0}>Attendee</option>
						<option value={1}>Host</option>
						<option value={5}>Assistant</option>
					</select>
					</form>
					<button className="header__form-button" onClick={handleClick} type="submit">Join</button>
			</div>
		</header>
	);
});

export default VideoForm;
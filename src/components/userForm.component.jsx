import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../App';
import { FormContainer, Input, SendButton } from './userForm.styles';

const UserForm = ({ user, handler, theme }) => {
	const [firstName, setFirstName] = useState(user?.firstName || '');
	const [lastName, setLastName] = useState(user?.firstName || '');
	const [age, setAge] = useState(user?.firstName || '');
	const [phone, setPhone] = useState(user?.firstName || '');

	const [firstNameError, setFirstNameError] = useState(false);

	const submit = () => {
		console.log('hwew');
		if (!firstName) {
			setFirstNameError(true);
		}
		//handler(firstName, lastName, age, phone);
	};
	//add toast message

	return (
		<FormContainer>
			<Input
				defaultValue={firstName}
				placeholder='First Name'
				type='text'
				onChange={(e) => setFirstName(e.target.value)}
			/>

			<Input
				defaultValue={lastName}
				placeholder='Last Name'
				type='text'
				onChange={(e) => setLastName(e.target.value)}
			/>

			<Input
				defaultValue={age}
				placeholder='Age '
				type='number'
				onChange={(e) => setAge(e.target.value)}
			/>

			<Input
				defaultValue={phone}
				placeholder='Phone'
				type='number'
				onChange={(e) => setPhone(e.target.value)}
			/>

			{/* <Link to={PATHS.HOME}> */}
			<SendButton type='submit' onClick={submit}>
				Submit
			</SendButton>
			{/* </Link> */}
		</FormContainer>
	);
};

export default UserForm;

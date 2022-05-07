import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { PATHS } from '../App';
import { getAllUsers } from '../utils/serverCalls';
import { useTranslation } from 'react-i18next';

import { useNavigate } from 'react-router-dom';

import {
	BackButton,
	DeleteButton,
	Buttons,
	FormContainer,
	Input,
	SendButton,
} from './userForm.styles';

const UserForm = ({ user, handler, setUsers, setToast, deleteHandler }) => {
	let navigate = useNavigate();
	const { t } = useTranslation();

	const [allValid, setAllValid] = useState(true);

	const [firstName, setFirstName] = useState(user ? user.first_name : '');
	const [lastName, setLastName] = useState(user ? user.last_name : '');
	const [age, setAge] = useState(user ? user.age : '');
	const [phone, setPhone] = useState(user ? user.phone : '');

	const [firstNameTouched, setFirstNameTouched] = useState(false);
	const [LastNameTouched, setLastNameTouched] = useState(false);
	const [phoneTouched, setPhoneTouched] = useState(false);
	const [ageTouched, setAgeTouched] = useState(false);

	const [firstNameError, setFirstNameError] = useState(false);
	const [lastNameError, setLastNameError] = useState(false);
	const [ageError, setAgeError] = useState(false);
	const [phoneError, setPhoneError] = useState(false);

	useEffect(() => {
		let errorRule = !firstName;
		setFirstNameError(errorRule);
	}, [firstName]);

	useEffect(() => {
		let errorRule = !lastName;
		setLastNameError(errorRule);
	}, [lastName]);

	useEffect(() => {
		let errorRule = !age || age < 1 || age > 120;
		setAgeError(errorRule);
	}, [age]);

	useEffect(() => {
		let errorRule = !phone || phone < 100000;
		setPhoneError(errorRule);
	}, [phone]);

	useEffect(() => {
		setAllValid(!(firstNameError || lastNameError || phoneError || ageError));
	}, [firstNameError, lastNameError, phoneError, ageError]);

	const submit = async () => {
		if (allValid) {
			const data = await handler({
				firstName,
				lastName,
				age,
				phone,
				id: user ? user.id : null,
			});
			if (data.status === 'success') {
				let response = await getAllUsers();
				setUsers(response);
				navigate(PATHS.HOME);
				let toastMessage;
				if (user) {
					toastMessage = `Updated user: ${data.data.user.first_name} ${data.data.user.last_name}`;
				} else {
					toastMessage = `${data.data.user.first_name} ${data.data.user.last_name} was added`;
				}
				setToast(toastMessage);
			}
		}
	};

	return (
		<FormContainer>
			<Input
				error={firstNameError && firstNameTouched}
				defaultValue={firstName}
				placeholder={t('first')}
				type='text'
				name='firstName'
				onChange={(e) => {
					setFirstNameTouched(true);
					setFirstName(e.target.value);
				}}
			/>
			{firstNameError && firstNameTouched ? (
				<p>Error: must have first name</p>
			) : null}

			<Input
				error={lastNameError && LastNameTouched}
				defaultValue={lastName}
				placeholder={t('last')}
				type='text'
				onChange={(e) => {
					setLastName(e.target.value);
					setLastNameTouched(true);
				}}
			/>
			{lastNameError && LastNameTouched ? (
				<p>Error: must have Last name</p>
			) : null}

			<Input
				error={ageError && ageTouched}
				defaultValue={age}
				placeholder={t('age')}
				type='number'
				onChange={(e) => {
					setAge(+e.target.value);
					setAgeTouched(true);
				}}
			/>
			{ageError && ageTouched ? (
				<p>Error: age must be between 0 and 120</p>
			) : null}

			<Input
				error={phoneError && phoneTouched}
				defaultValue={phone}
				placeholder={t('phone')}
				type='text'
				onChange={(e) => {
					setPhone(+e.target.value);
					setPhoneTouched(true);
				}}
			/>
			{phoneError && phoneTouched ? <p>{t('phoneError')}</p> : null}
			<Buttons>
				{/* <Link to={PATHS.HOME}> */}
				<BackButton
					onClick={() => {
						navigate(PATHS.HOME);
						setToast('');
					}}>
					{t('back')}
				</BackButton>
				{/* </Link> */}
				{user ? (
					<DeleteButton
						onClick={async () => {
							let newUsers = await deleteHandler(user.id);
							setUsers(newUsers);
							setToast(`Deleted User: ${user.first_name} ${user.last_name}`);
							navigate(PATHS.HOME);
						}}>
						{t('delete')}
					</DeleteButton>
				) : null}
				<SendButton disabled={!allValid} onClick={submit}>
					{user ? `${t('editBtn')}` : `${t('submit')}`}
				</SendButton>
			</Buttons>
		</FormContainer>
	);
};
//export default withRouter(UserForm);
export default UserForm;

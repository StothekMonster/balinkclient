import React from 'react';
import UserForm from '../../components/userForm.component';
import { PageContainer, PageTitle } from '../home/home.styles';
import LanguageButtons from '../../components/LanguageButtons';

export const Add = ({ handler, setUsers, setToast, changeLanguageHandler }) => (
	<PageContainer>
		<PageTitle>Add New User</PageTitle>
		<LanguageButtons changeLanguageHandler={changeLanguageHandler} />

		<UserForm handler={handler} setUsers={setUsers} setToast={setToast} />
	</PageContainer>
);

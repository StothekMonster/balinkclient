import React from 'react';
import UserForm from '../../components/userForm.component';
import { PageContainer, PageTitle } from '../home/home.styles';

export const Add = ({ handler }) => (
	<PageContainer>
		<PageTitle>Add New User</PageTitle>
		<UserForm handler={handler} />
	</PageContainer>
);

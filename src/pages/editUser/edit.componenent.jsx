import React from 'react';
import UserForm from '../../components/userForm.component';
import { PageContainer, PageTitle } from '../home/home.styles';

export const Edit = ({ user }) => (
	<PageContainer>
		<PageTitle>Edit Existing User</PageTitle>
		<UserForm user={user} />
	</PageContainer>
);

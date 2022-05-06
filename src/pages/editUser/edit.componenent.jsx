import React from 'react';
import { useParams } from 'react-router-dom';
import UserForm from '../../components/userForm.component';
import { PageContainer, PageTitle } from '../home/home.styles';

export const Edit = ({ users, handler, setUsers, setToast, deleteHandler }) => {
	const { id } = useParams();
	const user = users.find((usr) => usr.id === +id);

	return (
		<PageContainer>
			<PageTitle>Edit Existing User</PageTitle>
			<UserForm
				user={user}
				handler={handler}
				setUsers={setUsers}
				setToast={setToast}
				deleteHandler={deleteHandler}
			/>
		</PageContainer>
	);
};

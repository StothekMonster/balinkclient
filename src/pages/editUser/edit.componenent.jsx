import React from 'react';
import { useParams } from 'react-router-dom';
import UserForm from '../../components/userForm.component';
import { PageContainer, PageTitle } from '../home/home.styles';
import { useTranslation } from 'react-i18next';

export const Edit = ({ users, handler, setUsers, setToast, deleteHandler }) => {
	const { id } = useParams();
	const user = users.find((usr) => usr.id === +id);
	const { t } = useTranslation();
	return (
		<PageContainer>
			<PageTitle>{t('edit')}</PageTitle>
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

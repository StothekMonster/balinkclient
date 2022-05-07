import React from 'react';
import { useTranslation } from 'react-i18next';
import UserForm from '../../components/userForm.component';
import { PageContainer, PageTitle } from '../home/home.styles';

export const Add = ({ handler, setUsers, setToast }) => {
	const { t } = useTranslation();

	return (
		<PageContainer>
			<PageTitle>{t('add')}</PageTitle>

			<UserForm handler={handler} setUsers={setUsers} setToast={setToast} />
		</PageContainer>
	);
};

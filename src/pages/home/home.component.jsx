import React, { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import 'react-toastify/dist/ReactToastify.css';
import { FaSort } from 'react-icons/fa';
import UserRows from './userRows.jsx';
import {
	PageContainer,
	PageTitle,
	FilterContainer,
	Label,
	Filter,
	Grid,
	Col1,
	Col2,
	Col3,
	Col4,
	Col5,
	AddNewUserButton,
	UserRowsDiv,
} from './home.styles';
import _ from 'lodash';
import { PATHS } from '../../App';
import { Link } from 'react-router-dom';
import LanguageButtons from '../../components/LanguageButtons.jsx';

const params = {
	id: { label: 'id' },
	firstName: { label: 'first', dataLabel: 'first_name' },
	lastName: { label: 'last', dataLabel: 'last_name' },
	phone: { label: 'phone' },
	age: { label: 'age' },
};

const toastOptions = {
	position: toast.POSITION.BOTTOM_LEFT,
};

export const HomePage = ({ users, toastMessage, changeLanguageHandler }) => {
	const { t } = useTranslation();
	const [usersCopy, setUsersCopy] = useState([]);
	const [search, setSearch] = useState('');

	const [sortIcon, setSortIcon] = useState(params.id.label);

	useEffect(() => {
		if (toastMessage) {
			toast.success(toastMessage, toastOptions);
		}
	}, [toastMessage]);

	const header = (
		<Grid>
			<Col1 onClick={() => filterAndSort(params.id.label)}>
				{t(params.id.label)} {sortIcon === params.id.label ? <FaSort /> : null}
			</Col1>
			<Col2 onClick={() => filterAndSort(params.firstName.dataLabel)}>
				{t(params.firstName.label)}{' '}
				{sortIcon === params.firstName.dataLabel ? <FaSort /> : null}
			</Col2>
			<Col3 onClick={() => filterAndSort(params.lastName.dataLabel)}>
				{t(params.lastName.label)}{' '}
				{sortIcon === params.lastName.dataLabel ? <FaSort /> : null}
			</Col3>
			<Col4 onClick={() => filterAndSort(params.age.label)}>
				{t(params.age.label)}{' '}
				{sortIcon === params.age.label ? <FaSort /> : null}
			</Col4>
			<Col5 onClick={() => filterAndSort(params.phone.label)}>
				{t(params.phone.label)}{' '}
				{sortIcon === params.phone.label ? <FaSort /> : null}
			</Col5>
		</Grid>
	);

	const filterAndSort = (param, searchTerm = '') => {
		const filteredData = filter(searchTerm);
		const sortedData = sort(filteredData, param);
		setUsersCopy(sortedData);
	};

	const sort = (data, param, ascending = true) => {
		setSortIcon(param);
		return _.orderBy(data, param, ascending);
	};

	const filter = (searchTerm) => {
		return users.filter((user) => {
			return (
				('' + user.id).includes(searchTerm) ||
				user.first_name.includes(searchTerm) ||
				user.last_name.includes(searchTerm) ||
				('' + user.age).includes(searchTerm) ||
				('' + user.phone).includes(searchTerm)
			);
		});
	};

	return (
		<PageContainer>
			<PageTitle>{t('home')}</PageTitle>
			<LanguageButtons changeLanguageHandler={changeLanguageHandler} />
			<FilterContainer>
				<Label>{`${t('filter')}:`} </Label>
				<Filter
					onChange={(e) => {
						setSearch(e);
						filterAndSort(sortIcon, e.target.value);
					}}
				/>
			</FilterContainer>
			{header}
			<UserRowsDiv>
				<UserRows
					users={usersCopy.length === 0 && search === '' ? users : usersCopy}
				/>
			</UserRowsDiv>
			<Link to={PATHS.ADD}>
				<AddNewUserButton>+</AddNewUserButton>
			</Link>
			<ToastContainer />
		</PageContainer>
	);
};

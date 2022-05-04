import React from 'react';
import {
	PageContainer,
	PageTitle,
	Grid,
	Col1,
	Col2,
	Col3,
	Col4,
	Col5,
	EvenGridDataRow,
	OddGridDataRow,
	AddNewUserButton,
} from './home.styles';
import _ from 'lodash';
import { PATHS } from '../../App';
import { Link } from 'react-router-dom';

const params = {
	id: { label: 'id' },
	firstName: { label: 'first name', dataLabel: 'first_name' },
	phone: { label: 'phone' },
	lastName: { label: 'last name', dataLabel: 'last_name' },
	age: { label: 'age' },
};

export const HomePage = ({ users, setUsers }) => {
	const userRows = users
		? users.map(({ id, first_name, last_name, phone, age }, idx) => {
				const userDetails = (
					<>
						<Col1>{id}</Col1>
						<Col2>{first_name}</Col2>
						<Col3>{last_name}</Col3>
						<Col4>{age}</Col4>
						<Col5>{phone}</Col5>
					</>
				);
				return idx % 2 === 0 ? (
					<EvenGridDataRow key={id}>{userDetails}</EvenGridDataRow>
				) : (
					<OddGridDataRow key={id}>{userDetails}</OddGridDataRow>
				);
		  })
		: null;

	const sort = (data, ascending, param) => {
		setUsers(_.orderBy(data, param, ascending));
	};

	return (
		<PageContainer>
			<PageTitle>home</PageTitle>
			<Grid>
				<Col1 onClick={() => sort(users, true, params.id.label)}>
					{params.id.label}
				</Col1>
				<Col2 onClick={() => sort(users, true, params.firstName.dataLabel)}>
					{params.firstName.label}
				</Col2>
				<Col3 onClick={() => sort(users, true, params.lastName.dataLabel)}>
					{params.lastName.label}
				</Col3>
				<Col4 onClick={() => sort(users, true, params.age.label)}>
					{params.age.label}
				</Col4>
				<Col5 onClick={() => sort(users, true, params.phone.label)}>
					{params.phone.label}
				</Col5>
			</Grid>
			{userRows}
			<Link to={PATHS.ADD}>
				<AddNewUserButton>+</AddNewUserButton>
			</Link>
		</PageContainer>
	);
};

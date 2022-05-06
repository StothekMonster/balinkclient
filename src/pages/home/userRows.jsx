import React from 'react';
import {
	Col1,
	Col2,
	Col3,
	Col4,
	Col5,
	EvenGridDataRow,
	OddGridDataRow,
} from './home.styles';
import { useNavigate } from 'react-router-dom';
//import { PATHS } from '../../App';

const UserRows = ({ users }) => {
	let navigate = useNavigate();
	const nav = (id) => {
		navigate('/edit/' + id, { id, user: users.find((usr) => usr.id === id) });
	};
	return users.map(({ id, first_name, last_name, phone, age }, idx) => {
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
			<EvenGridDataRow onClick={() => nav(id)} key={id}>
				{userDetails}
			</EvenGridDataRow>
		) : (
			<OddGridDataRow onClick={() => nav(id)} key={id}>
				{userDetails}
			</OddGridDataRow>
		);
	});
};

export default UserRows;

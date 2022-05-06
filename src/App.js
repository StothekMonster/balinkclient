import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home/home.component';
import GlobalStyle from './globalStyles';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
	getAllUsers,
	addUser,
	editUser,
	deleteUser,
} from './utils/serverCalls';
import { Add } from './pages/addUser/add.componenent';
import { Edit } from './pages/editUser/edit.componenent';
export const PATHS = { HOME: '/', ADD: '/add', EDIT: 'edit/:id' };
const theme = {
	colors: {
		white: '#f4fcf2',
		black: '#40404A',
		gray0: '#ebebeb',
		gray1: '#C3C9C1',
		gray2: '#797D78',
		green1: '#B8FDA7',
		green2: '#5B7D52',
		red: '#B06763',
		brown1: '#63312E',
		brown2: '#63481A',
		blue1: '#8DC5FC',
		blue2: '#5180B0',
	},
};
function App() {
	const [users, setUsers] = useState([]);

	const [toastMessage, setToastMessage] = useState('');

	useEffect(() => {
		async function fetchData() {
			let response = await getAllUsers();
			setUsers(response);
		}
		fetchData();
	}, []);

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<div className='App'>
					<Routes>
						<Route
							exact
							path={PATHS.HOME}
							element={
								<HomePage
									users={users}
									setUsers={setUsers}
									toastMessage={toastMessage}
								/>
							}
						/>
						<Route
							exact
							path={PATHS.ADD}
							element={
								<Add
									handler={addUser}
									setUsers={setUsers}
									setToast={setToastMessage}
								/>
							}
						/>
						<Route
							path={PATHS.EDIT}
							element={
								<Edit
									handler={editUser}
									users={users}
									setUsers={setUsers}
									setToast={setToastMessage}
									deleteHandler={deleteUser}
								/>
							}
						/>
					</Routes>
				</div>
			</ThemeProvider>
		</Router>
	);
}

export default App;

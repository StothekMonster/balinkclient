import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home/home.component';
import GlobalStyle from './globalStyles';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { getAllUsers } from './utils/serverCalls';
import { Add } from './pages/addUser/add.componenent';
export const PATHS = { HOME: '/', ADD: '/add', EDIT: 'edit/:id' };
const theme = {
	colors: {
		white: '#f4fcf2',
		black: '#40404A',
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
	const [users, setusers] = useState([]);
	useEffect(() => {
		async function fetchData() {
			let response = await getAllUsers();
			setusers(response);
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
							element={<HomePage users={users} setUsers={setusers} />}
						/>
						<Route exact path={PATHS.ADD} element={<Add />} />
						<Route exact path={PATHS.EDIT} element={<HomePage />} />
					</Routes>
				</div>
			</ThemeProvider>
		</Router>
	);
}

export default App;

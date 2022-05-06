export const getAllUsers = async () => {
	const request = new Request('http://localhost:8000/api/v1/users', {
		method: 'get',
		headers: {
			Accept: 'application/json, text/plain, */*',
		},
	});
	const response = await fetch(request);
	const data = await response.json();
	return data.data.users;
};

export const addUser = async ({ firstName, lastName, age, phone }) => {
	try {
		const request = new Request('http://localhost:8000/api/v1/users', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify([
				{
					first_name: firstName,
					last_name: lastName,
					age,
					phone,
				},
			]),
		});
		const response = await fetch(request);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const editUser = async ({ firstName, lastName, age, phone, id }) => {
	try {
		const request = new Request(`http://localhost:8000/api/v1/users/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify([
				{
					first_name: firstName,
					last_name: lastName,
					age,
					phone,
				},
			]),
		});
		const response = await fetch(request);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const deleteUser = async (id) => {
	try {
		const request = new Request(`http://localhost:8000/api/v1/users/${id}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
		});
		const response = await fetch(request);
		const data = await response.json();
		return data.data;
	} catch (error) {
		console.log(error);
	}
};

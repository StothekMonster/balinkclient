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

export const addUser = async (firstName, lastName, age, phone) => {
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
		//mode: 'cors',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		Accept: ' */*',
		// 		body: JSON.stringify([
		// 			{
		// 				first_name: firstName,
		// 				last_name: lastName,
		// 				age,
		// 				phone,
		// 			},
		// 		]),
		// 	},
	});
	const response = await fetch(request);
	const data = await response.json();
	console.log(data);
};

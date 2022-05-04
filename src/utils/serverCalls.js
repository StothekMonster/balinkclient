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

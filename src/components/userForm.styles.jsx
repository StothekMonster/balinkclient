import styled from 'styled-components';

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const SendButton = styled.button`
	background-color: ${(props) => props.theme.colors.green1};
	margin-top: 30px;
	padding: 20px 40px;
	border-radius: 5px;
	box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
	font-size: 2rem;
	letter-spacing: 2px;
`;

export const Input = styled.input`
	padding: 10px;
	margin: 10px;
	min-width: 200px;
	font-size: 18px;
	width: 33%;
	color: ${(props) => props.theme.colors.blue2};
	background: ${(props) => props.theme.colors.gray0};
	border: 2px solid ${(props) => props.theme.colors.blue1};
	border-radius: 3px;

	&:first-child {
		margin-top: 30px;
	}

	&:focus-visible {
		outline: auto 5px #63481a;
	}
`;

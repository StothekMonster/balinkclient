import styled from 'styled-components';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Button = styled.button`
	margin: 10px;
	background-color: ${(props) => props.theme.colors.green1};
	width: 200px;
	margin-top: 30px;
	padding: 20px 40px;
	border-radius: 5px;
	box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
	font-size: 2rem;
	letter-spacing: 2px;
	transition: transform 0.3s ease;
	cursor: pointer;

	&:active {
		transform: scale(0.98);
	}
`;

export const Buttons = styled.div`
	display: flex;
`;

const LanguageButton = styled(Button)`
	padding: 10px 10px;
	font-size: 1.5rem;
	letter-spacing: 1px;
`;

export const HebrewButton = styled(LanguageButton)`
	background-color: ${(props) => props.theme.colors.blue1};
`;

export const EnglishButton = styled(LanguageButton)`
	background-color: ${(props) => props.theme.colors.green1};
`;

export const SendButton = styled(Button)`
	background-color: ${(props) => props.theme.colors.green1};
	&:disabled {
		background-color: ${(props) => props.theme.colors.gray0};
		color: ${(props) => props.theme.colors.gray1};
	}
`;

export const BackButton = styled(Button)`
	background-color: ${(props) => props.theme.colors.blue1};
`;

export const DeleteButton = styled(Button)`
	background-color: ${(props) => props.theme.colors.red};
`;

export const Input = styled.input`
	padding: 10px;
	margin: 10px;
	min-width: 200px;
	font-size: 18px;
	width: 33%;
	color: ${(props) => props.theme.colors.blue2};
	background: ${(props) => props.theme.colors.gray0};
	border: 2px solid
		${(props) => {
			return props.error ? props.theme.colors.brown1 : props.theme.colors.blue1;
		}};
	border-radius: 3px;
	transition: transform 0.3s ease;

	&:first-child {
		margin-top: 30px;
	}

	&:focus-visible {
		outline: auto 5px ${(props) => props.theme.colors.blue2};
		transform: scale(1.05);
	}
`;

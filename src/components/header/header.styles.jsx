import styled from 'styled-components';

export const SwitchContainer = styled.div`
	margin-right: 15px;
	color: ${(props) => props.theme.colors.blue1};
	display: flex;
	padding: 10px;
	justify-content: space-between;
	align-items: center;

	& span {
		margin-right: 10px;
	}
`;

export const Logo = styled.h1`
	width: 200px;
`;

export const Navigation = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 20px;
	z-index: 100;
	position: fixed;
	background-color: ${(props) => props.theme.colors.black};
	top: 0;
	left: 0;
	right: 0;
	transition: all 0.3s ease-in;

	& a:hover {
		color: ${(props) => props.theme.colors.green1};
	}

	& a {
		color: ${(props) => props.theme.colors.blue1};
		text-decoration: none;
		padding: 7px 15px;
		transition: all 0.3s ease-in;
	}
`;

export const Switch = styled.label`
	display: inline-block;
	font-size: 20px; /* 1 */
	height: 1em;
	width: 2em;
	background: ${(props) => props.theme.colors.gray0};
	border-radius: 1em;

	& input {
		position: absolute;
		opacity: 0;

		&:checked + div {
			-webkit-transform: translate3d(100%, 0, 0);
			-moz-transform: translate3d(100%, 0, 0);
			transform: translate3d(100%, 0, 0);
		}
	}

	& div {
		height: 1em;
		width: 1em;
		border-radius: 1em;
		background: ${(props) => {
			return props.children[1].props.language === 'en'
				? props.theme.colors.green1
				: props.theme.colors.red;
		}};
		box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
		-webkit-transition: all 300ms;
		-moz-transition: all 300ms;
		transition: all 300ms;
	}
`;

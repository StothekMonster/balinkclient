import styled from 'styled-components';
export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 80px;
	height: 100vh;
	background-color: ${(props) => props.theme.colors.white};
`;

export const Grid = styled.div`
	margin-top: 30px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr repeat(2, 2fr) 1fr 2fr;
	grid-template-rows: 1fr;
	grid-column-gap: 20px;
	grid-row-gap: 10px;
	text-transform: uppercase;
	min-height: 40px;
	padding: 10px;
	align-items: center;
	justify-content: center;
	text-align: center;
	background-color: ${(props) => props.theme.colors.blue1};
	border: 1px solid ${(props) => props.theme.colors.black};
	color: ${(props) => props.theme.colors.white};
	&:last-child {
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
	}

	border-top-right-radius: 4px;
	border-top-left-radius: 4px;
`;

export const UserRowsDiv = styled.div`
	width: 100%;
	height: 80%;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		display: none;
	}
`;

const dataGridRow = styled(Grid)`
	border-top-right-radius: 0px;
	border-top-left-radius: 0px;

	color: ${(props) => props.theme.colors.black};
	margin-top: 0px;
	border-top: none;
	text-transform: capitalize;
	cursor: pointer;
`;

export const EvenGridDataRow = styled(dataGridRow)`
	background-color: ${(props) => props.theme.colors.white};
`;

export const OddGridDataRow = styled(dataGridRow)`
	background-color: ${(props) => props.theme.colors.gray1};
`;

export const Col1 = styled.div`
	grid-area: 1 / 1 / 2 / 2;
`;

export const Col2 = styled.div`
	grid-area: 1 / 2 / 2 / 3;
`;

export const Col3 = styled.div`
	grid-area: 1 / 3 / 2 / 4;
`;

export const Col4 = styled.div`
	grid-area: 1 / 4 / 2 / 5;
`;

export const Col5 = styled.div`
	grid-area: 1 / 5 / 2 / 6;
`;

export const PageTitle = styled.h1`
	margin-bottom: 30px;
	font-size: 2rem;
	text-transform: capitalize;
`;

export const AddNewUserButton = styled.button`
	width: 100px;
	height: 100px;
	z-index: 100;
	position: absolute;
	bottom: 30px;
	right: 30px;
	border-radius: 50%;
	border: none;
	box-shadow: 2px 2px 2px rgba(0, 0, 0.2);
	background-color: ${(props) => props.theme.colors.blue1};
	color: ${(props) => props.theme.colors.white};
	font-size: 5rem;
	transition: all 0.3s ease;
	cursor: pointer;

	&:active {
		outline: none;
		transform: scale(0.95);
		box-shadow: 1px 1px 1px rgba(0, 0, 0.4);
	}
`;

export const Label = styled.p`
	font-size: 1.5rem;
	margin-right: 20px;
`;

export const Filter = styled.input`
	font-size: 1.5rem;
	padding: 10px;
	border-radius: 3px;
	width: 100%;
	border: 5px solid white;
	background-color: ${(props) => props.theme.colors.black};
	box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
	color: white;
	cursor: text;
`;

export const FilterContainer = styled.div`
	align-items: center;
	margin-top: 30px;
	width: 100%;
	height: 50px;
	flex-direction: row;
	display: flex;
	padding-bottom: 50px;
`;

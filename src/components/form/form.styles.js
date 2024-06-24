import styled from 'styled-components';

const StyledForm = styled.form`
	width: 30%;
	margin: 275px auto;

	font-family: 'Space Grotesk', sans-serif;
	input {
		width: 100%;
		height: 45px;
		border-radius: 10px;
		border: 1px solid #dfdee0;
		margin-top: 9px;
		font-size: 18px;
		padding-left: 16px;
	}
	input[type='submit'] {
		background-color: #21092f;
		color: white;
		cursor: pointer;

		height: 53px;
	}
`;
const CardHolderContainer = styled.div`
	display: block;
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`;
const CardNumberContainer = styled.div`
	display: block;
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`;
const DateAndCvc = styled.div`
	display: flex;
	width: 100%;
	gap: 20px;
	font-size: 12px;
	margin-bottom: 20px;
`;
const DateContainer = styled.div`
	display: flex;
	width: 100%;
	gap: 20px;
`;

export {
	DateContainer,
	DateAndCvc,
	StyledForm,
	CardHolderContainer,
	CardNumberContainer
};

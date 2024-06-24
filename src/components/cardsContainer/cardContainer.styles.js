import styled from 'styled-components';

const CardsContainer = styled.div`
	margin: 187px auto;
	width: 541px;
	position: relative;
`;

const FrontCardContainer = styled.div`
	width: 447px;
	height: 245px;
	background-image: url(bg-card-front.png);
	border-radius: 10px;
	margin-bottom: 37px;
	box-shadow: 0px 26px 62px 6px rgba(0, 0, 0, 0.24);

	&::before {
		content: '';
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: white;
		z-index: 2;
		position: absolute;
		left: 32px;
		top: 28px;
	}
	&::after {
		content: '';
		width: 20px;
		height: 20px;
		border-radius: 50%;
		border: 1px solid white;
		z-index: 2;
		position: absolute;
		left: 94px;
		top: 40px;
	}
`;
const CardNumber = styled.p`
	font-size: 28px;
	color: aliceblue;
	text-align: center;
	margin-top: 139px;
	margin-top: 0;
	padding-top: 139px;
`;
const RearCardContainer = styled.div`
	width: 447px;
	height: 245px;
	background-image: url(bg-card-back.png);
	border-radius: 10px;
	position: absolute;
	right: 0;
	box-shadow: 0px 26px 62px 6px rgba(0, 0, 0, 0.24);
`;
export { CardsContainer, FrontCardContainer, RearCardContainer, CardNumber };

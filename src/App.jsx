import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import CardContainer from "./components/cardsContainer/CardContainer";
import Form from "./components/form/Form";
import MainContainer from "./components/mainContainer/MainContainer";

const App = () => {
	return <>
	<GlobalStyles></GlobalStyles>
	<MainContainer>

		<CardContainer/>
	<Form></Form>
	</MainContainer>
	
	</> 
	
};

export default App;

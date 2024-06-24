import CardContainer from "../cardsContainer/CardContainer"
import Form from "../form/Form"
import { StyledMainContainer } from "./mainContainer.styles"

const MainContainer =({cardNumber})=>{
    return <StyledMainContainer>
        <CardContainer cardNumber={cardNumber}/>
        <Form></Form>
    </StyledMainContainer>
}
export default MainContainer
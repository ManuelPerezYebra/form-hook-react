import { CardNumber, CardsContainer, FrontCardContainer, RearCardContainer } from "./cardContainer.styles"

const CardContainer =({cardNumber})=>{
    
    return <CardsContainer>
        <FrontCardContainer>
            <CardNumber>{cardNumber}</CardNumber>
        </FrontCardContainer>
        <RearCardContainer></RearCardContainer>
    </CardsContainer>
}
export default CardContainer
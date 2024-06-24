import { useState } from "react"
import { CardHolderContainer, CardNumberContainer, DateAndCvc, DateContainer, StyledForm } from "./form.styles";
import { useForm } from "react-hook-form";

const Form =()=>{
    

    const{register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit = (data)=>{
        console.log(data)
    }

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const yearShort = currentYear.toString().slice(2)

    const [month, setMonth]=useState('')
    const [year, setYear]=useState('')
    const [cardNumber, setCardNumber] = useState('');
    if(month > 12) setMonth (12);

    const handleCardNumberChange = (event) => {
        let value = event.target.value;
        value = formatCardNumber(value);
        setCardNumber(value);
        
        
    };

    const formatCardNumber = (value) => {
        value = value.replace(/\s/g, '');
        return value.match(/.{1,4}/g)?.join(' ') || value;
    };
    console.log(cardNumber)
   
    return <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <CardHolderContainer>
            <label htmlFor="cardholdername">CARDHOLDER NAME</label>
            <input type="text" name="cardholder" id="cardholder" placeholder="e.g. Jane Appleseed" {...register('cardholder', {required:true})}/>
            {errors.cardholder?.type === 'required' && <p>Este campo es obligatorio</p>}
        </CardHolderContainer>
        <CardNumberContainer>
            <label htmlFor="cardnumber">CARDNUMBER NAME</label>
            <input type="text" name="cardnumber" id="cardnumber" placeholder="e.g. 1234 5678 9123 0000" maxLength={19} onChange={handleCardNumberChange}   value={cardNumber}/>
        </CardNumberContainer>
       <DateAndCvc>
        <div>
            <label htmlFor="">EXP.DATE (MM/YY)</label>
        <DateContainer>
            <input type="text" name="month" id="month" placeholder="MM" onChange={event => setMonth(event.target.value)} value={month}/>
            <input type="text" name="year" id="year" placeholder="YY" maxLength={2} min={parseInt(yearShort,10)} onChange={event => setYear(event.target.value)} value={year}/>
        </DateContainer>
        </div>
        <div>
            <label htmlFor="cvc">cvc</label>
            <input type="text" name="cvc" id="cvc" maxLength={3} placeholder="e.g. 123"/>
        </div>
       </DateAndCvc>
       <input type="submit" value="Confirm" />

    </StyledForm>
}

export default Form
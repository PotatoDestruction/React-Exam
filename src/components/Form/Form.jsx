import './Form.css'
import styled from 'styled-components';

const Button = styled.button`
padding: 12px 40px;
border-radius: 5px;
font-weight: 700;
border: none;
background-color: green;
color: white;

&:hover {
    background-color: red;
    cursor: pointer;
}
`

const StyledForm = styled.form`
width: 300px;
display: flex;
flex-direction: column;
border: 2px solid black;
padding: 30px;
background: rgb(248, 203, 163);
`

const FormContainer = styled.div`
    width: 1100px;
    margin: 20px auto;
     display: flex;
    justify-content: center;

`

const StyledLabel = styled.label`
    font-weight: 700;
    font-size: 20px;
    padding: 5px 0;
    `

const StyledInput = styled.input`
    text-align: center;
    padding: 10px;
    border: 2px solid;
`

const StyledTextarea = styled.textarea`
    text-align: center;
    padding: 10px;
    border: 2px solid;
    height: 150px;
`

const StyledButtonWrap = styled.div`
    text-align:  center;
    padding: 20px;
`

const Form = ({ onSubmit, name, type }) => {
    return (
        <FormContainer>
            <StyledForm onSubmit={(e) => {
                e.preventDefault();

                { type[0] === 'email' && onSubmit(e.target.email.value, e.target.password.value) }
                { type[0] === 'text' && onSubmit(e.target.text.value, e.target.textarea.value) }

            }}>
                <StyledLabel>{name[0]}:</StyledLabel>
                <StyledInput type={type[0]} name={type[0]} required />
                <StyledLabel>{name[1]}:</StyledLabel>
                {type[1] === 'textarea' ? <StyledTextarea required name={type[1]} /> : <StyledInput type={type[1]} name={type[1]} required />}
                <StyledButtonWrap>
                    <Button type="submit">Submit</Button>
                </StyledButtonWrap>
            </StyledForm>
        </FormContainer>
    )
}

export default Form;
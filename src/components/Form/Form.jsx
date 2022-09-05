import './Form.css'

const Form = ({onSubmit}) => {
    return(
        <div className='formContainer'>
            <form onSubmit={(e) => {
                e.preventDefault();

                onSubmit(e.target.email.value, e.target.password.value)

            }}> 
                <label>Email:</label>
                <input type="email" name="email"/>
                <label>Passowrd:</label>
                <input type="password" name="password"/>
                <div className='buttonWrap'>
                   <button type="submit">Submit</button> 
                </div>               
            </form>
        </div>
    )
}

export default Form;
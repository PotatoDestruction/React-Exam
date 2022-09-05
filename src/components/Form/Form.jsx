import './Form.css'

const Form = ({ onSubmit, name, type }) => {
    return (
        <div className='formContainer'>
            <form onSubmit={(e) => {
                e.preventDefault();

                {type[0] === 'email' && onSubmit(e.target.email.value, e.target.password.value)}
                {type[0] === 'text' && onSubmit(e.target.text.value, e.target.textarea.value)}
                

            }}>
                <label>{name[0]}:</label>
                <input type={type[0]} name={type[0]} />
                <label>{name[1]}:</label>
                {type[1] === 'textarea' ? <textarea name={type[1]} /> : <input type={type[1]} name={type[1]} />}
                <div className='buttonWrap'>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
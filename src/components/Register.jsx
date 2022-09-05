import { useEffect, useState } from "react"
import Form from "./Form/Form"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const [ message, setMessage ] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.clear()
    }, [])

    function onSubmit(email, pass){
        fetch('https://autumn-delicate-wilderness.glitch.me/v1/auth/register', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: email,
                            password: pass
                        })
                    })
                        .then(res => res.json())
                        .then(res => {
                            if(res.err){
                                console.log(res.err)
                                setMessage('Incorrect Data')
                                return
                            }else {
                                setMessage('User Created')
                                setTimeout(()=> {
                                    navigate('/login')
                                },1000)        
                            }
                        })
                        .catch(error => console.log(error))
    }

    return(
        <div className="formMain">
            <h1>Register</h1>
            <Form 
            onSubmit={onSubmit}
             name={['Email', 'Password']}
             type={['email', 'password']} />
            <div className="error">{message}</div>
        </div>
    )
}

export default Register;
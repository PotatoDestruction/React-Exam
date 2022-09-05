import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import Form from "../Form/Form";

const Login = () => {
    const [ message, setMessage ] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.clear()
    }, [])

    function onSubmit(email, pass){
        fetch('https://autumn-delicate-wilderness.glitch.me/v1/auth/login', {
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
                                setMessage(res.err)
                                return
                            }else {
                                setMessage(res.msg)
                                localStorage.setItem('tokenR', res.token)
                                setTimeout(()=> {
                                    navigate('/home')
                                },1000)        
                            }
                        })
                        .catch(error => console.log(error))
    }

    return(
        <div className="formMain">
            <h1>Login</h1>
            <Form 
            onSubmit={onSubmit}
             name={['Email', 'Password']}
             type={['email', 'password']} />
            <div className="error">{message}</div>
        </div>
    )
}

export default Login;
import { useNavigate } from "react-router-dom"
import Form from "./Form/Form";

const Login = () => {

    const navigate = useNavigate();

    function onSubmit(email, pass){
        console.log(email, pass)
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
                                return
                            }else {
                                navigate('/login')
                            }
                        })
                        .catch(error => console.log(error))
    }

    return(
        <div className="formMain">
            <h1>Login</h1>
            <Form onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;
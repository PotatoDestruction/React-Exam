import Form from "../Form/Form";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import './Add.css'

const Add = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('')

    useEffect(() => {
        const token = localStorage.getItem("tokenR");
        {!token && navigate('/login')}
    }, [])

    function postSkill(title, description) {
        console.log(title, description)
        const token = localStorage.getItem("tokenR");
        fetch('https://autumn-delicate-wilderness.glitch.me/v1/content/skills', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                title: title,
                description: description
            })
        })
            .then(res => res.json())
            .then(res => {
                if(res.err) {
                    setMessage(res.err)
                }else{
                    setMessage(res.msg)
                   setTimeout(() => {
                    navigate('/home')
                }, 1000) 
                }                
            })
            .catch(error => console.log(error))
    }

    return(
        <div className="addMain">
            <h1 className="allHeader">Add new skill</h1>
            <div>
                <Form onSubmit={postSkill} name={['Title', 'Description']} type={['text', 'textarea']}/>
            </div>
            <h2 className="message">{message}</h2>
        </div>
    )
}

export default Add;
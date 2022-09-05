import Form from "../Form/Form";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import './Add.css'

const Add = () => {
    const navigate = useNavigate();

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
                console.log(res)
                setTimeout(() => {
                    navigate('/home')
                }, 1000)
            })
            .catch(error => console.log(error))
    }

    return(
        <div className="addMain">
            <h1>Add new skill</h1>
            <div>
                <Form onSubmit={postSkill} name={['Title', 'Description']} type={['text', 'textarea']}/>
            </div>
        </div>
    )
}

export default Add;
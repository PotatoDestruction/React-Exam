import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'


const Main = () => {
    const [skills, setSkills] = useState(null)

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("tokenR");
        {!token && navigate('/login')}
        fetch('https://autumn-delicate-wilderness.glitch.me/v1/content/skills', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setSkills(res)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="main">
            <h1>Home</h1>
            <div className='skillContainer'>
                {!skills && <h1 className='info'>LOADING . . .</h1>}
                {skills && skills.length === 0 && <h1 className='info'>You have no skills...</h1>}
                {skills && skills.map((data, i) => {
                    return (
                        <div key={i} className='box'>
                            <h2>{data.title}</h2>
                            <p>{data.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Main;
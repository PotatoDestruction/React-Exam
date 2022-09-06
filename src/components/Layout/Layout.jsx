import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Layout.css'



const Layout = ({ children, pages }) => {
    

    const [on, setOn] = useState(false)

    useEffect(() => {
        const isOnline = localStorage.getItem('tokenR')
        setOn(isOnline)
    })
    return (
        <div>
            {on ? <div className="statusOn"><h3>Online</h3><Link to='/login'>Log Out</Link></div>: <div className="statusOff"><h3>Offline</h3></div>}
            <header>
                <Link to='/login'><img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="logo" width='200px'/></Link>
                <div>
                    {pages.map((page, i) => {
                        return (
                            <Link key={i} to={`/${page}`}>{page}</Link>
                        )
                    })}
                </div>

            </header>
            {children}
            <footer>Copy Rights @ ....ReactExam</footer>
        </div>
    )
}

export default Layout;
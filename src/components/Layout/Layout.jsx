import { Link } from "react-router-dom";
import './Layout.css'

const Layout = ({ children, pages }) => {
    return (
        <div>
            {console.log(pages)}
            <header>
                <div><img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="logo" width='200px'/></div>
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
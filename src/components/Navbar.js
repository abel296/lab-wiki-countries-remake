import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
    return (
        <nav className="navbar bg-primary">
            <div className="container">
                <Link className="navbar-brand text-white" to={'/'}>WikiCountries</Link>
            </div>
        </nav>
    )
}
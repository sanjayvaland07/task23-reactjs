import logo from '../assets/coding.png'
import { Link } from 'react-router-dom';
import './navbar.css'
function Navbar()
{
    return(
        <nav>
            <Link to="/dashboard"><img className='logo' src={logo} alt="logo" /></Link>
            <Link className='home' to="/">Home</Link>
            <div className="btns">
                <Link to="/signup">Sign up</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    )
}

export default Navbar;
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div className="header">
            
            <ul>
                <li><Link className='Link' to="/">Home</Link></li>
                <li><Link className='Link' to="/about">About</Link></li>
                <li><Link className='Link' to="/service">Services</Link></li>
                <li><Link className='Link' to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Header;

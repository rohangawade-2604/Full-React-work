import { Link } from "react-router-dom";
import footerimg from "../assets/footer.png"
import './footer.css';


const Footer = () => {

    return (
        <>
            <div className="footer">
                <div className="content">
                    <h1 className="head2">What Our Client say</h1><br />
                    <p className="para2">The amazing guidance from my Deepak helped me unleash my stylish tone, explore new heights, and indeed set records! <br /><br /> Vineet vedi  <br /><br />Model</p>
                </div>

                <div className="footerimg">
                    <img src={footerimg} />

                </div>
            </div>

            {/* Next Div.... */}

<footer>
<div className="footer2">
        
        <div className="cont">
            <h1 className="h1">Fit With Deepak</h1><br />
            <p>We are committed to fulfilling your dream of <br />
                 staying Fit & Healthy.</p>
        </div>

        <div className="link">
            <h1 className="h1">Quick Links</h1>
            <ul>
            <li><Link className='Link1' to="/">Home</Link></li>
            <li><Link className='Link1' to="/about">About</Link></li>
            <li><Link className='Link1' to="/service">Services</Link></li>
            <li><Link className='Link1' to="/contact">Contact</Link></li>
        </ul>
        </div>

        <div className="contact">
            <h1 className="h1">Contact Us</h1><br />
            <p style={{}}> <i class="fa-solid fa-phone"></i>  9769637063</p><br />
            <p><i class="fa-solid fa-envelope"></i> rohangawade064@gmail.com</p>
        </div>

        <div className="Reach" style={{gap: "42px"}}>
            <h1 className="h1">Reach Us</h1><br />
            <p><i class="fa-solid fa-location-dot"></i> Kandivali East, Mumbai, Maharashtra 400101</p>
            
        </div>


            
    </div>
</footer>

        </>
    )
}

export default Footer;
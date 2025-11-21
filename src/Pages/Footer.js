import "../Styling/Footer.css"; 
import {Link} from "react-router-dom";

const year = new Date().getFullYear();

export default function Footer(){
    return(
    <div className="footer">
        <div className="par">
        <p>© {year} Your Company. All rights reserved.</p>
        </div>
        <div className="contact">
            <Link to="/www.facebook.com"><img src="/Assets/Icons/facebook-computer-icons-desktop-wallpaper-photos-icon-facebook-removebg-preview.png" alt="Facebook"/></Link>
            <Link to="/www.x.com"><img src="/Assets/Icons/il_570xN.5167793793_f4yw.avif" alt="Twitter"/></Link>
            <Link to="/www.instagram.com"><img src="/Assets/Icons/instagram-logo-png-transparent-background.png" alt="Instagram"/></Link>
            <Link to="/www.linkedIn.com"><img src="/Assets/Icons/linkedin-logo-linkedin-icon-transparent-free-png.webp" alt="LinkedIn"/></Link>
        </div>
    </div>
    );
}
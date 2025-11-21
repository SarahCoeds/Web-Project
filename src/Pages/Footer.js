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
            <Link to="/www.facebook.com"><img src={process.env.PUBLIC_URL + "/Assets/Icons/facebook-computer-icons-desktop-wallpaper-photos-icon-facebook-removebg-preview.png"} /></Link>
            <Link to="/www.x.com"><img src={process.env.PUBLIC_URL + "/Assets/Icons/il_570xN.5167793793_f4yw.avif"} /></Link>
            <Link to="/www.instagram.com"><img src={process.env.PUBLIC_URL + "/Assets/Icons/instagram-logo-png-transparent-background.png"} /></Link>
            <Link to="/www.linkedIn.com"><img src={process.env.PUBLIC_URL + "/Assets/Icons/linkedin-logo-linkedin-icon-transparent-free-png.webp"} /></Link>
        </div>
    </div>
    );
}
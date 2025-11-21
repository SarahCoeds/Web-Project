import {Link} from "react-router-dom";
import "../Styling/Navbar.css";

export default function Navbar() {
    return(
        <div className="navbar">
            <div className="logo">
                <img src={process.env.PUBLIC_URL + "/Assets/Logo/Screenshot 2025-11-21 161539.png"} />

            </div>


                <div className="Links">
                    <Link to="/">Home</Link>
                    <Link to="/ourmission">Our Mission</Link>
                    <Link to="/Take The Test">Take The Test</Link>
                    <button className="login">Login</button>
                </div>
            </div>
    );
}

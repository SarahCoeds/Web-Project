import {Link, useNavigate} from "react-router-dom";
import "../Styling/Navbar.css";


export default function Navbar() {

        const navigate =useNavigate();

    return(
        <div className="navbar">
            <div className="logo">
                <img src={process.env.PUBLIC_URL + "/Assets/Logo/Screenshot 2025-11-21 161539.png"} />

            </div>


                <div className="Links">
                    <Link to="/">Home</Link>
                    <Link to="/ourmission">Our Mission</Link>
                    <Link to="/takethetest">Take The Test</Link>
                    <button className="login" onClick={() => navigate("/Login")}>Login</button>
                </div>
            </div>
    );
}

import "../Styling/Home.css";

export default function Home() {
    return (
        <div className="home">

            <div className="openning-video">
                <video autoPlay loop muted>
                    <source src="/Assets/Videos/3298018-uhd_4096_2160_25fps.mp4" type="video/mp4" />
                </video>

                <div className="opener">
                    <h1>Bite</h1>
                    <p>Your Gateway to Amazing Health</p>
                    <button className="homebutton">Explore More</button>
                </div>
            </div>

            <div className="Testemonials">
                <h2>What Our Users Say</h2>

                <div className="cards">

                    <div className="card1">
                        <p>"Bite transformed my health! The personalized plans are easy to follow and really work."</p>
                        <h3>- Alex P.</h3>
                    </div>

                    <div className="card2">
                        <p>"I love how Bite makes healthy eating simple and enjoyable. Highly recommend it!"</p>
                        <h3>- Jamie L.</h3>
                    </div>

                    <div className="card3">
                        <p>"The community support on Bite keeps me motivated. I've never felt better!"</p>
                        <h3>- Sam K.</h3>
                    </div>

                </div>
            </div>

        </div>
    );
}

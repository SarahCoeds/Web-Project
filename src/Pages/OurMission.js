
import "../Styling/OurMission.css";

export default function Mission() {
  return (
    <div className="page-content mission-page">
      <div className="mission-video-container">
        <video autoPlay loop muted className="mission-video">
          <source src={process.env.PUBLIC_URL + "/Assets/Videos/3297797-uhd_4096_2160_25fps.mp4"} type="video/mp4" />
        </video>

        <div className="mission-cards">
          <div className="mcard1">
            <h1>Track Meals</h1>
            <p>
            Bite aims to help people improve their health by offering 
            personalized nutrition and lifestyle guidance, 
            supportive community features, and the tools needed to make 
            positive, lasting changes toward a healthier life.
            </p>
          </div>

          <div className="mcard2">
            <h1>Personalized Plans</h1>
            <p>
              Receive the best food plans weekly, customized to your lifestyle,
              goals, and taste buds because eating well should feel effortless,
              not exhausting.
            </p>
          </div>

          <div className="mcard4">
            <h1>Fitness Guides</h1>
            <p>
              Enjoy expertly tailored fitness routines designed to maximize
              results and fit seamlessly into your daily routine!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

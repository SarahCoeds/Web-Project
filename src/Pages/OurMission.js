import "../Styling/OurMission.css";

export default function Mission() {
  return (
    <div className="mission-page">
      <div className="mission-video-container">
        <video autoPlay loop muted className="mission-video">
          <source
            src="/Assets/Videos/3297797-uhd_4096_2160_25fps.mp4"
            type="video/mp4"
          />
        </video>

        <div className="mission-cards">
          <div className="mcard1">
            <h1>Track Meals</h1>
            <p>
              At Bite, our mission is to empower individuals to take control of
              their health through personalized nutrition and lifestyle
              solutions. We believe that everyone deserves access to the tools
              and knowledge needed to lead a healthier, happier life. Our
              platform is designed to provide tailored recommendations, foster
              community support, and inspire positive change. Together, we can
              create a world where optimal health is achievable for all.
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

          <div className="mcard3">
            <h1>Connect</h1>
            <p>
              Connect with people from all over the world by sharing ideas,
              stories, and inspiration through our blog!
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

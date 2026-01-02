import "../Styling/Test.css";
import { useState } from "react";

export default function Test() {
  const [data, setData] = useState({
    age: "",
    weight: "",
    height: "",
    activity: ""
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const saved = localStorage.getItem("biteUser");
  const user = saved ? JSON.parse(saved) : null;

  try {
    const res = await fetch("http://localhost:5000/api/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user ? user.id : null,
        age: Number(data.age),
        weight: Number(data.weight),
        height: Number(data.height),
        activity: data.activity
      })
    });

    const result = await res.json();

    if (!res.ok) {
      alert(result.message || "Test submit failed");
      return;
    }

    alert("Test saved!");
  } catch (err) {
    alert("Server error");
  }
};


  return (
    <div className="page-content test-page">
      <video autoPlay loop muted playsInline className="test-video">
        <source
          src={process.env.PUBLIC_URL + "/Assets/Videos/4253140-uhd_4096_2160_25fps.mp4"}
          type="video/mp4"
        />
      </video>

      <form className="test-form" onSubmit={handleSubmit}>
        <h1>Take The Test!</h1>

        <div className="input-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            placeholder="Enter your age"
            value={data.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            id="weight"
            placeholder="Enter your weight"
            value={data.weight}
            onChange={handleChange}
            min="20"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="height">Height (cm)</label>
          <input
            type="number"
            name="height"
            id="height"
            placeholder="Enter your height"
            value={data.height}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="activity">Activity Level</label>
          <select
            name="activity"
            id="activity"
            value={data.activity}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="sedentary">Sedentary</option>
            <option value="lightly_active">Lightly Active</option>
            <option value="moderately_active">Moderately Active</option>
            <option value="very_active">Very Active</option>
          </select>
        </div>

        <button type="submit" className="test-btn">Submit</button>
      </form>
    </div>
  );
}

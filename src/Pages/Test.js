import "../Styling/Test.css";

export default function Test() {
  return (
    <div className="test-page">
      <form className="test-form">
        <h1>Take The Test!</h1>

        <div className="input-group">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" placeholder="Enter your age" required />
        </div>

        <div className="input-group">
          <label htmlFor="weight">Weight (kg)</label>
          <input type="number" id="weight" name="weight" min="20" required />
        </div>

        <div className="input-group">
          <label htmlFor="height">Height (inches)</label>
          <input type="number" id="height" name="height" min="1" required />
        </div>

        <div className="input-group">
          <label htmlFor="activity">Activity Level</label>
          <select id="activity" name="activity" required>
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

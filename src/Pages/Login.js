import "../Styling/Login.css";

export default function Login() {
  return (
    <div className="login-page">
      <form className="login-form">
        <h1>Login</h1>

        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text"
            id="name"
            name="name"
            placeholder="Enter Display Name"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password"
            id="password"
            name="password"
            placeholder="Enter Your Password"
            required
          />
        </div>

        <button type="submit" className="login-btn">Submit</button>

        <p>Don’t have an account? <span>Sign up</span></p>
      </form>
    </div>
  );
}

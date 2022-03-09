import "../App.css";
import { useState } from "react";
import { connect } from "react-redux";
import { userLogin } from "../redux/actions";
import { Link } from "react-router-dom";

function Login({ userLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    await userLogin({ email, password });
  };

  return (
    <div>
      <div className="container">
        <div className="card">
          <Link to="/" className="button-84">
            SignUp
          </Link>
          <h2 style={{ textAlign: "center" }}>Login Page</h2>
          <form onSubmit={loginHandler} className="card-form">
            <div className="input">
              <input
                type="email"
                value={email}
                className="input-field"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="input-label">Email</label>
            </div>
            <div className="input">
              <input
                type="password"
                required
                value={password}
                className="input-field"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="input-label">Password</label>
            </div>
            <div className="action">
              <button type="submit" className="action-button">
                Login
              </button>
            </div>
          </form>
          <div className="card-info">
            <p>By signing up you are agreeing to our terms and Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { userLogin })(Login);

import "../App.css";
import { useState } from "react";
import { connect } from "react-redux";
import { userRegister, userLogin } from "../redux/actions";
import { Link } from "react-router-dom";

function Register({ userRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPass] = useState("");
  const [error, setError] = useState({ bool: false, message: "" });

  const submitHandler = async (e) => {
    e.preventDefault();
    if (name === "") {
      setError({ bool: true, message: "Name cannot be empty" });
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError({ bool: true, message: "Invalid Email" });
    } else if (password.length < 8) {
      setError({
        bool: true,
        message: "Password cannot be less 8 character",
      });
    } else if (confirmpassword !== password) {
      setError({
        bool: true,
        message: "Password did not match",
      });
    } else {
      await userRegister({ name, email, password });
    }
  };

  return (
    <div>
      <div className="container">
        <div className="card">
          <Link to="/login" className="button-84">
            Login
          </Link>
          <h2 style={{ textAlign: "center" }}>Register Page</h2>
          <form onSubmit={submitHandler} className="card-form">
            <div className="input">
              <input
                type="text"
                className="input-field"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="input-label">Full name</label>
            </div>
            <div className="input">
              <input
                type=""
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="input-label">Email</label>
            </div>
            <div className="input">
              <input
                type="password"
                value={password}
                className="input-field"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="input-label">Password</label>
            </div>
            <div className="input">
              <input
                type="password"
                className="input-field"
                value={confirmpassword}
                onChange={(e) => setConfirmPass(e.target.value)}
              />
              <label className="input-label">Confirm Password</label>
            </div>
            {error.bool && (
              <div
                style={{
                  color: "red",
                  marginBlock: "10px",
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                {error.message}
              </div>
            )}
            <div className="action"></div>
            <button type="submit" className="action-button">
              Register
            </button>
          </form>
          <div className="card-info">
            <p>By signing up you are agreeing to our terms and Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.User,
  };
};

export default connect(mapStateToProps, { userRegister, userLogin })(Register);

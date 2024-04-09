import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiService";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleLogin = async () => {
    const data = await postLogin(email, password);
    const isValidateEmail = validateEmail(email);

    if (!isValidateEmail) {
      toast.error("Invalid email");
      return;
    }
    if (!password || password === "") {
      toast.error("Invalid password");
      return;
    }
    if (data && +data.EC === 0) {
      toast.success(data.EM);
      navigate("/");
    }
    if (data && +data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  return (
    <div className="login-container">
      <div className="header">
        <span>Don't have an account yet ?</span>
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/register")}
        >
          Sign up
        </button>
      </div>
      <div className="title col-4 mx-auto">
        <svg viewBox="0 0 960 300">
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="80%" className="text-big">
              VAN PHU TIN.{" "}
            </text>
            <text textAnchor="middle" x="52%" y="80%" className="text-big">
              VAN PHU TIN.{" "}
            </text>
          </symbol>

          <g className="g-ants">
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
          </g>
        </svg>
      </div>
      <div className="welcome col-4 mx-auto">Hello, who's this ?</div>
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <span>Forgot password ? </span>
        <div>
          <button className="btn-submit" onClick={() => handleLogin()}>
            Login to Van Phu Tin
          </button>
        </div>
        <div className="text-center">
          <span className="back-home" onClick={() => navigate("/")}>
            {" "}
            &#60;&#60; Go to Home Page
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
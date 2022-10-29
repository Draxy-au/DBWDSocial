import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

import "./login.scss";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, login } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  });

  const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    login();
  };

  const handleRegisterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/register");
  };

  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
          <h1>Social Book.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            laborum vitae sequi pariatur consectetur, nulla ullam omnis
            suscipit.{" "}
          </p>
          <span>Don't have an account?</span>
          <button onClick={handleRegisterClick}>Register</button>
        </div>
        <div className='right'>
          <h1>Login</h1>
          <form action=''>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Username...'
            />
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password...'
            />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

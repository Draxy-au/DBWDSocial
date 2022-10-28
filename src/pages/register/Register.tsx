import { useNavigate } from "react-router-dom";

import "./register.scss";

const Register = () => {
  const navigate = useNavigate();


  const handleLoginClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/login")
  }

  return (
    <div className='register'>
      <div className="card">
        
        <div className="left">
          <h1>Social Book.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laborum vitae sequi pariatur consectetur, nulla ullam omnis suscipit.</p>
          <span>Already have an account?</span>
          <button onClick={handleLoginClick}>Login</button>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" name="username" id="username" placeholder="Username..." />
            <input type="email" name="email" id="email" placeholder="Email..." />
            <input type="password" name="password" id="password" placeholder="Password..." />
            <input type="text" name="fullName" id="fullName" placeholder="Full Name..." />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
import "./login.scss";

const Login = () => {
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laborum vitae sequi pariatur consectetur, nulla ullam omnis suscipit. </p>
          <span>Don't have an account?</span>
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" name="username" id="username" placeholder="Username..." />
            <input type="password" name="password" id="password" placeholder="Password..." />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
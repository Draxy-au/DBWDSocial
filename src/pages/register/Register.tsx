import "./register.scss";

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input type="text" name="username" id="username" placeholder="Username..." />
            <input type="email" name="email" id="email" placeholder="Email..." />
            <input type="password" name="password" id="password" placeholder="Password..." />
            <input type="text" name="fullName" id="fullName" placeholder="Full Name..." />
            <button>Register</button>
          </form>
        </div>
        <div className="left">
          <h1>DBWD Social</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nisi provident labore ex veritatis?</p>
          <p>Already have an account?</p>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUser, reset } from '../features/authSlice';
import './Login.css';
import log from '../images/log.svg';
import register from '../images/register.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUpMode, setSignUpMode] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth);

  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  const handleSignInClick = () => {
    setSignUpMode(false);
  };

  useEffect(() => {
    if (user || isSuccess) {
      navigate('/dashboard');
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <section>
      <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form
              onSubmit={Auth}
              className="sign-in-form">
              {isError && <p className="has-text-centered">{message}</p>}
              <h2 className="title">Login</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input
                type="submit"
                value={isLoading ? 'Loading...' : 'Login'}
                className="btn solid"
              />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a
                  href="https://www.facebook.com/"
                  className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com/"
                  className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.google.com/"
                  className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a
                  href="https://www.linkedin.com/"
                  className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <div style={{ display: 'flex', marginTop: '30px', textAlign: 'center' }}>
                <div style={{ marginRight: '20px' }}>
                  <p style={{ color: 'red' }}>Silahkan Login Akun Admin</p>
                  <p>Username : admin@gmail.com</p>
                  <p>Password : 123456</p>
                </div>
                <div>
                  <p style={{ color: 'red' }}>Silahkan Login Akun User</p>
                  <p>Username : user@gmail.com</p>
                  <p>Password : 123456</p>
                </div>
              </div>
            </form>
            <form
              action=""
              className="sign-up-form">
              <h2 className="title">Register</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                />
              </div>
              <input
                onClick={(e) => {
                  e.preventDefault();
                }}
                type="submit"
                className="btn"
                value="Register"
              />
              <p className="social-text">Or Register with social platforms</p>
              <div className="social-media">
                <a
                  href="https://www.facebook.com/"
                  className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com/"
                  className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.google.com/"
                  className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a
                  href="https://www.linkedin.com/"
                  className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3 className="h3-login">New here ?</h3>
              <p className="white-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={handleSignUpClick}>
                Register
              </button>
            </div>
            <img
              src={log}
              className="image"
              alt=""
            />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p className="white-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={handleSignInClick}>
                Login
              </button>
            </div>
            <img
              src={register}
              className="image"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

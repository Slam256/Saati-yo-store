import '../css/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { authenticate } from '../config/firebase';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    authenticate
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/');
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    authenticate
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate('/');
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src={process.env.PUBLIC_URL + '/img/saati-logo-auth.png'}
          alt="saati-yo logo"
        />
      </Link>
      <div className="login__container">
        <h2>Sign-in</h2>

        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={signIn}
            type="submit"
            className="login__signInButton"
          >
            Sign-In
          </button>
        </form>

        <p>
          By continuing, you agree to <strong>SAATIYO</strong>'s Conditions of
          Use and Privacy Notice.
        </p>

        <button
          onClick={register}
          type="submit"
          className="login__registerButton"
        >
          Create your SAATIYO account
        </button>
      </div>
    </div>
  );
}
export default Login;

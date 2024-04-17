import { useState } from 'react'
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';

function Login() {
    const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="mx-auto  flex justify-center my-24">
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className='text-lg font-poppins font-semibold'>Welcome Back!</h1>
              <p className='font-franklin text-base mb-3'>
                To keep connected with us please login with your personal info
              </p>
              <button
                className='bg-transparent border-white border-2 focus:outline-none  rounded-3xl  text-white font-poppins text-sm font-bold px-12 py-3 uppercase '
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className='text-lg font-poppins font-semibold'>Hello, Friend!</h1>
              <p className='font-franklin text-base mb-3'>Enter your personal details and start journey with us</p>
              <button
                className='bg-transparent border-white border-2 focus:outline-none rounded-3xl   text-white font-poppins text-sm font-bold px-12 py-3 uppercase'
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
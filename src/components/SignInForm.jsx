import React from 'react'

function SignInForm() {
    const [state, setState] = React.useState({
        email: "",
        password: ""
      });
      const handleChange = evt => {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
      };
    
      const handleOnSubmit = evt => {
        evt.preventDefault();
    
        const { email, password } = state;
        alert(`You are login with email: ${email} and password: ${password}`);
    
        for (const key in state) {
          setState({
            ...state,
            [key]: ""
          });
        }
      };
    
      return (
        <div className="form-container sign-in-container">
          <form onSubmit={handleOnSubmit}>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g" />
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <span>or use your account</span>
            <input
            className='bg-[#eee] border-none px-3 py-3 my-2 w-full'
              type="email"
              placeholder="Email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
            <input
            className='bg-[#eee] border-none px-3 py-3 my-2 w-full'
              type="password"
              name="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
            />
            <a href="#">Forgot your password?</a>
            <button className='rounded-[20px] border-[#2596BE] bg-[#2596BE] text-white font-poppins text-sm font-bold px-12 py-3 uppercase'>Sign In</button>
          </form>
        </div>
      );
}

export default SignInForm
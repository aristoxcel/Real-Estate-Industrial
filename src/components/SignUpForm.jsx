import React from 'react'

function SignUpForm() {
    const [state, setState] = React.useState({
        name: "",
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
    
        const { name, email, password } = state;
        alert(
          `You are sign up with name: ${name} email: ${email} and password: ${password}`
        );
    
        for (const key in state) {
          setState({
            ...state,
            [key]: ""
          });
        }
      };
    
      return (
        <div className="form-container sign-up-container">
          <form onSubmit={handleOnSubmit}>
            <h1>Create Account</h1>
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
            <span>or use your email for registration</span>
            <input className='bg-[#eee] border-none px-3 py-3 my-2 w-full'
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
            className='bg-[#eee] border-none px-3 py-3 my-2 w-full'
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <input
            className='bg-[#eee] border-none px-3 py-3 my-2 w-full'
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <button className='rounded-[20px] border-[#2596BE] bg-[#2596BE] text-white font-poppins text-sm font-bold px-12 py-3 uppercase'>Sign Up</button>
          </form>
        </div>
      );
}

export default SignUpForm
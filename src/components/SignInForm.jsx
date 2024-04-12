import { useForm } from "react-hook-form"

function SignInForm() {
    // const [state, setState] = React.useState({
    //     email: "",
    //     password: ""
    //   });
    //   const handleChange = evt => {
    //     const value = evt.target.value;
    //     setState({
    //       ...state,
    //       [evt.target.name]: value
    //     });
    //   };
    
    //   const handleOnSubmit = evt => {
    //     evt.preventDefault();
    
    //     const { email, password } = state;
    //     alert(`You are login with email: ${email} and password: ${password}`);
    
    //     for (const key in state) {
    //       setState({
    //         ...state,
    //         [key]: ""
    //       });
    //     }
    //   };
    
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm()

    const loginData = (data) => {
      console.log(data);
      reset()
    }
    console.log(errors);

      return (
        <div className="form-container sign-in-container">

          <form onSubmit={handleSubmit(loginData)}>
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
            {...register("email", {required:
              {value:true,
              message:"This is required"} , pattern: /^\S+@\S+$/i})} 
            aria-invalid={errors.email ? "true" : "false"} />
           {errors.email && <p className="text-red-500 font-semibold">{errors.email.message}</p>}
  

            <input className='bg-[#eee] border-none px-3 py-3 my-2 w-full' 
            type="password" 
            placeholder="Password" 
            {...register("password", 
            {required: {
              value:true,
              message:"This is required"},
            
            minLength:{
              value:6,
              message:"Password at least 6 character"
            },
            pattern:{
              value:/^(?=.*[a-z])(?=.*[A-Z]).+$/,
              message:"Password at least one word Uppercase or Lowercase"
            }}
          )} 
            aria-invalid={errors.Password ? "true" : "false"}/>
            {errors.password  && <p className="text-red-500 font-semibold">{errors.password.message}</p>}


            <a href="#">Forgot your password?</a>
            <input className='rounded-[20px] border-[#2596BE] bg-[#2596BE] text-white font-poppins text-sm font-bold px-12 py-3 uppercase' type="submit" />
          </form>
        </div>
      );
}

export default SignInForm
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'
import { AuthContext } from "../Context"
import { FaEye, FaEyeSlash } from "react-icons/fa"

function SignUpForm() {
  const [success, setSuccess]=useState(null)
  const [error, setError]=useState(null)
  const [show, setShow]=useState(false)
  const {signUp, updateUser }= useContext(AuthContext)

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors }, 
    } = useForm()

    const signUpData = (data) => {
      signUp(data.email, data.password)
      .then(()=>{
        updateUser(data.name, data.photo)
        .then(()=>{
          setSuccess('User Registered Successfully')
        })      
      })
      .catch(error=>setError(error.message))
      Swal.fire({
        icon: "success",
        title: "You Registered successfully. Please Sign In !",
        showConfirmButton: false,
        timer: 1500
      });
      reset()
    }
    console.log(errors);
      return (
        <div className="form-container sign-up-container">
          <form className="tForm" onSubmit={handleSubmit(signUpData)}>
            <h1 className="text-lg font-poppins font-semibold opacity-70 mb-3">Create Account</h1>
            {/* <div className="social-container">
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
            <span>or use your email for registration</span> */}
            
            <input 
            className='bg-[#eee] border-none px-3 py-3 my-2 w-full' 
            type="text" 
            placeholder="Name" 
            {...register("name", {required:
              {value:true,
              message:"This is required"}})} 
            aria-invalid={errors.name ? "true" : "false"} />
           {errors.name && <p className="text-red-500 font-semibold">{errors.name.message}</p>}

           <input 
            className='bg-[#eee] border-none px-3 py-3 my-2 w-full' 
            type="email" 
            placeholder="Email" 
            {...register("email", {required:
              {value:true,
              message:"This is required"} , pattern: /^\S+@\S+$/i})} 
            aria-invalid={errors.email ? "true" : "false"} />
           {errors.email && <p className="text-red-500 font-semibold">{errors.email.message}</p>}

           <input 
            className='bg-[#eee] border-none px-3 py-3 my-2 w-full' 
            type="url" 
            placeholder="Photo Url" 
            {...register("photo", {required:
              {value:true,
              message:"This is required"}})} 
            aria-invalid={errors.photo ? "true" : "false"} />
           {errors.photo && <p className="text-red-500 font-semibold">{errors.photo.message}</p>}

          <div className="w-full relative">
          <input className='bg-[#eee] border-none px-3 py-3 my-2 w-full ' 
            type={show? "text":"password"} 
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
            aria-invalid={errors.Password ? "true" : "false"}/><span onClick={()=>setShow(!show)} className="absolute top-6 right-3">{show?<FaEyeSlash/>:<FaEye/>}</span>
            {errors.password  && <p className="text-red-500 font-semibold">{errors.password.message}</p>}
          </div>

        
            
           <input className='rounded-[20px] border-[#2596BE] bg-[#2596BE] text-white font-poppins text-sm font-bold px-12 py-3 uppercase' type="submit" />
          </form>
          <div>
                <p className="text-green-400 font-bold">{success}</p>
                <p className="text-red-400 font-bold">{error}</p>
          </div>
        </div>
      );
}

export default SignUpForm
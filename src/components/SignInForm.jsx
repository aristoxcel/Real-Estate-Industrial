import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../Context";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function SignInForm() {
  const navigate = useNavigate()
  const [success, setSuccess]= useState(null)
  const [error, setError]= useState(null)
  const location = useLocation()
  const from = location?.state || '/';
  console.log(location);
  const { signIn, signInWithGoogle, signInWithGithub, signInWithFacebook } = useContext(AuthContext)

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm()


    // login Submit function
    const loginData = (data) => {
      setError('')
      setSuccess('')
      console.log(data);
      signIn(data.email, data.password)
      .then(()=>{
          setSuccess('you logged in successfully')
          Swal.fire({
            icon: "success",
            title: "you logged in successfully",
            showConfirmButton: false,
            timer: 1500
          });
        navigate(from)
      })
      .catch(()=>setError('Email or Password is not matching'))
      console.log(data);
      reset()
    }
    console.log(errors);


    // google Sign function
    const handleSignInGoogle=()=>{
      signInWithGoogle()
      .then(()=>{
        setSuccess('you logged in successfully')
        Swal.fire({
          icon: "success",
          title: "you logged in successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from)
      })
      .catch(error=>console.log(error.message))
    }

        // Github Sign function
        const handleSignInGithub=()=>{
          signInWithGithub()
          .then(()=>{
            setSuccess('you logged in successfully')
            Swal.fire({
              icon: "success",
              title: "you logged in successfully",
              showConfirmButton: false,
              timer: 1500
            });
            navigate(from)
          })
          .catch(error=>console.log(error.message))
        }

     // Facebook Sign function
    //  const handleSignInFacebook=()=>{
    //   signInWithFacebook()
    //   .then(()=>{
    //     setSuccess('you logged in successfully')
    //     navigate(from)
    //   })
    //   .catch(error=>console.log(error.message))
    // }

      return (
        <div className="form-container sign-in-container">

          <form className="tForm" onSubmit={handleSubmit(loginData)}>
            <h1 data-aos="zoom-in" data-aos-duration="500" data-aos-easing="linear" className="text-lg font-poppins font-semibold opacity-70">Sign in</h1>
            
            <div className="social-container " >
              <a data-aos="fade-up-right" data-aos-delay="200" data-aos-easing="linear" href="#" onClick={handleSignInGoogle} className="social hover:ring-offset-2 hover:ring-2">
              <FcGoogle className="text-3xl "/>
              </a>
              {/* <a href="#" onClick={handleSignInFacebook} className="social">
              <FaFacebook className="text-3xl" />
              </a> */}
              <a data-aos="fade-up-left" data-aos-delay="200" data-aos-easing="linear" href="#" onClick={handleSignInGithub} className="social hover:ring-offset-2 hover:ring-2">
              <FaGithub className="text-3xl"/>
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
            <h2 className="text-green-500">{success}</h2>
            <h2 className="text-red-500">{error}</h2>
            <input className='rounded-[20px] border-[#2596BE] bg-[#2596BE] text-white font-poppins text-sm font-bold px-12 py-3 uppercase' type="submit" />
          </form>
        </div>
      );
}

export default SignInForm
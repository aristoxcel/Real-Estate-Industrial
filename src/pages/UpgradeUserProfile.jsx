import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../Context";
import HeadBar from "../components/HeadBar";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const UpgradeUserProfile = () => {
  const navigate = useNavigate()
const {user}=useContext(AuthContext)
  const handleUpdateProfile =(e)=>{
      e.preventDefault();
      const name= e.target.name.value;
      const photo = e.target.photo.value
      console.log(name, photo);
      updateProfile(user, {
        displayName:name,
        photoURL:photo
      })
      .then(()=>{
        Swal.fire({
          icon: "success",
          title: "Your profile has been updated",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/userprofile')
      })
      .catch()
  }

  return (
    <div>
      <HeadBar >Upgrade Page</HeadBar>
      <h1 className="text-xl font-franklin font-bold text-[#2596BE] mt-4 mx-auto text-center">You can change your name and PhotoUrl</h1>
     <form onSubmit={handleUpdateProfile} className="border-2 border-teal-800 shadow-2xl rounded-2xl my-8 py-8">
              <div className="form-control lg:w-2/5 w-full">
                <label className="label">
                  <span className="label-text font-semibold">Name -</span>
                </label>
                <input
                defaultValue={user?.displayName}
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered "
                  required
                  
                />
              </div>
              <div className="form-control lg:w-2/5 w-full">
                <label className="label">
                  <span className="label-text font-semibold">Photo Url</span>
                </label>
                <input
                defaultValue={user?.photoURL}
                  type="text"
                  name="photo"
                  placeholder="Photo URL -"
                  className="input input-bordered "
                  required
                />
               
              </div>
              <div className="form-control mt-6 w-full lg:w-2/5">
                {/* <input type="submit" className="px-3 font-poppins  py-2 bg-[#2596BE] hover:bg-gradient-to-r hover:from-[#2596be] hover:to-[#62b4d2] hover:ring-2 hover:ring-offset-2 hover:ring-[#62b4d2] transition-all ease-out duration-300 font-semibold text-xl text-white rounded w-full" value="Update" /> */}
              <button type="submit" className="px-3 font-poppins  py-2 bg-[#2596BE] hover:bg-gradient-to-r hover:from-[#2596be] hover:to-[#62b4d2] hover:ring-2 hover:ring-offset-2 hover:ring-[#62b4d2] transition-all ease-out duration-300 font-semibold text-xl text-white rounded-xl w-full" value="Update">Update your info</button>
              </div>
            </form>
    </div>
  );
};

export default UpgradeUserProfile;

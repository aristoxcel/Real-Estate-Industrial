import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../Context";



const UpgradeUserProfile = () => {
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
      .then()
      .catch()
  }

  return (
    <div>
     <form onSubmit={handleUpdateProfile} className="border-2 border-red-500">
              <div className="form-control lg:w-2/5 w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                defaultValue={user?.displayName}
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control lg:w-2/5 w-full">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                defaultValue={user?.photoURL}
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
               
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="Update" />
               
              </div>
            </form>
    </div>
  );
};

export default UpgradeUserProfile;

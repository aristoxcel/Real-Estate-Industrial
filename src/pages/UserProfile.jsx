import { useContext } from "react";
import { AuthContext } from "../Context";
import HeadBar from "../components/HeadBar";

function UserProfile() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <HeadBar>Profile Page</HeadBar>
      <div className="card w-1/2 bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
         <h1 className="text-3xl font-bold">Name: {user?.displayName}</h1>
         <h1 className="text-3xl font-bold break-all">Photo Url: {user?.photoURL}</h1>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

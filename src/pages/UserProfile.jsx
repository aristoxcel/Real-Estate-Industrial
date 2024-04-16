import { useContext } from "react";
import { AuthContext } from "../Context";
import HeadBar from "../components/HeadBar";

function UserProfile() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <HeadBar>Profile Page</HeadBar>
     <div>
      <div className="lg:w-4/5 mx-auto text-center my-5">
        <h1 className="text-3xl md:text-5xl font-franklin font-bold text-pink-500 pb-3">Welcome</h1>
        <h2 className="text-3xl md:text-5xl font-franklin font-bold text-teal-900"><span className="text-black opacity-70">Mr./Mrs.</span> {user?.displayName}</h2>
      </div>
      <div className=" lg:w-4/5 mx-auto grid md:grid-cols-3 my-24 shadow-2xl rounded-xl gap-5">
        <div className="col-span-1 flex justify-center items-center text-center bg-no-repeat bg-[url('logo.png')] bg-center">
        <img src={user?.photoURL || "logo.png"} alt="" className="w-1/2 object-contain rounded-full ring-4 ring-offset-8"/>
        </div>

        {/* right side */}
        <div className=" bg-base-100 mx-8 md:col-span-2 col-span-1">
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <caption className=" caption-top text-3xl font-bold underline text-[#2596BE]">
    Your Profile Information
  </caption>
    
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td className="text-2xl font-bold">Name:</td>
        <td className="text-2xl font-bold">{user?.displayName}</td>
      </tr>
      {/* row 2 */}
      <tr className="hover">
        <th>2</th>
        <td className="text-2xl font-bold">Email:</td>
        <td className="text-2xl font-bold"><a className="text-sky-800" href="">{user?.email}</a></td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td className="text-2xl font-bold ">Photo Url:</td>
        <td><span className="text-base opacity-60 break-all">{user?.photoURL}</span></td>
      </tr>
    </tbody>
  </table>
</div>
      
      </div>
      </div>
     
     </div>
    </div>
  );
}

export default UserProfile;

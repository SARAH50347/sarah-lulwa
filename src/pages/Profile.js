import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "../api/auth";

import { useParams } from "react-router-dom";
import { getUserInfo } from "../api/auth";
import Nav from "../components/Nav";
import { getToken } from "../api/storage";
const Profile = () => {
  // const { user } = useAuth(); // Get logged-in user info
  // const { data: profile } = useQuery(["userProfile"], getMyProfile, {
  //   enabled: !!user, // Only run query if user is logged in
  // });
  const { user } = getToken(); // Retrieve user info from context
  const {
    data: profile,
    error,
    isLoading,
  } = useQuery(["userProfile"], getMyProfile, {
    enabled: !!user, // Only run if user is logged in
  });
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  if (error) return <div>Error fetching profile: {error.message}</div>;

  return (
    <>
      <Nav />
      <div className="bg-[#F9E3BE] w-screen h-[100vh] flex justify-center items-center">
        <div className="border border-black rounded-md w-[70%] h-[70%] overflow-hidden flex flex-col md:flex-row p-5">
          <div className="h-full w-full md:w-[35%]">
            <img
              src={profile.image}
              alt={profile.username}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
            <h1>Profile</h1>

            <h2>Username: {user.username}</h2>
            <h2>Balance: ${user.balance}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

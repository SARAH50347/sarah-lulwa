import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "../api/auth";
import Nav from "../components/Nav";
const Profile = () => {
  // const { user } = useAuth(); // Get logged-in user info
  // const { data: profile } = useQuery(["userProfile"], getMyProfile, {
  //   enabled: !!user, // Only run query if user is logged in
  // });

  const {
    data: userProfile,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: getMyProfile,
  });
  if (isLoading) {
    return <h1>loading...</h1>;
  }

  // return (
  //   <>
  //     <Nav />
  //   </>
  // );

  // if (error) return <div>Error fetching profile: {error.message}</div>;

  return (
    <>
      <Nav />
      <div className="bg-[#B1A8D5] min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
        <div className=" px-6 py-8 bg-[#7D6EA9] rounded-md shadow-lg m-20 flex items-center justify-center">
          <div className="h-full w-full md:w-[35%]">
            <img
              src={userProfile.image}
              alt={userProfile.username}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
            <h1>Profile</h1>

            <h2>Username: {userProfile.username}</h2>
            <h2>Balance: ${userProfile.balance}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

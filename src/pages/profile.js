import React, { useState, useEffect } from "react";
import Loading from "../Component/Loading";
import UserProfile from "../Component/userProfile";
import { setToken, getToken } from "../../src/Component/token";

import "../Component/userProfile.css";

const Profile = () => {
  const [loading, setIsLoading] = useState();
  const [userFound, setUserFound] = useState();
  const [userData, setUserData] = useState();
  const token = getToken();
  const getProfile = async () => {
    setIsLoading(true);
    //console.log("called");
    console.log("JWT ", token);
    try {
      const response = await fetch(
        "https://helping-backend.vercel.app/api/profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      const responseData = await response.json();
      setToken(responseData.data.token);

      if (response.ok) {
        setUserFound(true);
        console.log("From Profile ", responseData.data);
        setUserData(responseData.data);
      } else {
        console.log("Error");
      }
    } catch {
      console.log("oops");
    }
    setIsLoading(false);
  };

  function App() {
    useEffect(() => {
      getProfile();
    }, []);
  }
  App();

  console.log(userData);

  return (
    <div>
      {loading && <Loading />}
      {!loading && userFound && <UserProfile data={userData} />}
    </div>
  );
};

export default Profile;

import React, { useState, useEffect } from "react";
import Home from "./pages/home";
import Services from "./pages/services";
import Signup from "./pages/signup";
//import AddServices from './pages/addServices'
import DemoLogin from "./pages/DemoLogin";
import Users from "./pages/users";
import Taskbar from "./Component/taskbar";
import PoliceStations from "./pages/policeStations";
import FireServices from "./pages/fireServices";
import GetService from "./pages/getService";
import Admins from "./pages/admins";
import Profile from "./pages/profile";
import NotFound from "./pages/notFound";
import Details from "./pages/details";
import SocialLogin from "./pages/socialLogin";
import MyServices from "./pages/myServices";
import Loading from "./Component/Loading";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Footer } from "./Component/Footer";
import AdminTaskbar from "./Component/adminTaskbar";
import GetServiceData from "./Component/getServiceData";
import adminData from "./Component/adminData";

const App = () => {
  const [loggedIn, setLoggedIn] = useState();
  const [isLoading, setIsLoading] = useState();
  const loginStatus = (x) => {
    setLoggedIn(x);
  };
  const token = localStorage.getItem("token");
  const loginCheck = async () => {
    setIsLoading(true);
    console.log("called");
    let t = token.replace('"', "");
    let t2 = t.replace('"', "");
    try {
      const response = await fetch(
        "https://helping-backend.vercel.app/api/logincheck/user",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + t2,
          },
        }
      );
      const responseData = await response.json();
      if (response.ok) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        console.log("Token Error");
      }
    } catch {
      console.log("Catch");
    }
    setIsLoading(false);
  };
  function App() {
    useEffect(() => {
      if (token) {
        loginCheck();
      }
    }, []);
  }
  App();

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/loading" exact>
            <Loading />
          </Route>
          <Route path="/social" exact>
            <Taskbar />
            <SocialLogin />
            <Footer />
          </Route>
          <Route path="/users" exact>
            {/* <Taskbar/> */}
            <AdminTaskbar />
            <Users />
            <Footer />
          </Route>
          <Route path="/profile" exact>
            <Taskbar />
            <Profile />
            <Footer />
          </Route>
          <Route path="/admin" exact>
            <Admins />
          </Route>
          <Route path="/checkStation" exact>
            <adminData />
          </Route>
          <Route path="/myservices" exact>
            <Taskbar />
            <MyServices login={loggedIn} />
            <Footer />
          </Route>
          <Route path="/help" exact>
            <Taskbar />
            <GetService />
            <Footer />
          </Route>
          {/* <Route path="/service">
        <GetServiceData/>
      </Route> */}
          <Route path="/" exact>
            <Taskbar />
            <Home />
            <Footer />
          </Route>
          <Route path="/police" exact>
            <Taskbar />
            <PoliceStations login={loggedIn} />
            <Footer />
          </Route>
          <Route path="/police/:id" exact>
            <Taskbar />
            <Details type="police" />
            <Footer />
          </Route>
          <Route path="/fire/:id" exact>
            <Taskbar />
            <Details type="fire" />
            <Footer />
          </Route>
          <Route path="/fire" exact>
            <Taskbar />
            <FireServices login={loggedIn} />
            <Footer />
          </Route>
          <Route path="/services" exact>
            <Services />
          </Route>
          <Route path="/login/user" exact>
            <DemoLogin loginStatus={loginStatus} />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/">
            <Taskbar />
            <NotFound />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;

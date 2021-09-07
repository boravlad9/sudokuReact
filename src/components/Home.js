import React from 'react';
import {
  useHistory
} from "react-router-dom";
import {apiLogout} from '../Services/LoginService';

function Home() {
  let logoutCall = () => {
      apiLogout().then(
        data => {
          localStorage.removeItem("email");
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          localStorage.removeItem("idUser");
          history.push("/login");
        }
      );
    }

  let contacteCall = () => {
    history.push("/contacte");
  }

  let history = useHistory();

  return (
    <div>
      <button onClick={logoutCall}>Logout</button>
      <button onClick={contacteCall}>Contacte</button>
    </div>
  );
}

export default Home;

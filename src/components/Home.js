import React from 'react';
import {
  useHistory
} from "react-router-dom";
import {ApiLogout} from '../Services/LoginService';
import {useApiRequest} from '../Services/useApiRequest';

function Home() {
  let logoutCall = () => {
      const headers = {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'security-token': 'test'};
      api.excuteRequest('post',"http://meetprep.beta.bitstone.eu/api/v1/logout", {}, {headers}).then(
        data => {
          localStorage.removeItem("email");
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          localStorage.removeItem("idUser");
          history.push("/login");
        }
      );
      /*
      ApiLogout().then(
        data => {
          localStorage.removeItem("email");
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          localStorage.removeItem("idUser");
          history.push("/login");
        }
      );*/
    }

  let contacteCall = () => {
    history.push("/contacte");
  }

  let history = useHistory();
  let api = useApiRequest();
  return (
    <div>
      <button onClick={logoutCall}>Logout</button>
      <button onClick={contacteCall}>Contacte</button>
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from 'react';
import {apiContacte} from '../Services/ContacteService';
import {useApiRequest} from '../Services/useApiRequest';

const renderTableData = (items) => {
  if (items === null)
    return null;
  return items.map((data) => {
   const {id, email, first_name, last_name} = data;
   return (
     <tr key={id}>
       <td>{first_name}</td>
       <td>{last_name}</td>
       <td>{email}</td>
     </tr>
  )
  });
}

function Contacte(){

  const [items, setItems] = useState(null);
  let api = useApiRequest();

  useEffect(() => {
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'security-token': 'test'};
    api.excuteRequest('get',"http://meetprep.beta.bitstone.eu/api/v1/contacts", {}, {headers}).then(
      data => {
        setItems(data.data.data.items)
      }
    );
  }, [api]);

  return (
    <div>
      <table id='students'>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
          </tr>
          {renderTableData(items)}
        </tbody>
      </table>
    </div>
  );

}

export default Contacte;

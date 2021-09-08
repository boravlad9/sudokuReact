import React, { useState, useEffect } from 'react';
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
    api.contacts({}).then(
      response => {
        setItems(response.data.data.items);
      }
    );
  }, []);

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

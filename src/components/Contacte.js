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


function Contacte(props){
  return (
    <div className="tableAndText">
      <table id='students'>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
          </tr>
          {renderTableData(props.allContacts)}
        </tbody>
      </table>
      {
        props.selected !== null &&
        <p>
          {props.selected.first_name} {props.selected.last_name} {props.selected.email}
        </p>
      }
    </div>
  );

}

export default Contacte;

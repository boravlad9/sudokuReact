import React, { useState, useEffect } from 'react';
import {useApiRequest} from '../Services/useApiRequest';

const renderTableData = (item) => {
  if (item === null)
    return null;
   return (
     <tr key={item.id}>
       <td>{item.first_name}</td>
       <td>{item.last_name}</td>
       <td>{item.email}</td>
     </tr>
  )
}

function Contacte(props){
  return (
    <div>
      <table id='students'>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
          </tr>
          {renderTableData(props.selected)}
        </tbody>
      </table>
    </div>
  );

}

export default Contacte;

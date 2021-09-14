import React, { useState, useEffect } from 'react';
import {useApiRequest} from '../Services/useApiRequest';
import { connect, useDispatch, useSelector} from 'react-redux'
import {GetContacte} from '../Actions/actions'

const renderTableData = (items) => {
  if (items === null || items === undefined)
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
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const selected = useSelector((state) => state.selected);


  useEffect(() => {
    dispatch(GetContacte());
  }, [dispatch]);

  return (
    <div className="tableAndText">
      <table id='students'>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
          </tr>
            {renderTableData(contacts)}
        </tbody>
      </table>
      {
        selected !== null && selected !== undefined &&
        <p>
          {selected.first_name} {selected.last_name} {selected.email}
        </p>
      }
    </div>
  );

}

export default Contacte;

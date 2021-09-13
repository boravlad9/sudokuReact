import React, {useState,useEffect} from "react";
import {useApiRequest} from '../Services/useApiRequest';
import { bindActionCreators } from 'redux'
import { connect, useDispatch, useSelector} from 'react-redux'
import {getContacte, setSelected} from '../Actions/actions'

function Header(props)  {
  const [selectedValue, setValue] = useState(null);

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const temp = [];
  const responseHandle = (contacts) => {
    if (contacts !== undefined)
    contacts.map ((item) => {
     const {id, email, first_name, last_name} = item;
       temp.push(<option key={id} value={id}>{first_name}</option>)
    })
  }

  responseHandle(contacts)

  useEffect(() => {
    dispatch(getContacte());
    responseHandle(contacts)
  }, [dispatch]);


  const handleChange = (event) => {
    for (let index = 0; index < contacts.length; index++){
      if (event.target.value == contacts[index].id)
      {
          dispatch(setSelected(contacts[index]));
          break;
      }
    }
  }
  return (
    <div className="header">
      <select onChange={handleChange} >
        {temp}
      </select>
    </div>
  );

}

export default Header;

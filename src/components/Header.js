import React, {useState,useEffect} from "react";
import {useApiRequest} from '../Services/useApiRequest';
import { bindActionCreators } from 'redux'
import { connect, useDispatch, useSelector} from 'react-redux'
import {getContacte, GET_CONTACTE} from '../Actions/actions'

function Header(props)  {
  const [selectedValue, setValue] = useState(null);

  let api = useApiRequest();
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
    /*api.contacts({}).then(
      response => {
          const temp = [];
          response.data.data.items.map((item) => {
           const {id, email, first_name, last_name} = item;
             temp.push(<option key={id} value={id}>{first_name}</option>)
          })
          setItems(temp);
          props.toExecute(response.data.data.items);
          setValue(response.data.data.items);
      }
    );*/
  }, [dispatch]);


  const handleChange = (event) => {
    /*
    for (let index = 0; index < selectedValue.length; index++){
      if (event.target.value == selectedValue[index].id)
      {
          props.valueSelected(selectedValue[index]);
          break;
      }
    }
  */
  }
  return (
    <div className="header">
      <select onChange={handleChange} >
        {temp}
      </select>
    </div>
  );

}

const mapStateToProps = (state) => ({
  contacts: state.contacts
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(getContacte, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);

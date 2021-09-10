import React, {useState,useEffect} from "react";
import {useApiRequest} from '../Services/useApiRequest';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {getContacte} from '../Actions/actions'

function Header(props)  {
  const [items, setItems] = useState(null);
  const [selectedValue, setValue] = useState(null);

  let api = useApiRequest();

  useEffect(() => {
    api.contacts({}).then(
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
    );
  }, []);

  const handleChange = (event) => {
    for (let index = 0; index < selectedValue.length; index++){
      if (event.target.value == selectedValue[index].id)
      {
          props.valueSelected(selectedValue[index]);
          break;
      }
    }
  }

  return (
    <div className="header">
      <select onChange={handleChange} >
        {items}
      </select>
    </div>
  );

}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(getContacte, dispatch)
})


export default connect(null, mapDispatchToProps)(Header);

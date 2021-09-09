import React, {useState,useEffect} from "react";
import {useApiRequest} from '../Services/useApiRequest';

export function Header(props){
  const [items, setItems] = useState(null);

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
      }
    );
  }, []);



  return (
    <div className="header">
      <select  >
        {items}
      </select>
    </div>
  );

}

import React from 'react';

import {apiContacte} from '../Services/ContacteService';

class Contacte extends React.Component {

  constructor(props){
    super(props);
    this.state = {items : []};
  }

  componentDidMount(){
    apiContacte().then(
      data => {
        this.setState({items : data.data.data.items});
      }
    );
  }

  renderTableData() {
   return this.state.items.map((data) => {
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

  render() {
    this.renderTableData();
    return (
      <div>
        <table id='students'>
          <tbody>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Email</td>
            </tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contacte;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import firebase from './firebase'
export default class Data extends Component {
  constructor(props) {
    super(props);

    this.state = {
      i: null,
      fields: []
    };
  }

  componentDidMount() {
  
    firebase.firestore().collection('data').onSnapshot(snap => {
      let fields = []
      snap.forEach(value => fields.push(value.data()))
      this.setState({ fields: fields })

    })
  }

  handledelete = (i) => {
    firebase.firestore().collection('data').where('name', '==', i).get().then(snap => {
      snap.forEach(value => {
        console.log(value.id)
        firebase.firestore().collection('data').doc(value.id).delete()
      })
    })
  }

  render() {
    return (
      <div className="main">
        <div className="Header1">
          <h1 className="datah">Venuemonk Dashboard</h1>
          <Link to="/form" className="link"><Fab color="red" title="Add a New Lead" aria-label="add">
            <AddIcon />
          </Fab></Link>
        </div>
        <div className="tablediv">
          <table>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Pin Code</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Income</th>
              <th>Delete Lead</th>
              <th>Update Lead</th>
            </tr>
            {this.state.fields
              ? this.state.fields.map((item, index) => {
                return (
                  <tr key={index} className="datarow">
                    <td className="data">{item.name}</td>
                    <td className="data">{item.address}</td>
                    <td className="data">{item.pincode}</td>
                    <td className="data">{item.age}</td>
                    <td className="data">{item.phone}</td>
                    <td className="data">{item.income}</td>
                    <td className="data1" onClick={() => this.handledelete(item.name)}><img src={require('./trash_can.png')} title="Delete Lead" />
                    </td>
                    <td>
                      <span onClick={() => this.props.history.push(`/data/${item.phone}`)}> <img src={require('./pencil.png')} title="Update a Lead" /></span>
                    </td>
                  </tr>
                );
              })
              : "no data found"}
          </table>
        </div>
      </div >
    );
  }
}

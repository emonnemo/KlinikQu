import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Fonticons from 'material-ui/FontIcon';
import { blue500, red500, blue50, green300 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import AddIcon from 'material-ui/svg-icons/content/add';

class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{margin : 'auto'}}>
        <div className="pageTitle" style={{margin : 'auto', fontSize : '20pt', fontWeight : 'bold', textAlign : 'center'}} >Pendaftaran Pemeriksaan</div>
        <br />
        <br />
        <RaisedButton className="addButton" color={blue50} style={{marginLeft : '30px'}}>
          <AddIcon color={green300} style={{marginTop : '5px'}}></AddIcon>
          <span style={{}}> Add</span>
        </RaisedButton>
        <br />
        <br />
        <br />
        <div className="warning" style={{background : red500, margin : 'auto', width : '300px', textAlign : 'center', fontSize : '12pt'}}>Anda belum mendaftar pemeriksaan</div>
      </div>
    );
  }
}

export default Register;

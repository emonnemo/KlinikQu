import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Fonticons from 'material-ui/FontIcon';
import { blue500, red500, blue50, green300, green400, green500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class Register extends Component {
  constructor(props) {
    super(props);
    window.view = forms['view_examination'];
    this.state = {
      view : forms['view_examination']
    };
    this.handleChange = this.handleChange.bind(this);
    window.handleChange = this.handleChange;
  }

  handleChange(currentMode) {
    this.setState({
      view: forms[currentMode],
    });
  }

  changeValue = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      this.state.view
    );
  }
}

var changePage = function(currMode) {
  window.handleChange(currMode);
}

var forms = {
  view_examination:
    <div style={{ margin: 'auto' }}>
      <br />
      <div className="pageTitle" style={{ margin: 'auto', fontSize: '20pt', fontWeight: 'bold', textAlign: 'center' }} >Pendaftaran Pemeriksaan</div>
      <br />
      <RaisedButton className="addButton float-left margin-left margin-top padding-bottom" onClick={() => changePage('register')} labelStyle={{fontWeight : 'bold', marginBottom : '10px'}} label="Add" labelPosition="after" icon={<AddIcon color={green400} style={{widht : '36', height : '36'}}/>}></RaisedButton>
      <br />
      <br />
      <br />
      <div className="warning" style={{ background: red500, margin: 'auto', width: '300px', textAlign: 'center', fontSize: '12pt' }}>Anda belum mendaftar pemeriksaan</div>
    </div>,
  register:
    <div style={{ margin: 'auto' }}>
      <br />
      <div className="pageTitle" style={{ margin: 'auto', fontSize: '20pt', fontWeight: 'bold', textAlign: 'center' }} >Pendaftaran Pemeriksaan</div>
      <br />
      <div className="section float-left margin-left" style={{fontSize: '16pt'}}>Pilih Jadwal</div> 
      <br />
      <br />
      <div className='margin-left margin-right'>
        <table>
          <tr>
            <td>Tanggal Periksa : </td>
            <td><DatePicker autoOk='true' container='dialog' hintText="Tanggal Record" /></td>
          </tr>
          <tr>
            <td>Dokter : </td>
            <DropDownMenu value={1} onChange={this.changeValue}>
              <MenuItem value={1} primaryText="Dokter A" />
              <MenuItem value={2} primaryText="Dokter B" />
              <MenuItem value={3} primaryText="Dokter C" />
            </DropDownMenu>
          </tr>
          <tr>
            <td>Keluhan Awal : </td>
            <td><TextField multiLine={true} rows='3'/></td>
          </tr>
        </table>
      </div>
      <br />
      <br />
      <RaisedButton label="Kembali" onClick={() => changePage('view_examination')} backgroundColor={red500} className="float-left margin-left margin-bottom"/>
      <RaisedButton label="Submit" onClick={() => changePage('view_examination')} backgroundColor={green500} className="float-right margin-right margin-bottom" />
    </div>,
  queue_info:
    <div>
      Informasi Antrian
    </div>
}

export default Register;

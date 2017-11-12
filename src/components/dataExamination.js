import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FontIcon from 'material-ui/FontIcon';
import '../App.css'
import { blue500, red500, blue50, green300, green400, green500 } from 'material-ui/styles/colors';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';

class Examination extends Component {
  constructor(props) {
    super(props);
  }

  edit() {
    alert('Anda akan mengedit jadwal pemeriksaan');
  }

  delete() {
    alert('Anda akan menghapus jadwal pemeriksaan');
  }

  render() {
    return (
      <div>
        <div style={{height : '100px' ,border : '2px solid green', borderCollapse : 'collapse'}}>
          <div>
            <span className="float-left margin-left">Tanggal Periksa : 30/10/2017</span>
            <span className="float-right margin-right" style={{ textDecoration: 'underline', color: 'blue' }} onClick={() => window.handleChange('queue_info1')}>Lihat Antrian</span>
          </div>
          <br />
          <br />
          <div>
            <span className="float-left margin-left">No. Antrian : 20</span>
            <span className="float-right margin-right margin-bottom"><DeleteIcon onClick={() => this.delete()} style={{ height: '40', width: '40', color : 'red'}} /></span>
            <span className="float-right margin-right margin-bottom"><EditIcon onClick={() => this.edit()} style={{ height: '40', width: '40', color: 'orange' }} /></span>
          </div>
          <br />
          <br />
          <div>
            <span className="float-left margin-left">Dokter : Dr. A</span>
          </div>
        </div>
        <div className="margin-top" style={{ height: '100px', border: '2px solid green', borderCollapse: 'collapse' }}>
          <div>
            <span className="float-left margin-left">Tanggal Periksa : 13/11/2017</span>
            <span className="float-right margin-right" style={{ textDecoration: 'underline', color: 'blue' }} onClick={() => window.handleChange('queue_info2')}>Lihat Antrian</span>
          </div>
          <br />
          <br />
          <div>
            <span className="float-left margin-left">No. Antrian : 10</span>
            <span className="float-right margin-right margin-bottom"><DeleteIcon onClick={() => this.delete()} style={{ height: '40', width: '40', color: 'red' }} /></span>
            <span className="float-right margin-right margin-bottom"><EditIcon onClick={() => this.edit()} style={{ height: '40', width: '40', color: 'orange' }} /></span>
          </div>
          <br />
          <br />
          <div>
            <span className="float-left margin-left">Dokter : Dr. B</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Examination;
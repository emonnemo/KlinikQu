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
import '../img/flaticon.css';
import '../App.css'
const drA = [
    {
        hari: 'Senin',
        jam: '08.00-12.00 , 15.00-17.00',
    },
    {
        hari: 'Selasa',
        jam: '08.00-12.00 , 15.00-17.00',
    },
    {
        hari: 'Rabu',
        jam: '12.00-17.00',
    }
    ];
    const drB = [
    {
        hari: 'Senin',
        jam: '13.00-15.00',
    
    },
    {
        hari: 'Selasa',
        jam: '15.00-18.00',
    },
    {
        hari: 'Kamis',
        jam: '08.00-12.00',
    }
    ];
    const drC = [
    {
        hari: 'Kamis',
        jam: '08.00-12.00',
    },
    {
        hari: 'Jumat',
        jam: '08.00-12.00',
    },
    {
        hari: 'Sabtu',
        jam: '08.00-12.00',
    }
    ];
    const drD = [
    {
        hari: 'Jumat',
        jam: '15.00-20.00',
    },
    {
        hari: 'Sabtu',
        jam: '15.00-20.00',
    }
    ];
    const drG = [
    {
        hari: 'Rabu',
        jam: '16.00-20.00',
    },
    {
        hari: 'Jumat',
        jam: '16.00-20.00',
    }
    ];
class ScheduleByDoctorTable extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    return (
      <Table
        fixedHeader={true}
        fixedFooter={true}
        onCellClick={this.editDelete}>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
          selectable={false}>
         </TableHeader>
        <TableBody
          displayRowCheckbox={false}
          stripedRows={true}
          selectable={false}>
          {this.props.name=="drA" &&
          drA.map( (row, index) => (
            <TableRow key={index+1}>
              <TableRowColumn className="schedule1">{index+1}</TableRowColumn>
              <TableRowColumn className="schedule2">{row.hari}</TableRowColumn>
              <TableRowColumn className="schedule3">{row.jam}</TableRowColumn>
              <TableRowColumn className="schedule4">+</TableRowColumn>
            </TableRow>
          ))}
          {this.props.name=="drB" &&
          drB.map( (row, index) => (
            <TableRow key={index+1}>
               <TableRowColumn className="schedule1">{index+1}</TableRowColumn>
               <TableRowColumn className="schedule2">{row.hari}</TableRowColumn>
               <TableRowColumn className="schedule3">{row.jam}</TableRowColumn>
               <TableRowColumn className="schedule4">+</TableRowColumn>
            </TableRow>
          ))}
          {this.props.name=="drC" &&
          drC.map( (row, index) => (
            <TableRow key={index+1}>
              <TableRowColumn className="schedule1">{index+1}</TableRowColumn>
              <TableRowColumn className="schedule2">{row.hari}</TableRowColumn>
              <TableRowColumn className="schedule3">{row.jam}</TableRowColumn>
              <TableRowColumn className="schedule4">+</TableRowColumn>
            </TableRow>
          ))}
          {this.props.name=="drD" &&
          drD.map( (row, index) => (
            <TableRow key={index+1}>
                <TableRowColumn className="schedule1">{index+1}</TableRowColumn>
                <TableRowColumn className="schedule2">{row.hari}</TableRowColumn>
                <TableRowColumn className="schedule3">{row.jam}</TableRowColumn>
                <TableRowColumn className="schedule4">+</TableRowColumn>
            </TableRow>
          ))}
          {this.props.name=="drG" &&
          drG.map( (row, index) => (
            <TableRow key={index+1}>
                <TableRowColumn className="schedule1">{index+1}</TableRowColumn>
                <TableRowColumn className="schedule2">{row.hari}</TableRowColumn>
                <TableRowColumn className="schedule3">{row.jam}</TableRowColumn>
                <TableRowColumn className="schedule4">+</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}
export default ScheduleByDoctorTable;
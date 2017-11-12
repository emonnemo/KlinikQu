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

const editIcon = <FontIcon className="flaticon-edit-pencil-button orange"></FontIcon>;
const deleteIcon = <FontIcon className="flaticon-trash red"></FontIcon>;

const seninData = [
{
    dokter: 'dr. Aaa aaaa aaaaaa',
    jam: '08.00-12.00 , 15.00-17.00',
},
{
    dokter: 'dr. Bbb bbbbb',
    jam: '13.00-15.00',
}
];
const selasaData = [
{
    dokter: 'dr. Aaa aaaa aaaaaa',
    jam: '08.00-12.00 , 15.00-17.00',
},
{
    dokter: 'dr. Bbb bbbbb',
    jam: '15.00-18.00',
}
];
const rabuData = [
{
    dokter: 'dr. Aaa aaaa aaaaaa',
    jam: '12.00-17.00',
},
{
    dokter: 'drg. Gggg gggg',
    jam: '16.00-20.00',
}
];
const kamisData = [
{
    dokter: 'dr. Bbb bbbbbb',
    jam: '08.00-12.00',
},
{
    dokter: 'dr. Cccc cccc',
    jam: '15.00-20.00',
}
];
const jumatData = [
{
    dokter: 'dr. Cccc cccc',
    jam: '08.00-12.00',
},
{
    dokter: 'drg. Gggg gggg',
    jam: '16.00-20.00',
},
{
    dokter: 'dr. Dddd ddddd',
    jam: '15.00-20.00',
}
];
const sabtuData = [
{
    dokter: 'dr. Ccccc cccc',
    jam: '08.00-12.00',
},
{
    dokter: 'dr. Dddd ddddd',
    jam: '15.00-20.00',
}
];


/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */



class ScheduleByDayTable extends Component {
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
          {this.props.name=="senin" &&
          seninData.map( (row, index) => (
            <TableRow key={index+1}>
              <TableRowColumn className="schedule1">{index+1}</TableRowColumn>
              <TableRowColumn className="schedule2">{row.dokter}</TableRowColumn>
              <TableRowColumn className="schedule3">{row.jam}</TableRowColumn>
              <TableRowColumn className="schedule4">+</TableRowColumn>
            </TableRow>
          ))}
          {this.props.name=="selasa" &&
          selasaData.map( (row, index) => (
            <TableRow key={index+1}>
               <TableRowColumn className="schedule1">{index+1}</TableRowColumn>
               <TableRowColumn className="schedule2">{row.dokter}</TableRowColumn>
               <TableRowColumn className="schedule3">{row.jam}</TableRowColumn>
               <TableRowColumn className="schedule4">+</TableRowColumn>
            </TableRow>
          ))}
          {this.props.name=="rabu" &&
          rabuData.map( (row, index) => (
            <TableRow key={index+1}>
              <TableRowColumn className="schedule1">{index+1}</TableRowColumn>
              <TableRowColumn className="schedule2">{row.dokter}</TableRowColumn>
              <TableRowColumn className="schedule3">{row.jam}</TableRowColumn>
              <TableRowColumn className="schedule4">+</TableRowColumn>
            </TableRow>
          ))}
          {this.props.name=="kamis" &&
          kamisData.map( (row, index) => (
            <TableRow key={index+1}>
                <TableRowColumn className="schedule1">{index+1}</TableRowColumn>
                <TableRowColumn className="schedule2">{row.dokter}</TableRowColumn>
                <TableRowColumn className="schedule3">{row.jam}</TableRowColumn>
                <TableRowColumn className="schedule4">+</TableRowColumn>
            </TableRow>
          ))}
          {this.props.name=="jumat" &&
          jumatData.map( (row, index) => (
            <TableRow key={index+1}>
                <TableRowColumn className="schedule1">{index+1}</TableRowColumn>
                <TableRowColumn className="schedule2">{row.dokter}</TableRowColumn>
                <TableRowColumn className="schedule3">{row.jam}</TableRowColumn>
                <TableRowColumn className="schedule4">+</TableRowColumn>
            </TableRow>
          ))}
          {this.props.name=="sabtu" &&
          sabtuData.map( (row, index) => (
            <TableRow key={index+1}>
                <TableRowColumn className="schedule1">{index+1}</TableRowColumn>
                <TableRowColumn className="schedule2">{row.dokter}</TableRowColumn>
                <TableRowColumn className="schedule3">{row.jam}</TableRowColumn>
                <TableRowColumn className="schedule4">+</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}
export default ScheduleByDayTable;


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
import AddIcon from 'material-ui/svg-icons/content/add-box'
import { blue500, red500, blue50, green300, green400, green500 } from 'material-ui/styles/colors';

const editIcon = <FontIcon className="flaticon-edit-pencil-button orange"></FontIcon>;
const deleteIcon = <FontIcon className="flaticon-trash red"></FontIcon>;

const seninData = [
{
    dokter: 'dr. Alice',
    jam: '08.00-12.00 , 15.00-17.00',
},
{
    dokter: 'dr. Bob',
    jam: '13.00-15.00',
}
];
const selasaData = [
{
    dokter: 'dr. Alice',
    jam: '08.00-12.00 , 15.00-17.00',
},
{
    dokter: 'dr. Bob',
    jam: '15.00-18.00',
}
];
const rabuData = [
{
    dokter: 'dr. Alice',
    jam: '12.00-17.00',
},
{
    dokter: 'drg. Grace',
    jam: '16.00-20.00',
}
];
const kamisData = [
{
    dokter: 'dr. Bob',
    jam: '08.00-12.00',
},
{
    dokter: 'dr. Carol',
    jam: '15.00-20.00',
}
];
const jumatData = [
{
    dokter: 'dr. Carol',
    jam: '08.00-12.00',
},
{
    dokter: 'drg. Grace',
    jam: '16.00-20.00',
},
{
    dokter: 'dr. Dave',
    jam: '15.00-20.00',
}
];
const sabtuData = [
{
    dokter: 'dr. Carol',
    jam: '08.00-12.00',
},
{
    dokter: 'dr. Dave',
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
              <TableRowColumn className="schedule4"><AddIcon color={green500} style={{widht : '50', height : '50'}}/></TableRowColumn>
            </TableRow>
          ))}
          {this.props.name=="selasa" &&
          selasaData.map( (row, index) => (
            <TableRow key={index+1}>
               <TableRowColumn className="schedule1">{index+1}</TableRowColumn>
               <TableRowColumn className="schedule2">{row.dokter}</TableRowColumn>
               <TableRowColumn className="schedule3">{row.jam}</TableRowColumn>
               <TableRowColumn className="schedule4"><AddIcon color={green500} style={{widht : '50', height : '50'}}/></TableRowColumn>
            </TableRow>
          ))}
          {this.props.name=="rabu" &&
          rabuData.map( (row, index) => (
            <TableRow key={index+1}>
              <TableRowColumn className="schedule1">{index+1}</TableRowColumn>
              <TableRowColumn className="schedule2">{row.dokter}</TableRowColumn>
              <TableRowColumn className="schedule3">{row.jam}</TableRowColumn>
              <TableRowColumn className="schedule4"><AddIcon color={green500} style={{widht : '50', height : '50'}}/></TableRowColumn>
            </TableRow>
          ))}
          {this.props.name=="kamis" &&
          kamisData.map( (row, index) => (
            <TableRow key={index+1}>
                <TableRowColumn className="schedule1">{index+1}</TableRowColumn>
                <TableRowColumn className="schedule2">{row.dokter}</TableRowColumn>
                <TableRowColumn className="schedule3">{row.jam}</TableRowColumn>
                <TableRowColumn className="schedule4"><AddIcon color={green500} style={{widht : '50', height : '50'}}/></TableRowColumn>
            </TableRow>
          ))}
          {this.props.name=="jumat" &&
          jumatData.map( (row, index) => (
            <TableRow key={index+1}>
                <TableRowColumn className="schedule1">{index+1}</TableRowColumn>
                <TableRowColumn className="schedule2">{row.dokter}</TableRowColumn>
                <TableRowColumn className="schedule3">{row.jam}</TableRowColumn>
                <TableRowColumn className="schedule4"><AddIcon color={green500} style={{widht : '50', height : '50'}}/></TableRowColumn>
            </TableRow>
          ))}
          {this.props.name=="sabtu" &&
          sabtuData.map( (row, index) => (
            <TableRow key={index+1}>
                <TableRowColumn className="schedule1">{index+1}</TableRowColumn>
                <TableRowColumn className="schedule2">{row.dokter}</TableRowColumn>
                <TableRowColumn className="schedule3">{row.jam}</TableRowColumn>
                <TableRowColumn className="schedule4"><AddIcon color={green500} style={{widht : '50', height : '50'}}/></TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}
export default ScheduleByDayTable;


import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FontIcon from 'material-ui/FontIcon';

const editIcon = <FontIcon className="flaticon-edit-pencil-button orange"></FontIcon>;
const deleteIcon = <FontIcon className="flaticon-trash red"></FontIcon>;

const tableData = [
{
  tanggal: '12/12/2017',
  penyakit: 'Demam',
},
{
  tanggal: '01/12/2017',
  penyakit: 'Batuk pilek',
},
{
  tanggal: '10/10/2017',
  penyakit: 'Pusing',
},
{
  tanggal: '07/08/2017',
  penyakit: 'Diare',
},
{
  tanggal: '29/06/2017',
  penyakit: 'Maag',
},
{
  tanggal: '04/06/2017',
  penyakit: 'Sakit perut',
},
];

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const TableExampleSimple = () => (
  <Table
    height={250}
    fixedHeader={true}
    fixedFooter={true}>
    <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}
      selectable={false}>
      <TableRow>
        <TableHeaderColumn className="first-column">No</TableHeaderColumn>
        <TableHeaderColumn className="second-column">Tanggal</TableHeaderColumn>
        <TableHeaderColumn className="third-column">Penyakit</TableHeaderColumn>
        <TableHeaderColumn className="fourth-column"></TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody
      displayRowCheckbox={false}
      stripedRows={true}
      selectable={false}>
      {tableData.map( (row, index) => (
        <TableRow key={index+1}>
          <TableRowColumn className="first-column">{index+1}</TableRowColumn>
          <TableRowColumn className="second-column">{row.tanggal}</TableRowColumn>
          <TableRowColumn className="third-column">{row.penyakit}</TableRowColumn>
          <TableRowColumn className="fourth-column">edit & delete</TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default TableExampleSimple;
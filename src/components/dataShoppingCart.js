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
import AddIcon from 'material-ui/svg-icons/content/add';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import { blue500, red500, blue50, green300, green400, green500 } from 'material-ui/styles/colors';
import '../img/flaticon.css';
import '../App.css'

const editIcon = <FontIcon className="flaticon-edit-pencil-button orange"></FontIcon>;
const deleteIcon = <FontIcon className="flaticon-trash red"></FontIcon>;

const tableData = [
{
  nama: 'Obat A',
  jumlah: '1',
  harga: 'Rp. 30,000',
},
{
  nama: 'Obat B',
  jumlah: '2',
  harga: 'Rp. 100,000',
},
];

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */

class TableShoppingCart extends Component {
  constructor(props) {
    super(props);
  }
  editDelete(row, column) {
    if (column == '4') {
      //eslint-disable-next-line
      if (confirm('Tambahkan jumlah obat ke dalam keranjang?')) {
        alert('Obat berhasil ditambahkan');
      }
    } else if (column == '5') {
      //eslint-disable-next-line
      if (confirm('Kurangi jumlah obat dalam keranjang?')) {
        alert('Obat berhasil dikurangkan');
      }
    }
  }
  render() {
    return (
      <Table
        height={250}
        fixedHeader={true}
        fixedFooter={true}
        onCellClick={this.editDelete}
        style={{ tableLayout: 'auto'}}>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
          selectable={false}>
          <TableRow>
            <TableHeaderColumn className="first-column">No</TableHeaderColumn>
            <TableHeaderColumn className="second-column">Nama Obat</TableHeaderColumn>
            <TableHeaderColumn className="third-column">Jumlah</TableHeaderColumn>
            <TableHeaderColumn className="fourth-column">Harga</TableHeaderColumn>
            <TableHeaderColumn className="fifth-column"></TableHeaderColumn>
            <TableHeaderColumn className="sixth-column"></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
          stripedRows={true}
          selectable={false}>
          {tableData.map( (row, index) => (
            <TableRow key={index+1}>
              <TableRowColumn className="first-column">{index+1}</TableRowColumn>
              <TableRowColumn className="second-column">{row.nama}</TableRowColumn>
              <TableRowColumn className="third-column">{row.jumlah}</TableRowColumn>
              <TableRowColumn className="fourth-column">{row.harga}</TableRowColumn>
              <TableRowColumn className="fifth-column"><AddIcon color={green500} style={{widht : '50', height : '50'}}/></TableRowColumn>
              <TableRowColumn className="sixth-column"><ClearIcon color={red500} style={{widht : '50', height : '50'}}/></TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default TableShoppingCart;
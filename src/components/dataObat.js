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

const tableData = [
{
  nama: 'Obat A',
  deskripsi: 'Meredakan Demam',
  syarat: 'Antibiotik - 3x Sehari, Setelah Makan',
  harga: 'Rp. 30,000',
},
{
  nama: 'Obat B',
  deskripsi: 'Meredakan Batuk dan Radang Tenggorokkan',
  syarat: 'Antibiotik - 3x Sehari, Sebelum Makan',
  harga: 'Rp. 50,000',
},
{
  nama: 'Obat C',
  deskripsi: 'Meredakan Pilek dan Sakit Kepala',
  syarat: 'Komplemen - 1x Sehari, Setelah Makan',
  harga: 'Rp. 65,000',
},
{
  nama: 'Obat D',
  deskripsi: 'Meningkatkan Asupan Vitamin C Keseharian',
  syarat: 'Suplemen - 1x Sehari, Setelah Makan',
  harga: 'Rp. 100,000',
},
{
  nama: 'Obat E',
  deskripsi: 'Meningkatkan Asupan Vitamin B1 Keseharian',
  syarat: 'Suplemen - 1x Sehari, Setelah Makan',
  harga: 'Rp. 90,000',
},
{
  nama: 'Obat F',
  deskripsi: 'Meningkatkan Asupan Vitamin B3 Keseharian',
  syarat: 'Suplemen - 1x Sehari, Setelah Makan',
  harga: 'Rp. 95,000',
},
{
  nama: 'Obat G',
  deskripsi: 'Meningkatkan Asupan Vitamin B6 Keseharian',
  syarat: 'Suplemen - 1x Sehari, Setelah Makan',
  harga: 'Rp. 80,000',
},
];

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */

class TableExample extends Component {
  constructor(props) {
    super(props);
  }
  editDelete(row, column) {
    if (column == '2') {
      //eslint-disable-next-line
      if (confirm('Tambahkan ke dalam keranjang?')) {
        alert('Obat berhasil ditambahkan');
      }
    } else if (column == '0') {
      if (row == '0') {
        alert('Obat A, \n Meredakan Demam, \n Antibiotik - 3x Sehari, Setelah Makan');
      } else if (row == '1') {
        alert('Obat B, \n Meredakan Batuk dan Radang Tenggorokkan, \n Antibiotik - 3x Sehari, Sebelum Makan');
      } else if (row == '2') {
        alert('Obat C, \n Meredakan Pilek dan Sakit Kepala, \n Komplemen - 1x Sehari, Setelah Makan');
      } else if (row == '3') {
        alert('Obat D, \n Meningkatkan Asupan Vitamin C Keseharian, \n Suplemen - 1x Sehari, Setelah Makan');
      } else if (row == '4') {
        alert('Obat E, \n Meningkatkan Asupan Vitamin B1 Keseharian, \n Suplemen - 1x Sehari, Setelah Makan');
      } else if (row == '5') {
        alert('Obat F, \n Meningkatkan Asupan Vitamin B3 Keseharian, \n Suplemen - 1x Sehari, Setelah Makan');
      } else if (row == '6') {
        alert('Obat G, \n Meningkatkan Asupan Vitamin B6 Keseharian, \n Suplemen - 1x Sehari, Setelah Makan');
      }
    }
  }
  render() {
    return (
      <Table
        height={250}
        width={200}
        fixedHeader={true}
        fixedFooter={true}
        onCellClick={this.editDelete}
        style={{ tableLayout: 'auto'}}>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
          selectable={false}>
          <TableRow>
            <TableHeaderColumn style={{width:5}} className="first-column">Obat</TableHeaderColumn>
            <TableHeaderColumn style={{width:5}} className="fourth-column">Harga</TableHeaderColumn>
            <TableHeaderColumn style={{width:5}} className="fifth-column"></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
          stripedRows={true}
          selectable={false}
          style={{tableLayout: 'auto'}}>
          {tableData.map( (row, index) => (
            <TableRow key={index+1}>
              <TableRowColumn style={{width:5}} className="first-column">{row.nama}</TableRowColumn>
              <TableRowColumn style={{width:5}} className="fourth-column">{row.harga}</TableRowColumn>
              <TableRowColumn style={{width:5}} className="fifth-column">+</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default TableExample;
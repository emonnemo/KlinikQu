import React, { Component } from 'react';
import '../App.css';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import BottomNavigationExampleSimple from './bottomnavbar.js';
import AppBarExampleIconButton from './appbar.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ScheduleByDayTable from './dataScheduleDay.js'
import ScheduleByDoctorTable from './dataScheduleDoctor.js'

import TabsExampleControlled from './tab.js'
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Filter from 'material-ui/svg-icons/content/filter-list';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';



const style = {
    margin: 12,
  };
  
  var parent = class Parent extends Component {
      constructor(props) {
          super(props);
      }
  }

  var tab = class ScheduleTab extends Component {
	constructor(props) {
		super(props);
		window.view = forms['byDay'];
		this.state={
			view: forms['byDay']
		}
		this.handleScheduleChange = this.handleScheduleChange.bind(this);
		window.handleScheduleChange = this.handleScheduleChange;
		this.editRecord = this.editRecord.bind(this);
		window.editRecord = this.editRecord;
	}

	getForm(currentMode) {
		return forms[currentMode];
	}

	editRecord(currentMode) {
		this.handleScheduleChange(currentMode);
	}

	handleScheduleChange(currentMode) {
		console.log('masuk ga bung');
		this.setState({
			view: forms[currentMode],
		});
	}

	render() {
		return (
			this.state.view
		);
	}
}

var func = function(currentMode) {
	// console.log(document.getElementById('test').parentElement.innerHTML);
	// console.log(tab.handleChange('addRecord'));
	window.handleScheduleChange(currentMode)
}



var forms = {
	byDoctor:	<div>
        <RaisedButton onClick={() => func('byDay')} className="float-left margin-top margin-left" label="Berdasarkan Hari" backgroundColor={greenA200}></RaisedButton>
				<RaisedButton onClick={() => func('byDoctor')} className="float-right margin-top margin-right" label="Berdasarkan Dokter" backgroundColor={greenA200}></RaisedButton>
        		<br/><br/>
                <div className="title"><br/>dr. Alice</div>
				<ScheduleByDoctorTable name ="dr. Alice"/>
                <div className="title"><br/>dr. Bob</div>
                <ScheduleByDoctorTable name ="dr. Bob"/>
                <div className="title"><br/>dr. Carol</div>
                <ScheduleByDoctorTable name ="dr. Carol"/>
                <div className="title"><br/>dr. Dave</div>
				<ScheduleByDoctorTable name ="dr. Dave"/>
                <div className="title"><br/>drg. Grace</div>
                <ScheduleByDoctorTable name ="drg. Grace"/>
            </div>,
    byDay: <div>
               <RaisedButton onClick={() => func('byDay')} className="float-left margin-top margin-left" label="Berdasarkan Hari" backgroundColor={greenA200}></RaisedButton>
			   <RaisedButton onClick={() => func('byDoctor')} className="float-right margin-top margin-right" label="Berdasarkan Dokter" backgroundColor={greenA200}></RaisedButton>
			   <br/><br/>
			   <div className="title"><br/>Senin</div>
			   <ScheduleByDayTable name ="senin"/>
			   <div className="title"><br/>Selasa</div>
			   <ScheduleByDayTable name ="selasa"/>
			   <div className="title"><br/>Rabu</div>
			   <ScheduleByDayTable name ="rabu"/>
			   <div className="title"><br/>Kamis</div>
			   <ScheduleByDayTable name ="kamis"/>
			   <div className="title"><br/>Jumat</div>
			   <ScheduleByDayTable name ="jumat"/>
			   <div className="title"><br/>Sabtu</div>
			   <ScheduleByDayTable name ="sabtu"/>
				</div>
}

export default tab;

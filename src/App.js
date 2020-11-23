import React, { Component } from 'react';
// import ThemeButton from './components/Other/ThemeButton'
// const ThemeContext = React.createContext('light');
import TestSetState from './basic/setState';

export default class App extends Component {
	state = {
		list: [],
		msg: true,
		asyncMsg: true
	}
	render() {
		console.log('render');
		return (
			<TestSetState msg="false"></TestSetState>
		)
	}

}


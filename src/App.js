import React, { Component } from 'react';
import { Button } from 'antd'
// import ThemeButton from './components/Other/ThemeButton'
// const ThemeContext = React.createContext('light');


export default class App extends Component {
	state = {
		list: [],
		msg: true,
		asyncMsg: true
	}
	render() {
		console.log('render');
		return (
			<>
				<div>{this.state.msg + ''}</div>
				<div>{this.state.asyncMsg + ''}</div>
				<Button onClick={() => this.handleClick()}>changeMsg</Button>
				<Button onClick={() => this.changeAsyncMsg()}>changeMsgAsync</Button>
			</>

			// <GetName
			// 	title="Welcome"
			// 	message="Thank you for visiting our spacecraft!" />
			//   <ThemeButton color='red'></ThemeButton>
			// <ThemeContext.Provider value="dark">
			// this.state.list.length && <div>{'null'}</div>
			// <ToolBar></ToolBar>
			// </ThemeContext.Provider>
		)
	}
	handleClick() {
		this.setState({
			msg: !this.state.msg
		}, () => { console.log(this.state, 'setState'); })
	}
	changeAsyncMsg() {
		setTimeout(() => {
			this.setState({
				msg: !this.state.asyncMsg
			}, () => { console.log(this.state, 'setStateAsync') })
		})
	}
	componentDidUpdate() {
		console.log(this.state, 'didUpdate');
	}
}

function GetName(props) {
	return (
		<WelcomeDialog>
			<div>{props.title}</div>
			<div>{props.message}</div>
		</WelcomeDialog>
	)

}


function WelcomeDialog(props) {
	return (
		<>
			{props.children}
		</>
	);
}

// function ToolBar() {
//   return (
//     <ThemeButton></ThemeButton>
//   )
// }

// class ThemeButton extends Component {
//   static contextType = ThemeContext.Consumer;
//   render() {
//       // console.log(this);
//       return (
//           <div>{this.context}</div>

//           // <Consumer>
//           //     {value => value}
//           // </Consumer>
//       )
//   }
//   componentDidMount() {
//       console.log(this.context);
//   }
// }

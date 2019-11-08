import React from 'react';

class Credit extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			code: '',
			name: '',
			address: ''
		};
	}

	updateCode(){
		//console.log(this.state.code)
		this.setState({
			code: this.code.value
		})
	}
	updateName(){
		this.setState({
			name: this.name.value
		})
	}
	updateAddress() {
		this.setState({
			address: this.address.value
		})
	}

	addBuilding() {
		//console.log('code: ', this.state.code, 'name', this.state.name)
		const val = {
			code: this.code.value,
			name: this.name.value,
			address: this.address.value
		}
		this.props.newBuilding(val)

	}

	render() {
		return (
			<div className = "Add">
			<label> Add a building </label> 
				<form>
					<input type = "text"
					ref = { (value) => {this.code = value}}
					placeholder = "Code"
					onChange={this.updateCode.bind(this)}
					/> 

					<input type = "text"
					ref = { (value) => {this.name = value}}
					placeholder = "Name"
					onChange={this.updateName.bind(this)}

					/> 

					<input type = "text"
					ref = { (value) => {this.address = value}}
					placeholder = "Address"
					onChange={this.updateAddress.bind(this)}					
					/> 
				</form> 

				<button
				onClick = {this.addBuilding.bind(this)}>
				Submit </button> 
			</div> 
		)
	}
}

export default Credit;

//just add the buidling to the end of the list 
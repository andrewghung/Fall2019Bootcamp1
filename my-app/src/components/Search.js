import React from 'react';
//react component that filters the contents of the list based on the user's input in the textbox 
//Capture the text that is typed into the textbox and store this value using the filterUpdate() function
//use the onChange listener function
//note: you will need to understand how to use ref values from form inputs 
class Search extends React.Component {
	filterUpdate() {
		//Here you will need to update the value of the filter with the value from the textbox

		const val = this.myValue.value
		this.props.filterUpdate(val)
		console.log(val)
	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		
return (
			<header> 
			<form> 
				<input type = "text"
				ref = { (value) => {this.myValue = value} }
				placeholder = "Type to Filter"
				onChange={this.filterUpdate.bind(this)}
				/>
			</form>
			</header> 
		)
	}
}

export default Search
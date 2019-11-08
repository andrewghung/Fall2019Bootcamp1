import React from 'react';
//react component that prints the building code and name to screen 

//create a filter on the buidling list constant that allows you to filter on the name of the building
//display only the buildings that meet the filter criteria
//create an onClick listener action that will allow you to click on a building name and capture the ID 
class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate} = this.props;

		const buildingList = data
			.filter(name => {
				return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			})

		.map(directory => {
			return (
				<tr key={directory.id}>
					<td>{directory.code} </td>
					<td 
						onClick= {() => selectedUpdate(directory.id)}
					> {directory.name}
					 </td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;

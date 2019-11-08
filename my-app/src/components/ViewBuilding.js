import React from 'react';
//react component that allows us to view additional listing details for the current selected building when a user clicks on a listing 
class ViewBuilding extends React.Component {
	render() {

			const {data, selectedBuilding} = this.props;
			var currentBuilding = data.filter((directory) => {
				return directory.id === selectedBuilding
			})[0]
			
			//console.log('selectedBuilding in ViewBuilding' , selectedBuilding)

//if a building is selected, else just display click to view more information 
if (currentBuilding) {
		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>

				<p> 
					<tr key = {currentBuilding.id}> 
						<tr> Name: {currentBuilding.code} </tr> 
						<tr> Address: {currentBuilding.address} </tr> 
						<tr> Latitude: {currentBuilding.coordinates && currentBuilding.coordinates.latitude} </tr> 
						<tr> Longitude: {currentBuilding.coordinates && currentBuilding.coordinates.longitude} </tr> 
					</tr>
				</p> 
			</div>
		);} 

		return(
			<div>
				<p>
					<i>Click on a name to view more information</i>


				</p>
			</div>
		);
	}
}
export default ViewBuilding;

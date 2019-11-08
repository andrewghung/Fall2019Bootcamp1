import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding'
import RemoveBuilding from './components/RemoveBuilding'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: this.props.data
    };
  }
/*
  prints directory listings
  has textbox for searching filtering results
  display box for pointing out more details about the selected building
  imports and uses several react components to implement this functionality. 
  filterUpdate() - set the state of filter
  selectUpdate() - set the state of selected building 
*/
  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value 
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    console.log('selectedBuilding id: ' , id)
    this.setState({
      selectedBuilding: id

    })
  }

  newBuilding(val) {
    this.setState({
      data: this.state.data.concat(val)
    })
  }


  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterText  = {this.state.filterText}
          filterUpdate = {this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText = {this.state.filterText} 
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                 data={this.props.data}
                selectedBuilding = {this.state.selectedBuilding}
               />
               <AddBuilding
                data = {this.props.data}
                addBuilding = {this.newBuilding.bind(this)} 
                /> 
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;

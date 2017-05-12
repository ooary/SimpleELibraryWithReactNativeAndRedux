import React,{Component} from 'react'
import {connect} from 'react-redux'
import {ListView} from 'react-native'
import ListItem from './ListItem'
class LibraryList extends Component {

	//get data from mapState
	componentWillMount() {
		
		//get data from state and store to dataSourcee listview	
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		})
		//makesure save data to dataStore
		this.dataSource = ds.cloneWithRows(this.props.dataLibraries)
	}
	
	renderRow(library){
		//make single Row for list Item
						//props = values	
		return <ListItem library={library}/>
	}

	render() {
		return ( 
				<ListView 
					style={{flex:1}}
					dataSource={this.dataSource}
					renderRow={this.renderRow}
				/>
			)
	}

}

//Global State == state
//mapStateToProps adalah jembatan dari state aplikasi ke props komponen
const mapStateToProps = state =>{
	
	return {
		//key :value 
		//key for connect:value from reducers
		// valuenya atau state.libraries itu dari reducer
		dataLibraries:state.libraries 
	}
	
}
//mapState == global state 
//connect() untuk menghubungkan komunikasi dari redux to react-native
export default connect(mapStateToProps) (LibraryList);
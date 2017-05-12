import React,{Component} from 'react'

import {CardSection,Button} from './common'

import {Text,
		TouchableWithoutFeedback,
		View,
		TouchableOpacity,
		LayoutAnimation,
		UIManager,
		Platform
	   } from 'react-native'
//import connect dari react-redux
//fungsi connect itu jendela untuk akses jembatan dari redux ke react
import {connect} from 'react-redux'
//import function dari Action
//import semua action dari file index js action sebagai parameter actions 
import * as actions from '../actions'

class ListItem extends Component {

	//recycle Method
	componentWillUpdate() {
		//this code to enable layoutAnimation on Android

		if (Platform.OS === 'android') {
    	  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
   		 }
		LayoutAnimation.spring();
	}
	renderDescription(){
		const {library,expanded} = this.props
		if (expanded) {
			console.log(library.description)
			return (
						<CardSection>
						<Text style={{flex:1}}>
							 {library.description} 
						</Text> 
						</CardSection>
				)	
		}
	}
	render(){

		const {titleStyle} = Style
		const {id,title} = this.props.library

		//debug liat ke passing ga actionnya
		// console.log(this.props);
		
		return (
				<TouchableWithoutFeedback 
				 onPress={()=>this.props.selectLibrary(id)}
				>
					<View>
						<CardSection>
								<Text style={titleStyle}>
									{title} 
								</Text>

						</CardSection>
						{this.renderDescription()}
					</View>
				</TouchableWithoutFeedback>

			)

	}
}
const Style = {
	titleStyle :{
		fontSize:18,
		paddingLeft:15
	}
}
//ownProps sama aja this.props di dalem komponen
const mapStateToProps = (state,ownProps) =>{
	//ini sama aja di dalam variabel expanded semisal
	//state.selectedLibraryId bernilai true atau sama nilainya dengan ownProps.library.id maka akan bernilai true
	// begitu juga sebaliknya maka akan false
	const expanded = state.selectedLibraryId === ownProps.library.id;
	return {expanded}
}

//parameter pertama null karena pertama kali buka aplikasi kan ga ada yang di select
//parameter ke dua passing actionnya
//lalu pass action ke component ==> flow dari react redux
export default connect(mapStateToProps,actions) (ListItem);
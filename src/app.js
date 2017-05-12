import React from 'react'
import {View} from 'react-native'
//react redux is glue for react native and redux 
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'
import {Header} from './components/common'
import LibraryList from './components/LibraryList'

/**
 *
 * provider only can have 1 child
 * provider is translater from redux to react 	
 */

const App = ()=>{
	return (

			<Provider store={createStore(reducers)}>
			  <View style={{flex:1,flexDirection:'column'}}>
				<Header headerText="Learn React-Redux" />
				<LibraryList/> 
			  </View>
			</Provider>
		)
}


export default App;
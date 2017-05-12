import {combineReducers} from 'redux'
import LibraryReducer from './LibraryReducer'
import SelectionReducer from './SelectionReducer'
/**
 *
 * REDUCERS SAME AS MODEL LIKE IN LARAVEL OR DATA OBJEK ON VUEJS
 * REDUCERS PRODUCE STATE
 */

export default combineReducers({
	//reducers libraries
	//state = value 
	libraries:LibraryReducer,
	selectedLibraryId:SelectionReducer
})
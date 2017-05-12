/**
 *
 * ACTION IS JAVASCRIP
 * ACTION CREATOR ITU () =>{RETURN {TYPE : 'SELECT_LIBRARY'}}
 * ACTION itu Mirip sama Controller di Laravel
 */

export const selectLibrary = (libraryId)=>{
	return {
		type : 'select_library',
		payload:libraryId
	}
}
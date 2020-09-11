import * as actionType from '../action/actiontype'

const initialState={
    searchSize:false,
    menu:false,
    show:false
}

const navigation=(state=initialState, action)=>{
    switch (action.type){
        case(actionType.CHANGE_SEARCH_SIZE):
            return{
                ...state,
                searchSize:true
            }
        case(actionType.RESET_SEARCH_SIZE):
            return{
                ...state,
                searchSize:false
            }
        case(actionType.OPEN_MENU):
            return{
                ...state,
                menu:!state.menu
            }
        case(actionType.CLOSE_MENU):
            return {
                ...state,
                menu:false,
            }
        default:
            return state
    }
}

export default navigation
import * as actionType from '../action/actiontype'

export const changeSearchSize=()=>{
    return{
        type:actionType.CHANGE_SEARCH_SIZE
    }
}

export const resetSearchSize=()=>{
    return{
        type:actionType.RESET_SEARCH_SIZE
    }
}

export const openMenu=()=>{
    return{
        type:actionType.OPEN_MENU
    }
}

export const closeMenu=()=>{
    return{
        type:actionType.CLOSE_MENU
    }
}

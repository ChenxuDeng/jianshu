import * as actionType from './actiontype'

export const openSmallSetting=()=>{
    return{
        type:actionType.OPEN_SMALL_SETTING
    }
}

export const closeSmallSetting=()=>{
    return{
        type:actionType.CLOSE_SMALL_SETTING
    }
}

export const openSetting=()=>{
    return{
        type:actionType.OPEN_SETTING
    }
}

export const closeSetting=()=>{
    return{
        type:actionType.CLOSE_SETTING
    }
}

export const markdownSelected=()=>{
    return{
        type:actionType.MARKDOWN_SELECTED
    }
}

export const fuSelected=()=>{
    return{
        type:actionType.FU_SELECTED
    }
}

export const openDialog=()=>{
    return{
        type:actionType.OPEN_DIALOG
    }
}

export const closeDialog=()=>{
    return{
        type:actionType.CLOSE_DIALOG
    }
}

export const openCreateSetting=()=>{
    return{
        type:actionType.OPEN_CREATE_SETTING
    }
}

export const closeCreateSetting=()=>{
    return{
        type:actionType.CLOSE_CREATE_SETTING
    }
}

export const titleChangeHandler=(event)=>{
    return{
        type:actionType.TITLE_CHANGE,
        titleValue:event.target.value
    }
}

export const contentChangeHandler=(contentState)=>{
    return{
        type:actionType.CONTENT_CHANGE,
        contentValue:contentState
    }
}
import * as actionType from '../action/actiontype'

const initialState={
    smallSetting:false,
    setting:false,
    markdown:false,
    fu:true,
    dialog:false,
    createSetting:false,
    titleValue:'无标题文章',
    contentValue:null
}

const writePage=(state=initialState,action)=>{
    switch (action.type){
        case (actionType.OPEN_SMALL_SETTING):
            return{
                ...state,
                smallSetting:!state.smallSetting
            }
        case (actionType.CLOSE_SMALL_SETTING):
            return{
                ...state,
                smallSetting:false
            }
        case(actionType.OPEN_SETTING):
            return{
                ...state,
                setting:!state.setting
            }
        case(actionType.CLOSE_SETTING):
            return {
                ...state,
                setting:false
            }
        case(actionType.MARKDOWN_SELECTED):
            return{
                ...state,
                markdown:true,
                fu:false
            }
        case(actionType.FU_SELECTED):
            return{
                ...state,
                markdown:false,
                fu:true
            }
        case(actionType.OPEN_DIALOG):
            return{
                ...state,
                dialog:true
            }
        case(actionType.CLOSE_DIALOG):
            return{
                ...state,
                dialog:false
            }
        case(actionType.OPEN_CREATE_SETTING):
            return{
                ...state,
                createSetting:!state.createSetting
            }
        case(actionType.CLOSE_CREATE_SETTING):
            return{
                ...state,
                createSetting:false
            }
        case(actionType.TITLE_CHANGE):
            return{
                ...state,
                titleValue:action.titleValue
            }
        case(actionType.CONTENT_CHANGE):
            return{
                ...state,
                contentValue:action.contentValue
            }
        default:
            return state
    }
}
export default writePage
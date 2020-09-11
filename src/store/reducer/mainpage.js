import * as actionType from '../action/actiontype'

const initialState={
    article:null,
    loading:false,
    error:false
}

const mainPage=(state=initialState,action)=>{
    switch (action.type){
        case(actionType.FETCH_ARTICLES_START):
            return{
                ...state,
                loading:true
            }
        case(actionType.FETCH_ARTICLES_SUCCESS):
            return{
                ...state,
                article:action.article,
                loading:false
            }
        case(actionType.FETCH_ARTICLES_FAILED):
            return{
                ...state,
                error:true,
                loading:false
            }
        default:
            return state
    }
}

export default mainPage
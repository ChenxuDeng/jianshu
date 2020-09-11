import * as actionType from './actiontype'
import axios from 'axios'

export const fetchArticleStart=()=>{
    return{
        type:actionType.FETCH_ARTICLES_START
    }
}

export const fetchArticleSuccess=(article)=>{
    return{
        type:actionType.FETCH_ARTICLES_SUCCESS,
        article:article
    }
}

export const fetchArticleFailed=()=>{
    return{
        type:actionType.FETCH_ARTICLES_FAILED
    }
}

export const fetchArticle=()=>{
    return (dispatch)=>{
        dispatch(fetchArticleStart())
        axios.get('https://jianshu-1d0d3.firebaseio.com/articles.json').then((response)=>{
            let article=[]
            for(let key in response.data){
                article.push({
                    ...response.data[key]
                })
            }
            dispatch(fetchArticleSuccess(article))
        }).catch((error)=>{
            dispatch(fetchArticleFailed())
        })
    }
}
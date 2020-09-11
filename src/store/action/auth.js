import * as actionType from './actiontype'
import axios from 'axios'

export const signupSelected=()=>{
    return{
        type:actionType.SIGNUP_SELECTED
    }
}

export const signinSelected=()=>{
    return{
        type:actionType.SIGNIN_SELECTED
    }
}

export const signupInit=()=>{
    return{
        type:actionType.SIGNUP_INIT
    }
}

export const signinInit=()=>{
    return{
        type:actionType.SIGNIN_INIT
    }
}

export const signupStart=()=>{
    return{
        type:actionType.SIGNUP_START
    }
}

export const signupSuccess=()=>{
    return{
        type:actionType.SIGNUP_SUCCESS
    }
}

export const signupFailed=(error)=>{
    return{
        type:actionType.SIGNUP_FAILED,
        error:error
    }
}

export const signup=(email,password)=>{
    const userData={
        email:email,
        password:password,
        returnSecureToken:true
    }
    return (dispatch)=>{
        dispatch(signupStart())
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDzOQzijFpJHfURkw1tcza_mgXqP6Q4VaM',userData).then((response)=>{
            dispatch(signupSuccess(response.data))
        }).catch((error)=>{
            dispatch(signupFailed(error.response.data.error))
        })
    }
}

export const closeSignupSuccessMsg=()=>{
    return{
        type:actionType.CLOSE_SIGNUP_SUCCESS_MSG
    }
}

export const closeSignupErrorMsg=()=>{
    return{
        type:actionType.CLOSE_SIGNUP_ERROR_MSG
    }
}

export const signinStart=()=>{
    return{
        type:actionType.SIGNIN_START
    }
}

export const signinSuccess=(token,id)=>{
    return{
        type:actionType.SIGNIN_SUCCESS,
        token:token,
        id:id
    }
}

export const signinFailed=(error)=>{
    return{
        type:actionType.SIGNIN_FAILED,
        error:error
    }
}

export const signin=(email,password,history)=>{
    const userData={
        email:email,
        password:password,
        returnSecureToken:true
    }
    return (dispatch)=>{
        dispatch(signinStart())
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDzOQzijFpJHfURkw1tcza_mgXqP6Q4VaM',userData).then((response)=>{
            localStorage.setItem('token',response.data.idToken)
            localStorage.setItem('id',response.data.localId)
            dispatch(signinSuccess(response.data.idToken,response.data.localId))
            history.push('/')
        }).catch((error)=>{
            dispatch(signinFailed(error.response.data.error))
        })
    }
}

export const closeSigninSuccessMsg=()=>{
    return{
        type:actionType.CLOSE_SIGNIN_SUCCESS_MSG
    }
}

export const closeSigninErrorMsg=()=>{
    return{
        type:actionType.CLOSE_SIGNIN_ERROR_MSG
    }
}

export const logout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    return{
        type:actionType.LOGOUT,
    }
}

export const autoSignin=()=>{
    return (dispatch)=>{
        const token=localStorage.getItem('token')
        if(!token){
            dispatch(logout())
        }else{
            const id=localStorage.getItem('id')
            dispatch(signinSuccess(token,id))
        }
    }
}


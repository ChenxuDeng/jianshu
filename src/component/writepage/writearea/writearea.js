import React,{useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {connect} from 'react-redux'
import * as action from '../../../store/action/index'
import BraftEditor from "braft-editor";
import 'braft-editor/dist/index.css'

function Writearea(props) {
    const useStyle=makeStyles((theme)=>{
        return{
            main:{
                width:'58.4%',
                overflowY:'hidden'
            },
            title:{
                fontSize:'30px',
                color:'#595959',
                padding:'20px 80px 10px 40px',
                border:'none',
                outline:'none'
            },
            editor:{
                marginTop:'66px',
            },
            content:{
                height:'auto',
                maxHeight:'77vh',
                marginLeft:'30px',
                marginTop:'30px'
            },
            wrapper:{
                background:'#d9d9d9',
            },
            button:{
                display:'none'
            }
        }
    })
    const classes=useStyle()

    return (
        <React.Fragment>
            <main className={classes.main}>
                <input value={props.titleValue} onChange={props.titleChangeHandler} className={classes.title}/>
                <div>
                    <BraftEditor
                        controlBarClassName={classes.wrapper}
                        contentClassName={classes.content}
                    />
                </div>
            </main>
        </React.Fragment>
    );
}

const mapStateToProps=(state)=>{
    return{
        titleValue:state.writepage.titleValue,
        contentValue:state.writepage.contentValue
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        titleChangeHandler:(event)=>{dispatch(action.titleChangeHandler(event))},
        contentChangeHandler:(contentState)=>{dispatch(action.contentChangeHandler(contentState))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Writearea);
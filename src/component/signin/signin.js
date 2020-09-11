import React,{useEffect,useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import logo from '../../assets/logo.png'
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {connect} from 'react-redux'
import * as action from '../../store/action/index'
import {Link} from 'react-router-dom'
import PersonIcon from "@material-ui/icons/Person";
import InputBase from "@material-ui/core/InputBase";
import LockIcon from "@material-ui/icons/Lock";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import wechat from "../../assets/wechat.svg";
import qq from "../../assets/qq.png";
import weibo from '../../assets/weibo.png'
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Loader from "../loader/loader";

function Signin(props) {
    useEffect(()=>{
        props.signupInit()
        props.signinInit()
    },[])

    const useStyle=makeStyles((theme)=>{
        return{
            wrapper:{
                backgroundColor:'#f1f1f1',
                height:'100%',
            },
            logo:{
                height:'7em',
                marginTop:'2em',
                marginLeft:'1em'
            },
            paper:{
                margin:'0 auto',
                width:'400px',
                height:'500px'
            },
            button:{
                fontSize:'18px',
                color:'#969696',
                borderRadius:'0',
                height:'42px',
                '&:hover':{
                    background:'transparent',
                    borderBottom:'2px solid #ea6f5a'
                }
            },
            buttonDiv:{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                paddingTop:'50px'
            },
            buttonSelected:{
                fontSize:'18px',
                color:'#ea6f5a',
                borderRadius:'0',
                height:'42px',
                fontWeight:'700',
                borderBottom:'2px solid #ea6f5a',
                '&:hover':{
                    background:'transparent',
                }
            },
            input:{
                border:'1px solid #c8c8c8',
                margin:'0 auto',
                width:'300px',
                height:'50px',
                display:'flex',
                alignItems:'center',
                marginTop:'50px',
                borderBottomLeftRadius:'0',
                borderBottomRightRadius:'0',
                background:'hsla(0,0%,71%,.1)'
            },
            input3:{
                border:'1px solid #c8c8c8',
                display:'flex',
                alignItems:'center',
                margin:'0 auto',
                width:'300px',
                height:'50px',
                borderTop:'0',
                borderTopLeftRadius:'0',
                borderTopRightRadius:'0',
                background:'hsla(0,0%,71%,.1)'
            },
            menu:{
                fontSize:'14px',
                color:'#969696',
                marginLeft:'auto',
                marginRight:'-9px',
                '&:hover':{
                    cursor:'pointer',
                    color:'black'
                }
            },
            signinButton:{
                background:'#3194d0',
                color:'white',
                '&:hover':{
                    background:'#3194d0'
                },
                margin:'0 auto',
                display:'block',
                marginTop:'16px',
                width:'300px',
                borderRadius:'25px',
                fontSize:'18px',
                height:'43px'
            },
            span:{
                fontSize:'12px',
                color:'#969696',
                textAlign:'center',
                borderBottom:'0.5px solid #d5d5d5',
                lineHeight:'0.1em',
                margin:'0 auto',
                marginTop:'50px',
                width:'300px'
            },
            wrapperButton:{
                padding:'0',
                '&:hover':{
                    background:'transparent'
                }
            }
        }
    })
    const classes=useStyle()
    const theme=useTheme()
    const smMatch=useMediaQuery(theme.breakpoints.down('sm'))

    const[email,setEmail]=useState(null)
    const[password,setPassword]=useState(null)

    const emailChangeHandler=(event)=>{
        setEmail(event.target.value)
    }

    const passwordChangeHandler=(event)=>{
        setPassword(event.target.value)
    }

    const login=<React.Fragment>
        <Button className={classes.wrapperButton} disableRipple component={Link} to={'/'}>
        <img src={logo} alt='logo' className={classes.logo}/>
        </Button>
        <Paper className={classes.paper}>
            <div className={classes.buttonDiv}>
                <Button className={props.signin?classes.buttonSelected:classes.button} disableRipple onClick={props.signinSelected}>
                    登录
                </Button>
                <span style={{color:'#969696',fontWeight:'700',marginLeft:'6px',marginRight:'6px'}}>·</span>
                <Button className={props.signup?classes.buttonSelected:classes.button}
                        disableRipple
                        onClick={props.signupSelected}
                        component={Link}
                        to={'/signup'}
                >
                    注册
                </Button>
            </div>
            <Paper elevation={0} className={classes.input}>
                <PersonIcon style={{paddingLeft:'7px',color:'#969696'}}/>
                <InputBase style={{width:'100%',fontSize:'14px',paddingLeft:'6px'}}
                           placeholder={'手机号或邮箱'}
                           value={email}
                           onChange={emailChangeHandler}
                />
            </Paper>
            <Paper elevation={0} className={classes.input3}>
                <LockIcon style={{paddingLeft:'7px',color:'#969696'}}/>
                <InputBase style={{width:'100%',fontSize:'14px',paddingLeft:'6px'}}
                           placeholder={'密码'}
                           value={password}
                           onChange={passwordChangeHandler}
                />
            </Paper>
            <div style={{width:'300px',margin:'0 auto',marginTop:'13px'}}>
                <div style={{width:'300px',display:'flex',alignItems:'center'}}>
                    <Checkbox color={'primary'}
                              style={{height:13,width:13,paddingLeft:'0'}}
                              icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 20 }} />}
                              checkedIcon={<CheckBoxIcon style={{ fontSize: 20 }} />}
                              disableRipple
                    />
                    <span style={{fontSize:'15px',color:'#969696'}}>记住我</span>
                    <span className={classes.menu}>登录遇到问题？</span>
                </div>
            </div>
            <Button variant={'contained'} className={classes.signinButton} disableElevation onClick={()=>props.signin(email,password,props.history)} disableRipple>
                {props.loading?<Loader size={23}/>:'登录'}
            </Button>
            <div className={classes.span}>
                <span style={{background:'#fff',padding:'0 16px'}}>社交账号直接登录</span>
            </div>
            <div style={{textAlign:'center',marginTop:'25px'}}>
                <Button className={classes.wrapperButton} disableRipple>
                    <img src={weibo} alt='weibo' style={{height:'23px', width:'28px'}}/>
                </Button>
                <Button className={classes.wrapperButton} disableRipple>
                    <img src={wechat} alt='wechat' style={{height:'30px', width:'30px'}}/>
                </Button>
                <Button className={classes.wrapperButton} disableRipple>
                    <img src={qq} alt='qq' style={{height:'28px', width:'28px'}}/>
                </Button>
            </div>
        </Paper>
    </React.Fragment>

    const smLogin=<React.Fragment>
        <div style={{margin:'0 auto',minWidth:'320px'}}>
            <div className={classes.buttonDiv}>
                <Button className={props.signin?classes.buttonSelected:classes.button} disableRipple onClick={props.signinSelected}>
                    登录
                </Button>
                <span style={{color:'#969696',fontWeight:'700',marginLeft:'6px',marginRight:'6px'}}>·</span>
                <Button className={props.signup?classes.buttonSelected:classes.button}
                        disableRipple
                        onClick={props.signupSelected}
                        component={Link}
                        to={'/signup'}
                >
                    注册
                </Button>
            </div>
            <Paper elevation={0} className={classes.input}>
                <PersonIcon style={{paddingLeft:'7px',color:'#969696'}}/>
                <InputBase style={{width:'100%',fontSize:'14px',paddingLeft:'6px'}}
                           placeholder={'手机号或邮箱'}
                           value={email}
                           onChange={emailChangeHandler}
                />
            </Paper>
            <Paper elevation={0} className={classes.input3}>
                <LockIcon style={{paddingLeft:'7px',color:'#969696'}}/>
                <InputBase style={{width:'100%',fontSize:'14px',paddingLeft:'6px'}}
                           placeholder={'密码'}
                           value={password}
                           onChange={passwordChangeHandler}
                />
            </Paper>
            <div style={{width:'300px',margin:'0 auto',marginTop:'13px'}}>
                <div style={{width:'300px',display:'flex',alignItems:'center'}}>
                    <Checkbox color={'primary'}
                              style={{height:13,width:13,paddingLeft:'0'}}
                              icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 20 }} />}
                              checkedIcon={<CheckBoxIcon style={{ fontSize: 20 }} />}
                              disableRipple
                    />
                    <span style={{fontSize:'15px',color:'#969696'}}>记住我</span>
                    <span className={classes.menu}>登录遇到问题？</span>
                </div>
            </div>
            <Button variant={'contained'} className={classes.signinButton} disableElevation onClick={()=>props.signin(email,password)} disableRipple>
                {props.loading?<Loader size={23}/>:'登录'}
            </Button>
            <div className={classes.span}>
                <span style={{background:'#f1f1f1',padding:'0 16px'}}>社交账号直接登录</span>
            </div>
            <div style={{textAlign:'center',marginTop:'25px'}}>
                <Button className={classes.wrapperButton} disableRipple>
                    <img src={weibo} alt='weibo' style={{height:'23px', width:'28px'}}/>
                </Button>
                <Button className={classes.wrapperButton} disableRipple>
                    <img src={wechat} alt='wechat' style={{height:'30px', width:'30px'}}/>
                </Button>
                <Button className={classes.wrapperButton} disableRipple>
                    <img src={qq} alt='qq' style={{height:'28px', width:'28px'}}/>
                </Button>
            </div>
        </div>
    </React.Fragment>

    return (
        <React.Fragment>
            <Snackbar open={props.signinSuccessMsg} onClose={props.closeSigninSuccessMsg} autoHideDuration={6000} anchorOrigin={{horizontal:'center',vertical:'top'}}>
                <Alert severity={'success'} onClose={props.closeSigninSuccessMsg} variant={'filled'}>
                    登陆成功！
                </Alert>
            </Snackbar>
            <Snackbar open={props.signinError} onClose={()=>props.closeSigninErrorMsg()} autoHideDuration={6000} anchorOrigin={{horizontal:'center',vertical:'top'}}>
                <Alert severity={'error'} onClose={()=>props.closeSigninErrorMsg()} variant={'filled'}>
                    {props.signinErrorMsg.message}
                </Alert>
            </Snackbar>
            <div className={classes.wrapper}>
                {smMatch?smLogin:login}
            </div>
        </React.Fragment>
    );
}

const mapStateToProps=(state)=>{
    return{
        signup:state.auth.signup,
        signin:state.auth.signin,
        signinSuccessMsg:state.auth.signinSuccessMsg,
        signinError:state.auth.signinError,
        signinErrorMsg:state.auth.signinErrorMsg,
        loading:state.auth.loading,
        isAuth:state.auth.token!==null
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signupSelected:()=>{dispatch(action.signupSelected())},
        signinSelected:()=>{dispatch(action.signinSelected())},
        signupInit:()=>{dispatch(action.signupInit())},
        signinInit:()=>{dispatch(action.signinInit())},
        signin:(email,password,history)=>{dispatch(action.signin(email,password,history))},
        closeSigninSuccessMsg:()=>{dispatch(action.closeSigninSuccessMsg())},
        closeSigninErrorMsg:()=>{dispatch(action.closeSigninErrorMsg())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signin);
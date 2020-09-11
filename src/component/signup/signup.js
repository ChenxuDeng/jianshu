import React,{useEffect,useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import logo from '../../assets/logo.png'
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {connect} from 'react-redux'
import * as action from '../../store/action/index'
import InputBase from "@material-ui/core/InputBase";
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import {Link} from 'react-router-dom'
import qq from '../../assets/qq.png'
import wechat from '../../assets/wechat.svg'
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import EmailIcon from '@material-ui/icons/Email';
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Loader from "../loader/loader";

function Signup(props) {
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
                height:'565px',
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
            input2:{
                border:'1px solid #c8c8c8',
                margin:'0 auto',
                width:'300px',
                height:'50px',
                display:'flex',
                alignItems:'center',
                borderTop:'0',
                borderRadius:'0',
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
            signupButton:{
                background:'#3db922',
                color:'white',
                '&:hover':{
                    background:'#3db922'
                },
                margin:'0 auto',
                display:'block',
                marginTop:'20px',
                width:'300px',
                borderRadius:'25px',
                fontSize:'18px',
                height:'43px',
            },
            a:{
                textDecoration:'none',
                color:'#337ab7',
                '&:visited':{
                    color:'#337ab7'
                }
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

    const [email,setEmail]=useState(null)
    const [password,setPassword]=useState(null)

    const emailChangeHandler=(event)=>{
        setEmail(event.target.value)
    }

    const passwordChangeHandler=(event)=>{
        setPassword(event.target.value)
    }

    const signup=<React.Fragment>
        <Button className={classes.wrapperButton} disableRipple component={Link} to={'/'}>
            <img src={logo} alt='logo' className={classes.logo}/>
        </Button>
        <Paper className={classes.paper}>
            <div className={classes.buttonDiv}>
                <Button className={props.signin?classes.buttonSelected:classes.button}
                        disableRipple
                        onClick={props.signinSelected}
                        component={Link}
                        to={'/signin'}
                >
                    登录
                </Button>
                <span style={{color:'#969696',fontWeight:'700',marginLeft:'6px',marginRight:'6px'}}>·</span>
                <Button className={props.signup?classes.buttonSelected:classes.button} disableRipple onClick={props.signupSelected}>
                    注册
                </Button>
            </div>
            <Paper elevation={0} className={classes.input}>
                <PersonIcon style={{paddingLeft:'7px',color:'#969696'}}/>
                <InputBase style={{width:'100%',fontSize:'14px',paddingLeft:'6px'}}
                           placeholder={'你的昵称'}
                />
            </Paper>
            <Paper elevation={0} className={classes.input2}>
                <EmailIcon style={{paddingLeft:'7px',color:'#969696'}}/>
                <InputBase style={{width:'100%',fontSize:'14px',paddingLeft:'6px'}}
                           placeholder={'邮箱'}
                           value={email}
                           onChange={emailChangeHandler}
                />
            </Paper>
            <Paper elevation={0} className={classes.input3}>
                <LockIcon style={{paddingLeft:'7px',color:'#969696'}}/>
                <InputBase style={{width:'100%',fontSize:'14px',paddingLeft:'6px'}}
                           placeholder={'设置密码'}
                           value={password}
                           onChange={passwordChangeHandler}
                />
            </Paper>
            <Button variant={'contained'} className={classes.signupButton} disableElevation onClick={()=>props.signup(email,password)} disableRipple>
                {props.loading?<Loader size={23}/>:'注册'}
            </Button>
            <div style={{textAlign:'center',marginTop:'9px',fontSize:'12px',color:'#969696',lineHeight:'20px'}}>
                <span >点“注册”即表示您同意并愿意遵守简书</span>
                <br/>
                <a href={'/'} className={classes.a}>用户协议</a><span> 和 </span><a href={'/'} className={classes.a}>隐私政策</a><span> 。</span>
            </div>
            <div className={classes.span}>
                <span style={{background:'#fff',padding:'0 16px'}}>社交账号直接注册</span>
            </div>
            <div style={{textAlign:'center',marginTop:'25px'}}>
                <Button className={classes.wrapperButton} disableRipple>
                    <img src={wechat} alt='wechat' style={{height:'30px', width:'30px'}}/>
                </Button>
                <Button className={classes.wrapperButton} disableRipple>
                    <img src={qq} alt='qq' style={{height:'28px', width:'28px'}}/>
                </Button>
            </div>
        </Paper>
    </React.Fragment>

    const smSignup=<React.Fragment>
        <div style={{margin:'0 auto',minWidth:'330px'}}>
            <div className={classes.buttonDiv}>
                <Button className={props.signin?classes.buttonSelected:classes.button}
                        disableRipple
                        onClick={props.signinSelected}
                        component={Link}
                        to={'/signin'}
                >
                    登录
                </Button>
                <span style={{color:'#969696',fontWeight:'700',marginLeft:'6px',marginRight:'6px'}}>·</span>
                <Button className={props.signup?classes.buttonSelected:classes.button} disableRipple onClick={props.signupSelected}>
                    注册
                </Button>
            </div>
            <Paper elevation={0} className={classes.input}>
                <PersonIcon style={{paddingLeft:'7px',color:'#969696'}}/>
                <InputBase style={{width:'100%',fontSize:'14px',paddingLeft:'6px'}} placeholder={'你的昵称'}/>
            </Paper>
            <Paper elevation={0} className={classes.input2}>
                <EmailIcon style={{paddingLeft:'7px',color:'#969696'}}/>
                <InputBase style={{width:'100%',fontSize:'14px',paddingLeft:'6px'}}
                           placeholder={'邮箱'}
                           value={email}
                           onChange={emailChangeHandler}
                />
            </Paper>
            <Paper elevation={0} className={classes.input3}>
                <LockIcon style={{paddingLeft:'7px',color:'#969696'}}/>
                <InputBase style={{width:'100%',fontSize:'14px',paddingLeft:'6px'}}
                           placeholder={'设置密码'}
                           value={password}
                           onChange={passwordChangeHandler}
                />
            </Paper>
            <Button variant={'contained'} className={classes.signupButton} disableElevation onClick={()=>props.signup(email,password)} disableRipple>
                {props.loading?<Loader size={23}/>:'注册'}
            </Button>
            <div style={{textAlign:'center',marginTop:'9px',fontSize:'12px',color:'#969696',lineHeight:'20px'}}>
                <span >点“注册”即表示您同意并愿意遵守简书</span>
                <br/>
                <a href={'/'} className={classes.a}>用户协议</a><span> 和 </span><a href={'/'} className={classes.a}>隐私政策</a><span> 。</span>
            </div>
            <div className={classes.span}>
                <span style={{background:'#f1f1f1',padding:'0 16px'}}>社交账号直接注册</span>
            </div>
            <div style={{textAlign:'center',marginTop:'25px'}}>
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
            <Snackbar open={props.signupSuccessMsg} onClose={props.closeSignupSuccessMsg} autoHideDuration={6000} anchorOrigin={{horizontal:'center',vertical:'top'}}>
                <Alert severity={'success'} onClose={props.closeSignupSuccessMsg} variant={'filled'}>
                    账号注册成功！
                </Alert>
            </Snackbar>
            <Snackbar open={props.errorState} onClose={()=>props.closeSignupErrorMsg()} autoHideDuration={6000} anchorOrigin={{horizontal:'center',vertical:'top'}}>
                <Alert severity={'error'} onClose={()=>props.closeSignupErrorMsg()} variant={'filled'}>
                    {props.error.message}
                </Alert>
            </Snackbar>
            <div className={classes.wrapper}>
                {smMatch?smSignup:signup}
            </div>
        </React.Fragment>
    );
}

const mapStateToProps=(state)=>{
    return{
        signup:state.auth.signup,
        signin:state.auth.signin,
        loading:state.auth.loading,
        signupSuccessMsg:state.auth.signupSuccessMsg,
        error:state.auth.signupErrorMsg,
        errorState:state.auth.signupError
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signupSelected:()=>{dispatch(action.signupSelected())},
        signinSelected:()=>{dispatch(action.signinSelected())},
        signupInit:()=>{dispatch(action.signupInit())},
        signinInit:()=>{dispatch(action.signinInit())},
        signup:(email,password)=>{dispatch(action.signup(email,password))},
        closeSignupSuccessMsg:()=>{dispatch(action.closeSignupSuccessMsg())},
        closeSignupErrorMsg:()=>{dispatch(action.closeSignupErrorMsg())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup);
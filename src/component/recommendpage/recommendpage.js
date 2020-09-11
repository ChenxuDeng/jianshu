import React from 'react';
import Navigation from "../navigation/navigation";
import Loggednav from "../navigation/loggednav";
import {connect} from 'react-redux'
import Container from "@material-ui/core/Container";
import recommend from '../../assets/recommend.png'
import HelpIcon from '@material-ui/icons/Help';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import rec2 from '../../assets/rec2.webp'
import rec1 from '../../assets/rec1.webp'
import rec3 from '../../assets/rec3.webp'
import rec4 from '../../assets/rec4.webp'
import rec5 from '../../assets/rec5.webp'
import rec6 from '../../assets/rec6.png'
import AddIcon from '@material-ui/icons/Add';

function Recommendpage(props) {
    const useStyle=makeStyles((theme)=>{
        return{
            text:{
                fontSize:'17px',
                marginLeft:'6px',
            },
            button:{
                padding:'0',
                '&:hover':{
                    background:'transparent'
                }
            },
            paper:{
                width:'262px',
                height:'320px',
                padding:'0 20px',
                border:'1px solid #e6e6e6',
                background:'hsla(0,0%,71%,.1)',
                position:'relative'
            },
            gridContainer:{
                marginTop:'66px'
            },
            avatar:{
                height:'80px',
                width:'80px',
                position:'absolute',
                left:'0',
                right:'0',
                marginLeft:'auto',
                marginRight:'auto',
                top:'-40px'
            },
            a:{
                textDecoration:'none',
                textOverflow:'ellipsis',
                overflow:'hidden',
                '&:hover':{
                    textDecoration:'underline'
                },
                color:'#333',
                fontSize:'13px'
            }
        }
    })
    const classes=useStyle()

    return (
        <React.Fragment>
            {props.isAuth?<Loggednav/>:<Navigation/>}
            <Container maxWidth={'md'} style={{padding:'0',marginTop:'30px',position:'relative',marginBottom:'50px'}}>
                <img src={recommend} alt='recommend' style={{width:'960px'}}/>
                    <Button style={{display:'flex',alignItems:'center',color:'white',position:'absolute',top:'39px',right:'30px'}}
                            className={classes.button}
                            disableRipple
                    >
                        <HelpIcon fontSize={"small"}/>
                        <span className={classes.text}>如何成为签约作者</span>
                    </Button>
                <Grid container spacing={3} className={classes.gridContainer}>
                    <Grid item>
                        <Paper className={classes.paper} elevation={0}>
                            <Avatar className={classes.avatar}>
                                <img src={rec2} alt='rec2' style={{height:'80px',width:'80px'}}/>
                            </Avatar>
                            <Button className={classes.button} disableRipple style={{margin:'0 auto',display:'block',marginTop:'60px',color:'#333333',height:'85px',marginBottom:'10px'}}>
                                <span style={{fontSize:'21px',fontWeight:'700'}}>董克平日记</span>
                                <br/>
                                <span style={{fontSize:'13px',lineHeight:'25px'}}>喜食好色的一枚无业游民</span>
                            </Button>
                            <Button style={{fontSize:'16px',color:'white',background:'#42c02e',width:'100px',borderRadius:'40px',display:'block',margin:'0 auto'}}>
                                <AddIcon style={{fontSize:'19px',marginBottom:'-3px'}}/>
                                <span>关注</span>
                            </Button>
                            <div style={{position:'relative'}}>
                                <span style={{fontSize:'12px',color:'#969696',position:'absolute',background:'#f7f7f7',paddingRight:'10px',top:'-9px'}}>最近更新</span>
                                <hr style={{margin:'20px 0px',border:'0.5px solid #eaeaea'}}/>
                            </div>
                            <div style={{textAlign:'center',lineHeight:'25px'}}>
                                <a href='/recommend' className={classes.a}>#开始记日记# 1312 好饭好酒好兆头</a>
                                <br/>
                                <a href='/recommend' className={classes.a}>#开始记日记# 1312 好饭好酒好兆头</a>
                                <br/>
                                <a href='/recommend' className={classes.a}>#开始记日记# 1312 好饭好酒好兆头</a>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.paper} elevation={0}>
                            <Avatar className={classes.avatar}>
                                <img src={rec1} alt='rec1' style={{height:'80px',width:'80px'}}/>
                            </Avatar>
                            <Button className={classes.button} disableRipple style={{margin:'0 auto',display:'block',marginTop:'60px',color:'#333333',marginBottom:'10px',height:'85px'}}>
                                <span style={{fontSize:'21px',fontWeight:'700'}}>卢璐说</span>
                                <br/>
                                <span style={{fontSize:'13px',lineHeight:'25px'}}>欢迎关注我的个人公众号：</span>
                                <br/>
                                <span style={{fontSize:'13px',lineHeight:'0px'}}>lulu_blog</span>
                            </Button>
                            <Button style={{fontSize:'16px',color:'white',background:'#42c02e',width:'100px',borderRadius:'40px',display:'block',margin:'0 auto'}}>
                                <AddIcon style={{fontSize:'19px',marginBottom:'-3px'}}/>
                                <span>关注</span>
                            </Button>
                            <div style={{position:'relative'}}>
                                <span style={{fontSize:'12px',color:'#969696',position:'absolute',background:'#f7f7f7',paddingRight:'10px',top:'-9px'}}>最近更新</span>
                                <hr style={{margin:'20px 0px',border:'0.5px solid #eaeaea'}}/>
                            </div>
                            <div style={{textAlign:'center',lineHeight:'25px'}}>
                                <a href='/recommend' className={classes.a}>法国的洛可可风格为什么这么美？</a>
                                <br/>
                                <a href='/recommend' className={classes.a}>法国的洛可可风格为什么这么美？</a>
                                <br/>
                                <a href='/recommend' className={classes.a}>法国的洛可可风格为什么这么美？</a>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.paper} elevation={0}>
                            <Avatar className={classes.avatar}>
                                <img src={rec3} alt='rec3' style={{height:'80px',width:'80px'}}/>
                            </Avatar>
                            <Button className={classes.button} disableRipple style={{margin:'0 auto',display:'block',marginTop:'60px',color:'#333333',height:'85px',marginBottom:'10px'}}>
                                <span style={{fontSize:'21px',fontWeight:'700'}}>宇文歡</span>
                                <br/>
                                <span style={{fontSize:'13px',lineHeight:'25px'}}>既编过学术大作，也做过畅销小说。</span>
                            </Button>
                            <Button style={{fontSize:'16px',color:'white',background:'#42c02e',width:'100px',borderRadius:'40px',display:'block',margin:'0 auto'}}>
                                <AddIcon style={{fontSize:'19px',marginBottom:'-3px'}}/>
                                <span>关注</span>
                            </Button>
                            <div style={{position:'relative'}}>
                                <span style={{fontSize:'12px',color:'#969696',position:'absolute',background:'#f7f7f7',paddingRight:'10px',top:'-9px'}}>最近更新</span>
                                <hr style={{margin:'20px 0px',border:'0.5px solid #eaeaea'}}/>
                            </div>
                            <div style={{textAlign:'center',lineHeight:'25px'}}>
                                <a href='/recommend' className={classes.a}>[历史]宋朝进行时（182）洗牌</a>
                                <br/>
                                <a href='/recommend' className={classes.a}>[历史]宋朝进行时（182）洗牌</a>
                                <br/>
                                <a href='/recommend' className={classes.a}>[历史]宋朝进行时（182）洗牌</a>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3} className={classes.gridContainer}>
                    <Grid item>
                        <Paper className={classes.paper} elevation={0}>
                            <Avatar className={classes.avatar}>
                                <img src={rec4} alt='rec4' style={{height:'80px',width:'80px'}}/>
                            </Avatar>
                            <Button className={classes.button} disableRipple style={{margin:'0 auto',display:'block',marginTop:'60px',color:'#333333',height:'85px',marginBottom:'10px'}}>
                                <span style={{fontSize:'21px',fontWeight:'700'}}>董克平日记</span>
                                <br/>
                                <span style={{fontSize:'13px',lineHeight:'25px'}}>喜食好色的一枚无业游民</span>
                            </Button>
                            <Button style={{fontSize:'16px',color:'white',background:'#42c02e',width:'100px',borderRadius:'40px',display:'block',margin:'0 auto'}}>
                                <AddIcon style={{fontSize:'19px',marginBottom:'-3px'}}/>
                                <span>关注</span>
                            </Button>
                            <div style={{position:'relative'}}>
                                <span style={{fontSize:'12px',color:'#969696',position:'absolute',background:'#f7f7f7',paddingRight:'10px',top:'-9px'}}>最近更新</span>
                                <hr style={{margin:'20px 0px',border:'0.5px solid #eaeaea'}}/>
                            </div>
                            <div style={{textAlign:'center',lineHeight:'25px'}}>
                                <a href='/recommend' className={classes.a}>#开始记日记# 1312 好饭好酒好兆头</a>
                                <br/>
                                <a href='/recommend' className={classes.a}>#开始记日记# 1312 好饭好酒好兆头</a>
                                <br/>
                                <a href='/recommend' className={classes.a}>#开始记日记# 1312 好饭好酒好兆头</a>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.paper} elevation={0}>
                            <Avatar className={classes.avatar}>
                                <img src={rec5} alt='rec5' style={{height:'80px',width:'80px'}}/>
                            </Avatar>
                            <Button className={classes.button} disableRipple style={{margin:'0 auto',display:'block',marginTop:'60px',color:'#333333',marginBottom:'10px',height:'85px'}}>
                                <span style={{fontSize:'21px',fontWeight:'700'}}>卢璐说</span>
                                <br/>
                                <span style={{fontSize:'13px',lineHeight:'25px'}}>欢迎关注我的个人公众号：</span>
                                <br/>
                                <span style={{fontSize:'13px',lineHeight:'0px'}}>lulu_blog</span>
                            </Button>
                            <Button style={{fontSize:'16px',color:'white',background:'#42c02e',width:'100px',borderRadius:'40px',display:'block',margin:'0 auto'}}>
                                <AddIcon style={{fontSize:'19px',marginBottom:'-3px'}}/>
                                <span>关注</span>
                            </Button>
                            <div style={{position:'relative'}}>
                                <span style={{fontSize:'12px',color:'#969696',position:'absolute',background:'#f7f7f7',paddingRight:'10px',top:'-9px'}}>最近更新</span>
                                <hr style={{margin:'20px 0px',border:'0.5px solid #eaeaea'}}/>
                            </div>
                            <div style={{textAlign:'center',lineHeight:'25px'}}>
                                <a href='/recommend' className={classes.a}>法国的洛可可风格为什么这么美？</a>
                                <br/>
                                <a href='/recommend' className={classes.a}>法国的洛可可风格为什么这么美？</a>
                                <br/>
                                <a href='/recommend' className={classes.a}>法国的洛可可风格为什么这么美？</a>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.paper} elevation={0}>
                            <Avatar className={classes.avatar}>
                                <img src={rec6} alt='rec6' style={{height:'80px',width:'80px'}}/>
                            </Avatar>
                            <Button className={classes.button} disableRipple style={{margin:'0 auto',display:'block',marginTop:'60px',color:'#333333',height:'85px',marginBottom:'10px'}}>
                                <span style={{fontSize:'21px',fontWeight:'700'}}>宇文歡</span>
                                <br/>
                                <span style={{fontSize:'13px',lineHeight:'25px'}}>既编过学术大作，也做过畅销小说。</span>
                            </Button>
                            <Button style={{fontSize:'16px',color:'white',background:'#42c02e',width:'100px',borderRadius:'40px',display:'block',margin:'0 auto'}}>
                                <AddIcon style={{fontSize:'19px',marginBottom:'-3px'}}/>
                                <span>关注</span>
                            </Button>
                            <div style={{position:'relative'}}>
                                <span style={{fontSize:'12px',color:'#969696',position:'absolute',background:'#f7f7f7',paddingRight:'10px',top:'-9px'}}>最近更新</span>
                                <hr style={{margin:'20px 0px',border:'0.5px solid #eaeaea'}}/>
                            </div>
                            <div style={{textAlign:'center',lineHeight:'25px'}}>
                                <a href='/recommend' className={classes.a}>[历史]宋朝进行时（182）洗牌</a>
                                <br/>
                                <a href='/recommend' className={classes.a}>[历史]宋朝进行时（182）洗牌</a>
                                <br/>
                                <a href='/recommend' className={classes.a}>[历史]宋朝进行时（182）洗牌</a>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3} className={classes.gridContainer}>
                    <Grid item>
                        <Paper className={classes.paper} elevation={0}>
                            <Avatar className={classes.avatar}>
                                <img src={rec2} alt='rec2' style={{height:'80px',width:'80px'}}/>
                            </Avatar>
                            <Button className={classes.button} disableRipple style={{margin:'0 auto',display:'block',marginTop:'60px',color:'#333333',height:'85px',marginBottom:'10px'}}>
                                <span style={{fontSize:'21px',fontWeight:'700'}}>董克平日记</span>
                                <br/>
                                <span style={{fontSize:'13px',lineHeight:'25px'}}>喜食好色的一枚无业游民</span>
                            </Button>
                            <Button style={{fontSize:'16px',color:'white',background:'#42c02e',width:'100px',borderRadius:'40px',display:'block',margin:'0 auto'}}>
                                <AddIcon style={{fontSize:'19px',marginBottom:'-3px'}}/>
                                <span>关注</span>
                            </Button>
                            <div style={{position:'relative'}}>
                                <span style={{fontSize:'12px',color:'#969696',position:'absolute',background:'#f7f7f7',paddingRight:'10px',top:'-9px'}}>最近更新</span>
                                <hr style={{margin:'20px 0px',border:'0.5px solid #eaeaea'}}/>
                            </div>
                            <div style={{textAlign:'center',lineHeight:'25px'}}>
                                <a href='/recommend' className={classes.a}>#开始记日记# 1312 好饭好酒好兆头</a>
                                <br/>
                                <a href='/recommend' className={classes.a}>#开始记日记# 1312 好饭好酒好兆头</a>
                                <br/>
                                <a href='/recommend' className={classes.a}>#开始记日记# 1312 好饭好酒好兆头</a>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.paper} elevation={0}>
                            <Avatar className={classes.avatar}>
                                <img src={rec1} alt='rec1' style={{height:'80px',width:'80px'}}/>
                            </Avatar>
                            <Button className={classes.button} disableRipple style={{margin:'0 auto',display:'block',marginTop:'60px',color:'#333333',marginBottom:'10px',height:'85px'}}>
                                <span style={{fontSize:'21px',fontWeight:'700'}}>卢璐说</span>
                                <br/>
                                <span style={{fontSize:'13px',lineHeight:'25px'}}>欢迎关注我的个人公众号：</span>
                                <br/>
                                <span style={{fontSize:'13px',lineHeight:'0px'}}>lulu_blog</span>
                            </Button>
                            <Button style={{fontSize:'16px',color:'white',background:'#42c02e',width:'100px',borderRadius:'40px',display:'block',margin:'0 auto'}}>
                                <AddIcon style={{fontSize:'19px',marginBottom:'-3px'}}/>
                                <span>关注</span>
                            </Button>
                            <div style={{position:'relative'}}>
                                <span style={{fontSize:'12px',color:'#969696',position:'absolute',background:'#f7f7f7',paddingRight:'10px',top:'-9px'}}>最近更新</span>
                                <hr style={{margin:'20px 0px',border:'0.5px solid #eaeaea'}}/>
                            </div>
                            <div style={{textAlign:'center',lineHeight:'25px'}}>
                                <a href='/recommend' className={classes.a}>法国的洛可可风格为什么这么美？</a>
                                <br/>
                                <a href='/recommend' className={classes.a}>法国的洛可可风格为什么这么美？</a>
                                <br/>
                                <a href='/recommend' className={classes.a}>法国的洛可可风格为什么这么美？</a>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.paper} elevation={0}>
                            <Avatar className={classes.avatar}>
                                <img src={rec3} alt='rec3' style={{height:'80px',width:'80px'}}/>
                            </Avatar>
                            <Button className={classes.button} disableRipple style={{margin:'0 auto',display:'block',marginTop:'60px',color:'#333333',height:'85px',marginBottom:'10px'}}>
                                <span style={{fontSize:'21px',fontWeight:'700'}}>宇文歡</span>
                                <br/>
                                <span style={{fontSize:'13px',lineHeight:'25px'}}>既编过学术大作，也做过畅销小说。</span>
                            </Button>
                            <Button style={{fontSize:'16px',color:'white',background:'#42c02e',width:'100px',borderRadius:'40px',display:'block',margin:'0 auto'}}>
                                <AddIcon style={{fontSize:'19px',marginBottom:'-3px'}}/>
                                <span>关注</span>
                            </Button>
                            <div style={{position:'relative'}}>
                                <span style={{fontSize:'12px',color:'#969696',position:'absolute',background:'#f7f7f7',paddingRight:'10px',top:'-9px'}}>最近更新</span>
                                <hr style={{margin:'20px 0px',border:'0.5px solid #eaeaea'}}/>
                            </div>
                            <div style={{textAlign:'center',lineHeight:'25px'}}>
                                <a href='/recommend' className={classes.a}>[历史]宋朝进行时（182）洗牌</a>
                                <br/>
                                <a href='/recommend' className={classes.a}>[历史]宋朝进行时（182）洗牌</a>
                                <br/>
                                <a href='/recommend' className={classes.a}>[历史]宋朝进行时（182）洗牌</a>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <div style={{textAlign:'center'}}>
                    <Button variant={'contained'} style={{background:'#a5a5a5',color:'white',width:'38.2%',margin:'40px 0',borderRadius:'20px',fontSize:'15px'}} disableElevation>
                        加载更多
                    </Button>
                </div>
            </Container>
        </React.Fragment>
    );
}

const mapStateToProps=(state)=>{
    return{
        isAuth:state.auth.token!==null
    }
}

export default connect(mapStateToProps)(Recommendpage);
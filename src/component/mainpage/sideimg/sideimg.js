import React from 'react';
import sideImg1 from '../../../assets/huiyuan.png'
import sideImg2 from '../../../assets/lianzai.png'
import sideImg3 from '../../../assets/banquan.png'
import sideImg4 from '../../../assets/xuetang.png'
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import qrcode from '../../../assets/qr-code.png'
import Tooltip from "@material-ui/core/Tooltip";
import AutorenewIcon from '@material-ui/icons/Autorenew';
import Avatar from "@material-ui/core/Avatar";
import rec1 from '../../../assets/rec1.webp'
import rec2 from '../../../assets/rec2.webp'
import rec3 from '../../../assets/rec3.webp'
import rec4 from '../../../assets/rec4.webp'
import rec5 from '../../../assets/rec5.webp'
import {Link} from 'react-router-dom'

function Sideimg(props) {
    const useStyle=makeStyles(()=>{
        return{
            grid:{
                paddingLeft:'25px'
            },
            gridItem:{
                paddingBottom:'6px'
            },
            button:{
                padding:0,
                '&:hover':{
                    background:'transparent'
                }
            },
            qrcode:{
                height:'60px',
                width:'60px'
            },
            paper:{
                display:'flex',
                alignItems:'center',
                padding:'10px 20px',
                border:'1px solid #f0f0f0',
                marginTop:'4px',
                width:'100%'
            },
            text:{
                marginLeft:'13px',
                fontSize:'15px',
            },
            smallText:{
                fontSize:'13px',
                color:'#999',
                marginTop:'4px'
            },
            bigQrcode:{
                height:'160px',
                width:'160px',
                marginTop:'3px'
            },
            recText:{
                '&:visited':{
                    color:'#42c02e'
                },
                textDecoration:'none',
                fontSize:'13px',
                marginLeft:'auto',
                color:'#42c02e',
                minWidth:'35px'
            },
            recTitle:{
                '&:visited':{
                    color:'black'
                },
                textDecoration:'none',
                fontSize:'14px',
                color:'black'
            },
            seeMoreButton:{
                fontSize:'13px',
                color:'#787878',
                backgroundColor:'#f7f7f7',
                border:'1px solid #dcdcdc',
                borderRadius:'4px',
                marginTop:'16px'
            }
        }
    })
    const classes=useStyle()

    return (
        <React.Fragment>
            <Grid container direction={'column'} className={classes.grid}>
                <Grid item className={classes.gridItem}>
                    <Button className={classes.button} disableRipple>
                        <img src={sideImg1} alt='s6eImg1' style={{height:'50px'}}/>
                    </Button>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Button className={classes.button} disableRipple>
                        <img src={sideImg2} alt='sideImg2' style={{height:'50px'}}/>
                    </Button>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Button className={classes.button} disableRipple>
                        <img src={sideImg3} alt='sideImg3' style={{height:'50px'}}/>
                    </Button>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Button className={classes.button} disableRipple>
                        <img src={sideImg4} alt='sideImg4' style={{height:'50px'}}/>
                    </Button>
                </Grid>
                <Grid item>
                    <Tooltip title={<img src={qrcode} alt='qrcode' className={classes.bigQrcode}/>} placement={'top'} arrow>
                        <Button className={classes.button} style={{width:'100%'}}>
                            <Paper className={classes.paper} elevation={0}>
                                <img src={qrcode} alt='qrcode' className={classes.qrcode}/>
                                <span className={classes.text}>下载简书手机App ><br/><span className={classes.smallText}>随时随地发现和创作内容</span></span>
                            </Paper>
                        </Button>
                    </Tooltip>
                    <div style={{display:'flex',marginTop:'30px'}}>
                        <span style={{fontSize:'14px',color:'#999'}}>推荐作者</span>
                        <Button className={classes.button} style={{color:'#999',marginLeft:'auto'}} disableRipple startIcon={<AutorenewIcon style={{fontSize:'17px',color:'#999'}}/>}>换一批</Button>
                    </div>
                </Grid>
                <Grid item>
                    <Grid item>
                        <Paper elevation={0} style={{display:'flex',alignItems:'center',marginTop:'10px'}}>
                            <Button className={classes.button} disableRipple>
                                <Avatar style={{height:'48px',width:'48px',marginRight:'10px'}}>
                                    <img src={rec1} alt='rec1' style={{height:'48px',width:'48px'}}/>
                                </Avatar>
                            </Button>
                            <Grid container direction={'column'}>
                                <Grid item style={{display:'flex'}}>
                                    <a href={'/'} className={classes.recTitle}>没文化的野狐狸</a>
                                    <a href='/' className={classes.recText}>+关注</a>
                                </Grid>
                                <Grid item>
                                    <span style={{fontSize:'12px',color:'#999'}}>写了322.4k字 · 6.1k喜欢</span>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper elevation={0} style={{display:'flex',alignItems:'center',marginTop:'10px'}}>
                            <Button className={classes.button} disableRipple>
                                <Avatar style={{height:'48px',width:'48px',marginRight:'10px'}}>
                                    <img src={rec2} alt='rec2' style={{height:'48px',width:'48px'}}/>
                                </Avatar>
                            </Button>
                            <Grid container direction={'column'}>
                                <Grid item style={{display:'flex'}}>
                                    <a href={'/'} className={classes.recTitle}>董克平日记</a>
                                    <a href='/' className={classes.recText}>+关注</a>
                                </Grid>
                                <Grid item>
                                    <span style={{fontSize:'12px',color:'#999'}}>写了1083.4k字 · 4.5k喜欢</span>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper elevation={0} style={{display:'flex',alignItems:'center',marginTop:'10px'}}>
                            <Button className={classes.button} disableRipple>
                                <Avatar style={{height:'48px',width:'48px',marginRight:'10px'}}>
                                    <img src={rec3} alt='rec3' style={{height:'48px',width:'48px'}}/>
                                </Avatar>
                            </Button>
                            <Grid container direction={'column'}>
                                <Grid item style={{display:'flex'}}>
                                    <a href={'/'} className={classes.recTitle}>卢璐说</a>
                                    <a href='/' className={classes.recText}>+关注</a>
                                </Grid>
                                <Grid item>
                                    <span style={{fontSize:'12px',color:'#999'}}>写了1842.4k字 · 33k喜欢</span>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper elevation={0} style={{display:'flex',alignItems:'center',marginTop:'10px'}}>
                            <Button className={classes.button} disableRipple>
                                <Avatar style={{height:'48px',width:'48px',marginRight:'10px'}}>
                                    <img src={rec4} alt='rec4' style={{height:'48px',width:'48px'}}/>
                                </Avatar>
                            </Button>
                            <Grid container direction={'column'}>
                                <Grid item style={{display:'flex'}}>
                                    <a href={'/'} className={classes.recTitle}>宇文歡</a>
                                    <a href='/' className={classes.recText}>+关注</a>
                                </Grid>
                                <Grid item>
                                    <span style={{fontSize:'12px',color:'#999'}}>写了135.6k字 · 2.5k喜欢</span>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper elevation={0} style={{display:'flex',alignItems:'center',marginTop:'10px'}}>
                            <Button className={classes.button} disableRipple>
                                <Avatar style={{height:'48px',width:'48px',marginRight:'10px'}}>
                                    <img src={rec5} alt='rec5' style={{height:'48px',width:'48px'}}/>
                                </Avatar>
                            </Button>
                            <Grid container direction={'column'}>
                                <Grid item style={{display:'flex'}}>
                                    <a href={'/'} className={classes.recTitle}>乔汉童</a>
                                    <a href='/' className={classes.recText}>+关注</a>
                                </Grid>
                                <Grid item>
                                    <span style={{fontSize:'12px',color:'#999'}}>写了356.8k字 · 2k喜欢</span>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <Button variant={'contained'} className={classes.seeMoreButton} disableElevation component={Link} to={'/recommend'}>
                    查看全部 >
                </Button>
            </Grid>
        </React.Fragment>
    );
}

export default Sideimg;
import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import appbackground from '../../assets/appbackground.png'
import Navigation from "../navigation/navigation";
import Loggednav from "../navigation/loggednav";
import {connect} from 'react-redux'
import applogo from '../../assets/applogo.png'
import appphone from '../../assets/appphone.png'
import qrcode from '../../assets/app arcode.png'
import appcontent1 from '../../assets/app content1.png'
import appcontent2 from '../../assets/app content2.png'
import appcontent3 from '../../assets/app content3.png'
import appcontent4 from '../../assets/app content4.png'

function Apppage(props) {
    const useStyle=makeStyles((theme)=>{
        return{
            topImg:{
                width:'760px'
            },
            topDiv:{
                paddingTop:'100px',
                background:'#fafafa',
                height:'414px'
            },
            topLogo:{
                height:'100px',
                width:'100px',
                marginRight:'30px'
            },
            topContentDiv:{
                display:'flex',
                position:'absolute',
                left:'0',
                right:'0',
                marginLeft:'auto',
                marginRight:'auto',
                width:'330px',
                marginTop:'-40px',
                alignItems:'center'
            },
            topContentDiv2:{
                display:'flex',
                position:'absolute',
                left:'0',
                right:'0',
                marginLeft:'auto',
                marginRight:'auto',
                width:'650px',
                marginTop:'100px',
                alignItems:'center'
            },
            phoneImg:{
                width:'410px',
                height:'314px'
            },
            contentDiv1:{
                margin:'0 auto',
                display:'block',
                width:'930px',
                marginTop:'120px'
            }
        }
    })
    const classes=useStyle()

    return (
        <React.Fragment>
            {props.isAuth?<Loggednav/>:<Navigation/>}
            <div className={classes.topDiv}>
                <div className={classes.topContentDiv}>
                    <img src={applogo} alt='applogo' className={classes.topLogo}/>
                    <div>
                        <span style={{fontSize:'30px'}}>创作你的创作</span>
                        <br/>
                        <span style={{fontSize:'24px',fontWeight:'300'}}>一个优质创作社区</span>
                    </div>
                </div>
                <div className={classes.topContentDiv2}>
                    <img src={appphone} alt='appphone' className={classes.phoneImg}/>
                    <div style={{marginLeft:'50px',marginBottom:'-23px'}}>
                        <img src={qrcode} alt='qrcode' style={{width:'140px',height:'140px'}}/>
                        <div>
                            <span style={{fontSize:'24px'}}>扫码下载简书App</span>
                            <br/>
                            <span style={{fontSize:'16px',fontWeight:'300',display:'block',marginTop:'6px'}}>随时随地发现和创作内容</span>
                        </div>
                    </div>
                </div>
                <div style={{textAlign:'center'}}>
                    <img src={appbackground} alt='appbackground' className={classes.topImg}/>
                </div>
            </div>
            <div className={classes.contentDiv1}>
                <div style={{position:'absolute',width:'450px',lineHeight:'30px',marginLeft:'80px',marginTop:'20px'}}>
                    <span style={{fontSize:'26px'}}>轻松创作精美图文</span>
                    <br/>
                    <span style={{fontSize:'17px',fontWeight:'300',marginTop:'10px',display:'block'}}>简单优雅的设计，可以一次上传多张图片，实时保存，多端同步，使创作分享更加方便快捷</span>
                </div>
                <img src={appcontent1} alt='appcontent' style={{width:'930px',height:'380px'}}/>
            </div>
            <div style={{margin:'0 auto',display:'block',width:'930px',marginTop:'60px'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <img src={appcontent2} alt='appcontent2' style={{width:'410px',height:'360px'}}/>
                    <div style={{width:'410px',marginLeft:'60px'}}>
                        <span style={{fontSize:'28px'}}>多元化的创作社区</span>
                        <br/>
                        <span style={{fontSize:'18px',fontWeight:'300',display:'block',marginTop:'20px',lineHeight:'30px'}}>一篇短文、一首诗、一幅画，在这里，你的创作将得到全世界的赞赏</span>
                    </div>
                </div>
            </div>
            <div style={{margin:'0 auto',display:'block',width:'930px',marginTop:'60px'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <div style={{width:'370px',marginLeft:'50px',marginRight:'30px'}}>
                        <span style={{fontSize:'28px'}}>百万创作者在简书相遇</span>
                        <br/>
                        <span style={{fontSize:'18px',fontWeight:'300',display:'block',marginTop:'20px',lineHeight:'30px'}}>在简书，仍有数百万创作者在坚持产出优质创作，有数千万读者在用心交流创作；众多精彩创作，只在简书看得到</span>
                    </div>
                    <img src={appcontent3} alt='appcontent3' style={{width:'450px',height:'310px'}}/>
                </div>
            </div>
            <div style={{margin:'0 auto',display:'block',width:'930px',marginTop:'60px'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <img src={appcontent4} alt='appcontent4' style={{width:'410px',height:'330px'}}/>
                    <div style={{width:'410px',marginLeft:'60px'}}>
                        <span style={{fontSize:'28px'}}>自由地交流和沟通</span>
                        <br/>
                        <span style={{fontSize:'18px',fontWeight:'300',display:'block',marginTop:'20px',lineHeight:'30px'}}>你可以发表评论、沟通想法。觉得不够？还能给创作者发简信，和无数传遍中文互联网的创作者直接交流</span>
                    </div>
                </div>
            </div>
            <div className={classes.topDiv} style={{height:'270px',background:'none',paddingTop:'66px',marginBottom:'80px'}}>
                    <div style={{width:'190px',textAlign:'center',position:'absolute',left:'0',right:'0',marginLeft:'auto',marginRight:'auto'}}>
                        <img src={qrcode} alt='qrcode' style={{width:'140px',height:'140px'}}/>
                        <span style={{fontSize:'24px',marginTop:'6px',display:'block'}}>扫码下载简书App</span>
                    </div>
                <div style={{textAlign:'center'}}>
                    <img src={appbackground} alt='appbackground' className={classes.topImg}/>
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'30px'}}>
                    <img src={applogo} alt='applogo' style={{height:'56px',width:'56px',marginRight:'16px'}}/>
                    <div>
                        <span style={{fontSize:'17px'}}>创作你的创作</span>
                        <br/>
                        <span style={{fontSize:'14px',fontWeight:'300'}}>一个优质创作社区</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps=(state)=>{
    return{
        isAuth:state.auth.token!==null
    }
}

export default connect(mapStateToProps)(Apppage);
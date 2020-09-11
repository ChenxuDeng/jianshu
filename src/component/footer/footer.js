import React from 'react';
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import footer1 from '../../assets/footer1.png'
import footer2 from '../../assets/footer2.png'
import footer3 from '../../assets/footer3.jpg'
import footer4 from '../../assets/footer4.jpg'
import footer5 from '../../assets/footer5.png'

function Footer(props) {
    const useStyle=makeStyles(()=>{
        return{
            link:{
                '&:visited':{
                    color:'#969696'
                },
                textDecoration:'none',
                fontSize:'14px',
                color:'#969696',
                '&:hover':{
                    color:'black'
                }
            },
            text:{
                fontSize:'12px',
                color:'#c8c8c8'
            },
            textLink:{
                '&:visited':{
                    color:'#c8c8c8'
                },
                textDecoration:'none',
                fontSize:'12px',
                color:'#c8c8c8',
                '&:hover':{
                    color:'black'
                }
            },
            button:{
                padding:0,
                '&:hover':{
                    background:'transparent'
                }
            },
            gridItem:{
                display:'flex',
                alignItems:'center'
            },
            img:{
                width:'180px',
                height:'30px'
            }
        }
    })
    const classes=useStyle()

    return (
        <React.Fragment>
            <Grid container direction={'column'}>
                <Grid item>
                    <a href='/' className={classes.link}>关于简书</a>
                    <span className={classes.link}> · </span>
                    <a href='/' className={classes.link}>联系我们</a>
                    <span className={classes.link}> · </span>
                    <a href='/' className={classes.link}>加入我们</a>
                    <span className={classes.link}> · </span>
                    <a href='/' className={classes.link}>简书出版</a>
                    <span className={classes.link}> · </span>
                    <a href='/' className={classes.link}>品牌与徽标</a>
                    <span className={classes.link}> · </span>
                    <a href='/' className={classes.link}>帮助中心</a>
                    <span className={classes.link}> · </span>
                    <a href='/' className={classes.link}>合作伙伴</a>
                </Grid>
                <Grid item className={classes.gridItem} style={{marginTop:'10px'}}>
                    <span className={classes.text}>©2012-2020 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 /</span>
                    <Button className={classes.button} disableRipple>
                        <img src={footer1} alt='footer1'/>
                    </Button>
                    <a href='/' className={classes.textLink}>沪公网安备31010402002252号 /</a>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Button className={classes.button} disableRipple>
                        <img src={footer2} alt='footer2' className={classes.img}/>
                    </Button>
                    <Button className={classes.button} disableRipple>
                        <img src={footer3} alt='footer3' className={classes.img} style={{marginLeft:'3px'}}/>
                    </Button>
                    <span className={classes.text} style={{marginLeft:'3px'}}>简书网举报电话：021-34770013 /</span>
                    <Button className={classes.button} disableRipple style={{minWidth:'30px'}}>
                        <img src={footer4} alt='footer4' style={{height:'30px',width:'30px'}}/>
                    </Button>
                    <span className={classes.text}>亲爱的市</span>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <span className={classes.text}>民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听 /</span>
                    <Button className={classes.button} style={{minWidth:'25px',marginLeft:'3px'}} disableRipple>
                        <img src={footer5} alt='footer5' style={{height:'30px',width:'25px'}}/>
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default Footer;
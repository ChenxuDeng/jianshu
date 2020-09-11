import React,{useEffect} from 'react';
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/core/styles/makeStyles";
import style from './articals.module.css'
import StarIcon from '@material-ui/icons/Star';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Footer from "../../footer/footer";
import {connect} from 'react-redux'
import * as action from '../../../store/action/index'

function Articals(props) {
    useEffect(()=>{
        props.fetchArticle()
    },[])

    const useStyle=makeStyles((theme)=>{
        return{
            title:{
                fontSize:'18px',
                fontWeight:'700',
                color:'black',
                lineHeight:'1.5',
                '&:visited':{
                    color:'black'
                },
                textDecoration:'none',
                '&:hover':{
                    textDecoration:'underLine'
                }
            },
            paper:{
                padding:'10px',
                minWidth:'500px'
            },
            gridItem:{
                display:'flex',
                alignItems:'center',
                fontSize:'12px',
            },
            grid:{
                marginTop:'5px',
                marginBottom:'7px',
            },
            icons:{
                fontSize:'15px',
                color:'#999',
            },
            iconText:{
                color:'#999',
            },
            button:{
                minWidth:'12px',
                fontSize:'12px',
                padding:0,
                marginTop:'2px',
                color:'#999',
                opacity:'0.7',
                '&:hover':{
                    background:'transparent',
                    opacity:'1'
                }
            },
            sideImg:{
                height:'50px',
            },
            seeMoreButton:{
                width:'100%',
                margin:'30px auto 60px',
                height:'40px',
                color:'#fff',
                background:'#a5a5a5',
                borderRadius:'20px',
                fontSize:'15px'
            }
        }
    })
    const classes=useStyle()

    let receivedArticle=<React.Fragment>
        {(props.article || []).map((article)=>{
            return <Paper elevation={0} className={classes.paper}>
                <a href={'/'} className={classes.title}>{article.title}</a>
                <div className={style.preview}>{article.content}</div>
                <Grid container spacing={2} className={classes.grid}>
                    <Grid item className={classes.gridItem}>
                        <StarIcon className={classes.icons} style={{color:'#ea6f5a'}}/>
                        <span style={{color:'#ea6f5a'}}>{article.diamond}</span>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Button className={classes.button} disableRipple>
                            <span className={classes.iconText}>{article.arthor}</span>
                        </Button>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Button className={classes.button} disableRipple>
                            <ChatBubbleIcon className={classes.icons}/>
                            <span className={classes.iconText}>{article.comment}</span>
                        </Button>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <FavoriteIcon className={classes.icons} style={{opacity:'0.7'}}/>
                        <span className={classes.iconText} style={{opacity:'0.7'}}>{article.like}</span>
                    </Grid>
                </Grid>
                <Divider/>
            </Paper>
        })}
    </React.Fragment>

    return (
        <React.Fragment>
            <div style={{display:'block'}}>
                {receivedArticle}
                <Paper elevation={0} className={classes.paper}>
                    <a href={'/'} className={classes.title}>《纸短情长》民国60余封情书，教我明白什么是真正的爱情</a>
                    <div className={style.preview}>文 | 卧猫 《纸短情长》这本书，初看封面便爱上了。一女子低垂眼睑，手握书信，白色的花在周围盛开。封面上的文字皆为竖版，文艺范十足。
                        文 | 卧猫 《纸短情长》这本书，初看封面便爱上了。一女子低垂眼睑，手握书信，白色的花在周围盛开。封面上的文字皆为竖版，文艺范十足。
                        文 | 卧猫 《纸短情长》这本书，初看封面便爱上了。一女子低垂眼睑，手握书信，白色的花在周围盛开。封面上的文字皆为竖版，文艺范十足。
                    </div>
                    <Grid container spacing={2} className={classes.grid}>
                        <Grid item className={classes.gridItem}>
                            <StarIcon className={classes.icons} style={{color:'#ea6f5a'}}/>
                            <span style={{color:'#ea6f5a'}}>59.7</span>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <Button className={classes.button} disableRipple>
                                <span className={classes.iconText}>卧猫G</span>
                            </Button>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <Button className={classes.button} disableRipple>
                                <ChatBubbleIcon className={classes.icons}/>
                                <span className={classes.iconText}>99</span>
                            </Button>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <FavoriteIcon className={classes.icons} style={{opacity:'0.7'}}/>
                            <span className={classes.iconText} style={{opacity:'0.7'}}>1525</span>
                        </Grid>
                    </Grid>
                    <Divider/>
                </Paper>
                <Paper elevation={0} className={classes.paper}>
                    <a href={'/'} className={classes.title}>《纸短情长》民国60余封情书，教我明白什么是真正的爱情</a>
                    <div className={style.preview}>文 | 卧猫 《纸短情长》这本书，初看封面便爱上了。一女子低垂眼睑，手握书信，白色的花在周围盛开。封面上的文字皆为竖版，文艺范十足。
                        文 | 卧猫 《纸短情长》这本书，初看封面便爱上了。一女子低垂眼睑，手握书信，白色的花在周围盛开。封面上的文字皆为竖版，文艺范十足。
                        文 | 卧猫 《纸短情长》这本书，初看封面便爱上了。一女子低垂眼睑，手握书信，白色的花在周围盛开。封面上的文字皆为竖版，文艺范十足。
                    </div>
                    <Grid container spacing={2} className={classes.grid}>
                        <Grid item className={classes.gridItem}>
                            <StarIcon className={classes.icons} style={{color:'#ea6f5a'}}/>
                            <span style={{color:'#ea6f5a'}}>59.7</span>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <Button className={classes.button} disableRipple>
                                <span className={classes.iconText}>卧猫G</span>
                            </Button>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <Button className={classes.button} disableRipple>
                                <ChatBubbleIcon className={classes.icons}/>
                                <span className={classes.iconText}>99</span>
                            </Button>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <FavoriteIcon className={classes.icons} style={{opacity:'0.7'}}/>
                            <span className={classes.iconText} style={{opacity:'0.7'}}>1525</span>
                        </Grid>
                    </Grid>
                    <Divider/>
                </Paper>
                <Paper elevation={0} className={classes.paper}>
                    <a href={'/'} className={classes.title}>《纸短情长》民国60余封情书，教我明白什么是真正的爱情</a>
                    <div className={style.preview}>文 | 卧猫 《纸短情长》这本书，初看封面便爱上了。一女子低垂眼睑，手握书信，白色的花在周围盛开。封面上的文字皆为竖版，文艺范十足。
                        文 | 卧猫 《纸短情长》这本书，初看封面便爱上了。一女子低垂眼睑，手握书信，白色的花在周围盛开。封面上的文字皆为竖版，文艺范十足。
                        文 | 卧猫 《纸短情长》这本书，初看封面便爱上了。一女子低垂眼睑，手握书信，白色的花在周围盛开。封面上的文字皆为竖版，文艺范十足。
                    </div>
                    <Grid container spacing={2} className={classes.grid}>
                        <Grid item className={classes.gridItem}>
                            <StarIcon className={classes.icons} style={{color:'#ea6f5a'}}/>
                            <span style={{color:'#ea6f5a'}}>59.7</span>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <Button className={classes.button} disableRipple>
                                <span className={classes.iconText}>卧猫G</span>
                            </Button>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <Button className={classes.button} disableRipple>
                                <ChatBubbleIcon className={classes.icons}/>
                                <span className={classes.iconText}>99</span>
                            </Button>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <FavoriteIcon className={classes.icons} style={{opacity:'0.7'}}/>
                            <span className={classes.iconText} style={{opacity:'0.7'}}>1525</span>
                        </Grid>
                    </Grid>
                    <Divider/>
                </Paper>
                <Paper elevation={0} className={classes.paper}>
                    <a href={'/'} className={classes.title}>《纸短情长》民国60余封情书，教我明白什么是真正的爱情</a>
                    <div className={style.preview}>文 | 卧猫 《纸短情长》这本书，初看封面便爱上了。一女子低垂眼睑，手握书信，白色的花在周围盛开。封面上的文字皆为竖版，文艺范十足。
                        文 | 卧猫 《纸短情长》这本书，初看封面便爱上了。一女子低垂眼睑，手握书信，白色的花在周围盛开。封面上的文字皆为竖版，文艺范十足。
                        文 | 卧猫 《纸短情长》这本书，初看封面便爱上了。一女子低垂眼睑，手握书信，白色的花在周围盛开。封面上的文字皆为竖版，文艺范十足。
                    </div>
                    <Grid container spacing={2} className={classes.grid}>
                        <Grid item className={classes.gridItem}>
                            <StarIcon className={classes.icons} style={{color:'#ea6f5a'}}/>
                            <span style={{color:'#ea6f5a'}}>59.7</span>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <Button className={classes.button} disableRipple>
                                <span className={classes.iconText}>卧猫G</span>
                            </Button>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <Button className={classes.button} disableRipple>
                                <ChatBubbleIcon className={classes.icons}/>
                                <span className={classes.iconText}>99</span>
                            </Button>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <FavoriteIcon className={classes.icons} style={{opacity:'0.7'}}/>
                            <span className={classes.iconText} style={{opacity:'0.7'}}>1525</span>
                        </Grid>
                    </Grid>
                    <Divider/>
                </Paper>
                <Paper elevation={0} className={classes.paper}>
                    <a href={'/'} className={classes.title}>《纸短情长》民国60余封情书，教我明白什么是真正的爱情</a>
                    <div className={style.preview}>文 | 卧猫 《纸短情长》这本书，初看封面便爱上了。一女子低垂眼睑，手握书信，白色的花在周围盛开。封面上的文字皆为竖版，文艺范十足。
                        文 | 卧猫 《纸短情长》这本书，初看封面便爱上了。一女子低垂眼睑，手握书信，白色的花在周围盛开。封面上的文字皆为竖版，文艺范十足。
                        文 | 卧猫 《纸短情长》这本书，初看封面便爱上了。一女子低垂眼睑，手握书信，白色的花在周围盛开。封面上的文字皆为竖版，文艺范十足。
                    </div>
                    <Grid container spacing={2} className={classes.grid}>
                        <Grid item className={classes.gridItem}>
                            <StarIcon className={classes.icons} style={{color:'#ea6f5a'}}/>
                            <span style={{color:'#ea6f5a'}}>59.7</span>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <Button className={classes.button} disableRipple>
                                <span className={classes.iconText}>卧猫G</span>
                            </Button>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <Button className={classes.button} disableRipple>
                                <ChatBubbleIcon className={classes.icons}/>
                                <span className={classes.iconText}>99</span>
                            </Button>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <FavoriteIcon className={classes.icons} style={{opacity:'0.7'}}/>
                            <span className={classes.iconText} style={{opacity:'0.7'}}>1525</span>
                        </Grid>
                    </Grid>
                    <Divider/>
                </Paper>
                <Paper elevation={0} className={classes.paper}>
                    <a href={'/'} className={classes.title}>《纸短情长》民国60余封情书，教我明白什么是真正的爱情</a>
                    <div className={style.preview}>文 | 卧猫 《纸短情长》这本书，初看封面便爱上了。一女子低垂眼睑，手握书信，白色的花在周围盛开。封面上的文字皆为竖版，文艺范十足。
                        文 | 卧猫 《纸短情长》这本书，初看封面便爱上了。一女子低垂眼睑，手握书信，白色的花在周围盛开。封面上的文字皆为竖版，文艺范十足。
                        文 | 卧猫 《纸短情长》这本书，初看封面便爱上了。一女子低垂眼睑，手握书信，白色的花在周围盛开。封面上的文字皆为竖版，文艺范十足。
                    </div>
                    <Grid container spacing={2} className={classes.grid}>
                        <Grid item className={classes.gridItem}>
                            <StarIcon className={classes.icons} style={{color:'#ea6f5a'}}/>
                            <span style={{color:'#ea6f5a'}}>59.7</span>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <Button className={classes.button} disableRipple>
                                <span className={classes.iconText}>卧猫G</span>
                            </Button>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <Button className={classes.button} disableRipple>
                                <ChatBubbleIcon className={classes.icons}/>
                                <span className={classes.iconText}>99</span>
                            </Button>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <FavoriteIcon className={classes.icons} style={{opacity:'0.7'}}/>
                            <span className={classes.iconText} style={{opacity:'0.7'}}>1525</span>
                        </Grid>
                    </Grid>
                    <Divider/>
                </Paper>
                <Paper elevation={0} className={classes.paper}>
                    <a href={'/'} className={classes.title}>《纸短情长》民国60余封情书，教我明白什么是真正的爱情</a>
                    <div className={style.preview}>文 | 卧猫 《纸短情长》这本书，初看封面便爱上了。一女子低垂眼睑，手握书信，白色的花在周围盛开。封面上的文字皆为竖版，文艺范十足。
                        文 | 卧猫 《纸短情长》这本书，初看封面便爱上了。一女子低垂眼睑，手握书信，白色的花在周围盛开。封面上的文字皆为竖版，文艺范十足。
                        文 | 卧猫 《纸短情长》这本书，初看封面便爱上了。一女子低垂眼睑，手握书信，白色的花在周围盛开。封面上的文字皆为竖版，文艺范十足。
                    </div>
                    <Grid container spacing={2} className={classes.grid}>
                        <Grid item className={classes.gridItem}>
                            <StarIcon className={classes.icons} style={{color:'#ea6f5a'}}/>
                            <span style={{color:'#ea6f5a'}}>59.7</span>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <Button className={classes.button} disableRipple>
                                <span className={classes.iconText}>卧猫G</span>
                            </Button>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <Button className={classes.button} disableRipple>
                                <ChatBubbleIcon className={classes.icons}/>
                                <span className={classes.iconText}>99</span>
                            </Button>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <FavoriteIcon className={classes.icons} style={{opacity:'0.7'}}/>
                            <span className={classes.iconText} style={{opacity:'0.7'}}>1525</span>
                        </Grid>
                    </Grid>
                    <Divider/>
                    <Button className={classes.seeMoreButton} variant={'contained'} disableElevation>阅读更多</Button>
                    <Footer/>
                </Paper>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps=(state)=>{
    return{
        article:state.mainpage.article,
        loading:state.mainpage.loading
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        fetchArticle:()=>{dispatch(action.fetchArticle())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Articals);
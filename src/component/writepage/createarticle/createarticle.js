import React,{useState} from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from "@material-ui/core/Tooltip";
import {connect} from 'react-redux'
import * as action from '../../../store/action/index'
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Divider from "@material-ui/core/Divider";
import SendIcon from '@material-ui/icons/Send';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import StarIcon from '@material-ui/icons/Star';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import HistoryIcon from '@material-ui/icons/History';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import BlockIcon from '@material-ui/icons/Block';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import IconButton from "@material-ui/core/IconButton";

function Createarticle(props) {
    const useStyle=makeStyles((theme)=>{
        return{
            paper:{
                height:'100%',
                marginLeft:'16.6%',
                width:'25%',
                overflowY:'scroll',
            },
            createArticle:{
                fontSize:'15px',
                fontWeight:'400',
                color:'#595959',
                padding:'20px 0 20px 25px',
                '&:hover':{
                    color:'black',
                    background:'transparent'
                }
            },
            article:{
                height:'90px',
                color:'#595959',
                fontSize:'18px',
            },
            createButton:{
                color:'#999',
                '&:hover':{
                    color:'#595959',
                    background:'transparent'
                }
            },
            text:{
                color:'#595959',
                fontSize:'14px',
                padding:'10px 20px',
                '&:hover':{
                    background:'#999'
                }
            },
            textTop:{
                color:'#595959',
                fontSize:'14px',
                padding:'10px 20px',
                '&:hover':{
                    background:'#999'
                },
                borderTopLeftRadius:'3px',
                borderTopRightRadius:'3px'
            },
            textBottom:{
                color:'#595959',
                fontSize:'14px',
                padding:'10px 20px',
                '&:hover':{
                    background:'#999'
                },
                borderBottomLeftRadius:'3px',
                borderBottomRightRadius:'3px'
            },
            toolTip:{
                padding:'0',
                boxShadow:'0px 2px 8px rgba(0,0,0,.15)',
            }
        }
    })
    const classes=useStyle()

    const [newArticles,setNewArticles]=useState([1])

    const remove = (index) => {
        if (index !== -1) {
            newArticles.splice(index, 1)
            setNewArticles(newArticles.slice(0))
        }
    }

    const add=()=>{
        newArticles.unshift(1)
    }

    let newArticle=<React.Fragment>
        <ListItem className={classes.article} button selected disableRipple>
            <InsertDriveFileIcon style={{fontSize:'30px',color:'#999'}}/>
            <span style={{marginBottom:'40px',marginLeft:'16px',color:'black'}}>{props.titleValue}</span>
            <Tooltip title={
                <List style={{padding:'0'}}>
                    <ListItem className={classes.textTop} button>
                        <SendIcon style={{fontSize:'17px',marginRight:'6px'}}/>
                        <span>直接发布</span>
                    </ListItem>
                    <Divider/>
                    <ListItem className={classes.text} button>
                        <AccessTimeIcon style={{fontSize:'17px',marginRight:'6px'}}/>
                        <span>定时发布</span>
                    </ListItem>
                    <Divider/>
                    <ListItem className={classes.text} button>
                        <StarIcon style={{fontSize:'17px',marginRight:'6px'}}/>
                        <span>发布为付费文章</span>
                    </ListItem>
                    <Divider/>
                    <ListItem className={classes.text} button>
                        <SettingsApplicationsIcon style={{fontSize:'17px',marginRight:'6px'}}/>
                        <span>设置发布样式</span>
                    </ListItem>
                    <Divider/>
                    <Tooltip title={
                        <ListItem className={classes.text} button style={{borderRadius:'3px'}}>
                            <span>随笔</span>
                        </ListItem>
                    }
                             interactive
                             classes={{tooltip:classes.toolTip}}
                             placement={'left'}
                    >
                        <ListItem className={classes.text} button>
                            <ArrowLeftIcon style={{fontSize:'17px',marginLeft:'-17px'}}/>
                            <FolderIcon style={{fontSize:'17px',marginRight:'6px'}}/>
                            <span>移动文章</span>
                        </ListItem>
                    </Tooltip>
                    <Divider/>
                    <ListItem className={classes.text} button>
                        <HistoryIcon style={{fontSize:'17px',marginRight:'6px'}}/>
                        <span>历史版本</span>
                    </ListItem>
                    <Divider/>
                    <ListItem className={classes.text} button onClick={(index)=>remove(index)}>
                        <DeleteIcon style={{fontSize:'17px',marginRight:'6px'}}/>
                        <span>删除文章</span>
                    </ListItem>
                    <Divider/>
                    <ListItem className={classes.textBottom} button>
                        <BlockIcon style={{fontSize:'17px',marginRight:'6px'}}/>
                        <span>设置禁止转载</span>
                    </ListItem>
                </List>
            }
                     interactive
                     placement={'bottom-end'}
                     classes={{tooltip:classes.toolTip}}
            >
                <IconButton style={{marginLeft:'auto',fontSize:'17px'}}>
                    <SettingsIcon style={{marginLeft:'auto',fontSize:'17px'}}/>
                </IconButton>
            </Tooltip>
            <span style={{fontSize:'12px',position:'absolute',left:'10px',bottom:'6px'}}>字数:0</span>
        </ListItem>
        <Divider/>
    </React.Fragment>



    return (
        <React.Fragment>
            <main className={classes.paper}>
                <List style={{padding:0}}>
                    <ListItem className={classes.createArticle} button disableRipple onClick={()=>{setNewArticles(newArticles.concat([Date.now()]))}}>
                        <AddCircleIcon style={{fontSize:'17px'}}/>
                        <span style={{marginLeft:'3px'}}>新建文章</span>
                    </ListItem>
                    {newArticles.map((article)=>{
                        return newArticle
                    })}
                    <ListItem button className={classes.createButton} disableRipple onClick={()=>{setNewArticles(newArticles.concat([Date.now()]))}}>
                        <AddIcon style={{fontSize:'17px',marginTop:'15px',marginLeft:'10px'}}/>
                        <span style={{fontSize:'14px',paddingTop:'15px'}}>在下方新建文章</span>
                    </ListItem>
                </List>
            </main>
        </React.Fragment>
    );
}

const mapStateToProps=(state)=>{
    return{
        createSetting:state.writepage.createSetting,
        titleValue:state.writepage.titleValue
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        openCreateSetting:()=>{dispatch(action.openCreateSetting())},
        closeCreateSetting:()=>{dispatch(action.closeCreateSetting())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Createarticle);
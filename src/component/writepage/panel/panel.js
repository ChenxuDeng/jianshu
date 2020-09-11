import React,{useState} from 'react';
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {connect} from 'react-redux'
import * as action from '../../../store/action/index'
import Tooltip from "@material-ui/core/Tooltip";
import {Link} from 'react-router-dom'
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Divider from "@material-ui/core/Divider";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import CheckIcon from '@material-ui/icons/Check';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import CloseIcon from '@material-ui/icons/Close';

function Panel(props) {
    const useStyle=makeStyles(()=>{
        return{
            drawer:{
                background:'#404040',
                width:'16.6%',
            },
            listItem:{
                '&:hover':{
                    backgroundColor:'#666'
                },
                height:'40px'
            },
            ListItemText:{
                color:'#f2f2f2',
                fontSize:'15px'
            },
            new:{
                height:'40px',
                '&:hover':{
                    background:'transparent'
                },
            },
            newText:{
                fontSize:'14px',
                color:'#f2f2f2'
            },
            button:{
                fontSize:'15px',
                borderRadius:'20px',
                width:'86%',
                margin:'30px auto 6px'
            },
            settingButton:{
                padding:'0',
                width:'30%',
                bottom:'10px',
                left:'0',
                position:'absolute',
                color:'#999',
                '&:hover':{
                    background:'transparent',
                    color:'white'
                }
            },
            settingButton2:{
                padding:'0',
                width:'40%',
                bottom:'10px',
                right:'0',
                position:'absolute',
                color:'#999',
                '&:hover':{
                    background:'transparent',
                    color:'white'
                }
            },
            settingIcon:{
                height:'20px',
                width:'20px',
                marginBottom:'3px'
            },
            settingText:{
                fontSize:'15px'
            },
            smallSettingItem:{
                color:'#595959',
                fontSize:'14px',
                marginRight:'7px',
                '&:hover':{
                    background:'#999',
                    borderTopLeftRadius:'3px',
                    borderTopRightRadius:'3px'
                }
            },
            smallSettingItem1:{
                color:'#595959',
                fontSize:'14px',
                marginRight:'7px',
                '&:hover':{
                    background:'#999',
                    borderBottomLeftRadius:'3px',
                    borderBottomRightRadius:'3px'
                }
            },
            settingItem:{
                color:'#595959',
                fontSize:'14px',
                '&:hover':{
                    background:'#999'
                }
            },
            root:{
                padding:'0'
            },
            boxShadow:{
                padding:'0',
                boxShadow:'0px 2px 8px rgba(0,0,0,.15)',
            },
            dialog:{
                width:'280px',
            },
            closeIcon:{
                marginLeft:'auto',
                fontSize:'17px',
                color:'#595959',
                '&:hover':{
                    color:'black'
                },
                cursor:'pointer'
            },
            dialogTitle:{
                width:'280px',
            },
            dialogButton:{
                fontSize:'16px',
                padding:'13px 0px',
                color:'#ec7259',
                '&:hover':{
                    background:'transparent'
                }
            },
            selected:{
                '&$selected':{
                    backgroundColor:'#666',
                    '&:hover':{
                        background:'#666'
                    }
                }
            }
        }
    })
    const classes=useStyle()

    const [index,setIndex]=useState(0)

    return (
        <React.Fragment>
            <Drawer variant={'permanent'} classes={{paper:classes.drawer}}>
                <Button variant={'outlined'} className={classes.button} color={'primary'} component={Link} to={'/'}>
                    回首页
                </Button>
                <List>
                    <ListItem className={classes.new}
                              button
                              disableRipple
                    >
                        <AddIcon style={{color:'#f2f2f2',fontSize:'17px',marginLeft:'-3px'}}/>
                        <span className={classes.newText}>
                            新建文集
                        </span>
                    </ListItem>
                    <ListItem button
                              className={classes.listItem}
                              disableRipple
                              selected={index===0}
                              onClick={()=>{setIndex(0)}}
                              classes={{selected:classes.selected}}
                    >
                        <span className={classes.ListItemText}>
                            日记本
                        </span>
                        <ClickAwayListener onClickAway={props.closeSmallSetting}>
                            <Tooltip title={
                                <List style={{padding:'0'}}>
                                    <ListItem button className={classes.smallSettingItem}>
                                        <EditIcon style={{fontSize:'14px'}}/>
                                        <span style={{marginLeft:'6px'}}>修改文集</span>
                                    </ListItem>
                                    <Divider/>
                                    <ListItem button className={classes.smallSettingItem1}>
                                        <DeleteIcon style={{fontSize:'14px'}}/>
                                        <span style={{marginLeft:'6px'}}>删除文集</span>
                                    </ListItem>
                                </List>
                            }
                                     interactive
                                     placement={'bottom-end'}
                                     arrow
                                     disableFocusListener
                                     disableHoverListener
                                     disableTouchListener
                                     open={props.smallSetting}
                                     classes={{tooltip:classes.root}}
                            >
                                <SettingsIcon style={{color:'#f2f2f2',fontSize:'17px',marginLeft:'auto'}}
                                              onClick={()=>{props.openSmallSetting()}}
                                />
                            </Tooltip>
                        </ClickAwayListener>
                    </ListItem>
                    <ListItem button
                              className={classes.listItem}
                              disableRipple
                              selected={index===1}
                              onClick={()=>{setIndex(1)}}
                              classes={{selected:classes.selected}}
                    >
                        <span className={classes.ListItemText}>
                            随笔
                        </span>
                    </ListItem>
                </List>
                <ClickAwayListener onClickAway={props.closeSetting}>
                    <Tooltip title={
                        <List style={{padding:'0'}}>
                            <Tooltip title={
                                <List style={{padding:'0'}}>
                                    <ListItem className={classes.smallSettingItem}
                                              button
                                              style={{justifyContent:'center'}}
                                              onClick={props.markdownSelected}
                                    >
                                        {props.markdown?<React.Fragment>
                                            <CheckIcon style={{fontSize:'14px',color:'green'}}/>
                                            <div style={{marginLeft:'6px'}}>MarkDown编辑器</div>
                                        </React.Fragment>:<div>MarkDown编辑器</div>}
                                    </ListItem>
                                    <Divider/>
                                    <ListItem className={classes.smallSettingItem1}
                                              button
                                              style={{justifyContent:'center'}}
                                              onClick={props.fuSelected}
                                    >
                                        {props.fu?<React.Fragment>
                                            <CheckIcon style={{fontSize:'14px',color:'green'}}/>
                                            <div style={{marginLeft:'6px'}}>富文本编辑器</div>
                                        </React.Fragment>:<div>富文本编辑器</div>}
                                    </ListItem>
                                </List>
                            }
                                     interactive
                                     placement={'right-start'}
                                     classes={{tooltip:classes.boxShadow}}
                            >
                                <ListItem className={classes.smallSettingItem} button>
                                    <KeyboardIcon style={{fontSize:'14px',marginBottom:'2px'}}/>
                                    <div style={{marginLeft:'6px'}}>默认编辑器 ></div>
                                </ListItem>
                            </Tooltip>
                            <Divider/>
                            <Tooltip title={
                                <List style={{padding:'0'}}>
                                    <ListItem className={classes.smallSettingItem} button style={{justifyContent:'center'}}>
                                        <div>打开夜间模式</div>
                                    </ListItem>
                                    <Divider/>
                                    <ListItem className={classes.settingItem} button style={{justifyContent:'center'}}>
                                        <div>切换至宋体</div>
                                    </ListItem>
                                    <Divider/>
                                    <ListItem className={classes.smallSettingItem1} button style={{justifyContent:'center'}}>
                                        <div>切换至繁体</div>
                                    </ListItem>
                                </List>
                            }
                                     interactive
                                     placement={'right-start'}
                                     classes={{tooltip:classes.boxShadow}}
                            >
                                <ListItem className={classes.settingItem} button>
                                    <FontDownloadIcon style={{fontSize:'14px',marginBottom:'2px'}}/>
                                    <div style={{marginLeft:'6px'}}>设置显示模式 ></div>
                                </ListItem>
                            </Tooltip>
                            <Divider/>
                            <ListItem className={classes.settingItem} button>
                                <DeleteIcon style={{fontSize:'14px',marginBottom:'2px'}}/>
                                <div style={{marginLeft:'6px'}}>回收站</div>
                            </ListItem>
                            <Divider/>
                            <ListItem className={classes.smallSettingItem1} button>
                                <HelpOutlineIcon style={{fontSize:'14px',marginBottom:'2px'}}/>
                                <div style={{marginLeft:'6px'}}>帮助与反馈</div>
                            </ListItem>
                        </List>
                    }
                             interactive
                             placement={'top-start'}
                             classes={{tooltip:classes.root}}
                             disableFocusListener
                             disableHoverListener
                             disableTouchListener
                             open={props.setting}
                    >
                        <Button className={classes.settingButton} disableRipple onClick={props.openSetting}>
                            <MenuIcon className={classes.settingIcon}/>
                            <span className={classes.settingText}>设置</span>
                        </Button>
                    </Tooltip>
                </ClickAwayListener>
                <Button className={classes.settingButton2} disableRipple onClick={props.openDialog}>
                    <span className={classes.settingText}>遇到问题</span>
                    <HelpOutlineIcon className={classes.settingIcon}/>
                </Button>
            </Drawer>
            <Dialog open={props.dialog} onClose={props.closeDialog}>
                <DialogTitle classes={{root:classes.dialogTitle}}>
                    <div style={{display:'flex',alignItems:'center',width:'280px'}}>
                        <span style={{fontSize:'16px',color:'#595959'}}>常见问题</span>
                        <CloseIcon classes={{root:classes.closeIcon}} onClick={props.closeDialog}/>
                    </div>
                </DialogTitle>
                <Divider/>
                <DialogContent classes={{root:classes.dialog}}>
                    <DialogContentText style={{marginTop:'7px',fontSize:'14px',color:'#595959'}}>
                        如果你在使用编辑器的过程中遇到问题，可以尝试以下方案解决:
                    </DialogContentText>
                    <DialogContentText style={{fontSize:'14px',color:'#595959'}}>
                        1. Windows用户尽量将浏览器设置为极速模式，不要使用兼容模式写作
                    </DialogContentText>
                    <DialogContentText style={{fontSize:'14px',color:'#595959'}}>
                        2.推荐使用chrome浏览器，创作体验更加流畅
                    </DialogContentText>
                    <DialogContentText style={{fontSize:'14px',color:'#595959'}}>
                        3.浏览器插件可能与编辑器功能冲突，可以在使用编辑器时禁用插件
                    </DialogContentText>
                </DialogContent>
                <Divider/>
                <Button disableRipple className={classes.dialogButton} onClick={props.closeDialog}>
                    我知道了
                </Button>
            </Dialog>
        </React.Fragment>
    );
}

const mapStateToProps=(state)=>{
    return{
        smallSetting:state.writepage.smallSetting,
        setting:state.writepage.setting,
        markdown:state.writepage.markdown,
        fu:state.writepage.fu,
        dialog:state.writepage.dialog
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        openSmallSetting:()=>{dispatch(action.openSmallSetting())},
        closeSmallSetting:()=>{dispatch(action.closeSmallSetting())},
        openSetting:()=>{dispatch(action.openSetting())},
        closeSetting:()=>{dispatch(action.closeSetting())},
        markdownSelected:()=>{dispatch(action.markdownSelected())},
        fuSelected:()=>{dispatch(action.fuSelected())},
        openDialog:()=>{dispatch(action.openDialog())},
        closeDialog:()=>{dispatch(action.closeDialog())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Panel);
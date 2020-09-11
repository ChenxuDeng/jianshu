import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from '../../assets/logo.png'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import SystemUpdateIcon from '@material-ui/icons/SystemUpdate';
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import Paper from "@material-ui/core/Paper";
import {connect} from 'react-redux'
import * as action from '../../store/action/index'
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import IconButton from "@material-ui/core/IconButton";
import FontDownloadOutlinedIcon from '@material-ui/icons/FontDownloadOutlined';
import diamond from '../../assets/diamond.png'
import Button from "@material-ui/core/Button";
import CreateIcon from '@material-ui/icons/Create';
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from '@material-ui/icons/Menu';
import {Hidden} from "@material-ui/core";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Grow from "@material-ui/core/Grow";
import Divider from "@material-ui/core/Divider";
import {Link} from 'react-router-dom'
import Container from "@material-ui/core/Container";

function Navigation(props) {
    const useStyle=makeStyles((theme)=>{
        return{
            logo:{
                width:'100px',
                [theme.breakpoints.up('xl')]:{

                },
                [theme.breakpoints.down('sm')]:{
                    marginLeft:'-20px'
                }
            },
            appBar:{
                borderBottom:'0.5px solid #e7e7e7',
                display:'flex',
                verticalAlign:'center'
            },
            tab:{
                fontFamily:'Microsoft YaHei',
                fontSize:'17px',
                textTransform:'none',
                color:'black',
                minWidth:'89px',
            },
            search:{
                fontSize:'14px',
            },
            searchIcon: {
                marginLeft:'auto',
                color:'grey',
                position:'absolute'
            },
            searchIconFocus:{
                marginLeft:'auto',
                color:'white',
                position:'absolute'
            },
            paper:{
                paddingLeft:'17px',
                paddingRight:'5px',
                width:'240px',
                borderRadius:'40px',
                background:'#e7e7e7',
                display:'flex',
                alignItems:'center',
                height:'38px',
                marginLeft:'24px',
                transition:'0.5s',
                marginTop:'17px'
            },
            paperOnclick:{
                paddingLeft:'17px',
                paddingRight:'5px',
                width:'320px',
                borderRadius:'40px',
                background:'#e7e7e7',
                display:'flex',
                alignItems:'center',
                height:'38px',
                marginLeft:'24px',
                transition:'0.5s',
                marginTop:'17px'
            },
            iconButton:{
                width:'30px',
                height:'30px',
                marginLeft:'auto'
            },
            iconButtonFocus:{
                width:'30px',
                height:'30px',
                marginLeft:'auto',
                background:'darkgrey',
                '&:hover':{
                    background:'darkgrey'
                }
            },
            tabIcon:{
                minWidth:'44px',
                color:'grey'
            },
            diamond:{
                width:'56px',
                height:'26'
            },
            diamondButton:{
                '&:hover':{
                    background:'transparent'
                }
            },
            login:{
                fontFamily:'Microsoft YaHei',
                fontSize:'15px',
                textTransform:'none',
                color:'#969696',
                minWidth:'72px',
            },
            register:{
                borderRadius:'40px',
                width:'80px',
                height:'38px',
                marginTop:'5px',
                marginLeft:'9px',
                fontFamily:'Microsoft YaHei'
            },
            write:{
                borderRadius:'40px',
                width:'100px',
                height:'38px',
                marginTop:'5px',
                marginLeft:'15px',
                fontFamily:'Microsoft YaHei',
                opacity:'0.9',
                '&:hover':{
                    background:'#ea6f5a',
                    opacity:1
                }
            },
            tabs2:{
                marginLeft:'auto',
                [theme.breakpoints.up('xl')]:{

                }
            },
            tabs1:{
                marginLeft:'87px',
                [theme.breakpoints.up('lg')]:{
                    marginLeft:'233px',
                    position:'absolute'
                },
                [theme.breakpoints.down('md')]:{
                    marginLeft:'50px'
                }
            },
            smPaper:{
                paddingLeft:'17px',
                paddingRight:'5px',
                width:'160px',
                borderRadius:'40px',
                background:'#e7e7e7',
                display:'flex',
                alignItems:'center',
                height:'38px',
                transition:'0.5s',
                marginTop:'7px'
            },
            smPaperOnclick:{
                paddingLeft:'17px',
                paddingRight:'5px',
                width:'240px',
                borderRadius:'40px',
                background:'#e7e7e7',
                display:'flex',
                alignItems:'center',
                height:'38px',
                transition:'0.5s',
                marginTop:'7px'
            },
            smCss:{
                paddingLeft:'17px',
                paddingRight:'5px',
                width:'160px',
                borderRadius:'40px',
                background:'#e7e7e7',
                display:'flex',
                alignItems:'center',
                height:'38px',
                transition:'0.5s',
                marginTop:'7px'
            },
            menuSearch:{
                paddingLeft:'17px',
                paddingRight:'5px',
                width:'460px',
                borderRadius:'40px',
                background:'#e7e7e7',
                display:'flex',
                alignItems:'center',
                height:'38px',
                transition:'0.5s',
            },
            logoButton:{
                padding:0,
                minWidth:'50px',
                '&:hover':{
                    background:'transparent'
                }
            },
            toolBar:theme.mixins.toolbar,
            container:{
                maxWidth:'1440px',
                padding:'0'
            }

        }
    })
    const classes=useStyle()
    const theme=useTheme()
    const match=useMediaQuery(theme.breakpoints.down('md'))
    const smMatch=useMediaQuery(theme.breakpoints.down('sm'))
    const xsMatch=useMediaQuery(theme.breakpoints.down('xs'))

    let smCss
    if(smMatch){
        smCss=classes.smCss
    }else{
        smCss=classes.smPaperOnclick
    }

    const mdPaper=<React.Fragment>
        <ClickAwayListener onClickAway={props.resetSearch}>
            <Paper component={'form'} className={props.changeSize?classes.paperOnclick:classes.paper} elevation={0}>
                <InputBase className={classes.search} placeholder={'搜索'} onFocus={props.changeSizeHandler} style={{width:'320px'}}/>
                <IconButton className={props.changeSize?classes.iconButtonFocus:classes.iconButton}>
                    <SearchIcon className={props.changeSize?classes.searchIconFocus:classes.searchIcon}/>
                </IconButton>
            </Paper>
        </ClickAwayListener>
    </React.Fragment>

    const smPaper=<ClickAwayListener onClickAway={props.resetSearch}>
        <Hidden smDown>
            <Paper component={'form'} className={props.changeSize?smCss:classes.smPaper} elevation={0}>
                <InputBase className={classes.search} placeholder={'搜索'} onFocus={props.changeSizeHandler} style={{width:'240px'}}/>
                <IconButton className={props.changeSize?classes.iconButtonFocus:classes.iconButton}>
                    <SearchIcon className={props.changeSize?classes.searchIconFocus:classes.searchIcon}/>
                </IconButton>
            </Paper>
        </Hidden>

    </ClickAwayListener>

    let tabs=<React.Fragment>
        <Tabs className={classes.tabs1}>
            <Tab label={'首页'} className={classes.tab}
                 style={{color:'#ea6f5a'}}
                 disableRipple
                 icon={<ExploreOutlinedIcon style={{paddingTop:'3.5px',paddingRight:'3.5px'}}/>}
                 component={Link} to={'/'}
            />
            <Tab label={'下载App'}
                 className={classes.tab}
                 icon={<SystemUpdateIcon
                     style={{paddingTop:'3.5px',paddingRight:'3.5px'}}/>}
                 disableRipple
                 component={Link}
                 to={'/app'}
            />
            {match?smPaper:mdPaper}
        </Tabs>
    </React.Fragment>

    let mdTabs=<React.Fragment>
        <Tabs>
            <Tab label={'首页'} className={classes.tab} style={{color:'#ea6f5a'}} disableRipple component={Link} to={'/'}/>
            <Tab label={'下载App'}
                 className={classes.tab}
                 disableRipple
                 component={Link}
                 to={'/app'}
            />
            {match?smPaper:mdPaper}
        </Tabs>
    </React.Fragment>
    if(smMatch){
        mdTabs=<React.Fragment>
            <Hidden xsDown>
                <Tabs>
                    <Tab style={{color:'#ea6f5a',minWidth:'50px'}} disableRipple icon={<ExploreOutlinedIcon style={{paddingTop:'3.5px',paddingRight:'3.5px'}}/>}/>
                    <Tab  style={{minWidth:'50px'}}
                          icon={<SystemUpdateIcon
                              style={{paddingTop:'3.5px',paddingRight:'3.5px'}}/>}
                          disableRipple
                          component={Link}
                          to={'/app'}
                    />
                    {match?smPaper:mdPaper}
                </Tabs>
            </Hidden>
        </React.Fragment>
    }

    let menuButton=<Button variant={'outlined'} style={{minWidth:'40px',height:'35px', padding:'0'}} onClick={props.openMenu}>
        <MenuIcon style={{color:'grey',height:'25px',width:'25px'}}/>
    </Button>

    let menu= <Grow in={props.menu}>
            <Paper elevation={0} style={{position:'absolute',width:'100%',zIndex:'1000',marginTop:'-7px'}}>
                <MenuList>
                    <MenuItem style={{justifyContent:'center',color:'#ea6f5a'}} onClick={props.closeMenu}>首页</MenuItem>
                    <Divider/>
                    <MenuItem style={{justifyContent:'center'}} onClick={props.closeMenu}>下载App</MenuItem>
                    <Divider/>
                </MenuList>
                <div style={{justifyContent:'center',display:'flex',marginBottom:'9px'}}>
                    <ClickAwayListener onClickAway={props.resetSearch}>
                        <Paper component={'form'} className={classes.menuSearch} elevation={0}>
                            <InputBase className={classes.search} placeholder={'搜索'} onFocus={props.changeSizeHandler} style={{width:'500px'}}/>
                            <IconButton className={props.changeSize?classes.iconButtonFocus:classes.iconButton}>
                                <SearchIcon className={props.changeSize?classes.searchIconFocus:classes.searchIcon} onClick={props.closeMenu}/>
                            </IconButton>
                        </Paper>
                    </ClickAwayListener>
                </div>
                <Divider/>
            </Paper>
        </Grow>
    return (
        <React.Fragment>
            <AppBar elevation={0} color={'secondary'} className={classes.appBar} position={'fixed'}>
                <Container maxWidth={'lg'} classes={{maxWidthLg:classes.container}}>
                    <Toolbar disableGutters>
                        <Button className={classes.logoButton} disableRipple component={Link} to={'/'}>
                            <img src={logo} alt="logo" className={classes.logo}/>
                        </Button>
                        {smMatch?menuButton:null}
                        {match?mdTabs:tabs}
                        <Tabs className={classes.tabs2}>
                            <Tab icon={<FontDownloadOutlinedIcon/>} className={classes.tabIcon} disableRipple/>
                            <Button disableRipple className={classes.diamondButton}>
                                <img src={diamond} alt="diamond" className={classes.diamond}/>
                            </Button>
                            <Tab label={'登录'}
                                 className={classes.login}
                                 disableRipple
                                 component={Link}
                                 to={'/signin'}
                                 target={'_blank'}
                                 rel={'noopener noreferrer'}
                            />
                            <Button variant={'outlined'}
                                    className={classes.register}
                                    color={'primary'}
                                    disableRipple
                                    component={Link}
                                    to={'/signup'}
                                    rel={'noopener noreferrer'}
                                    target={'_blank'}
                            >
                                注册
                            </Button>
                            <Button variant={'contained'}
                                    color={'primary'}
                                    className={classes.write}
                                    disableElevation
                                    startIcon={<CreateIcon/>}
                                    disableRipple
                                    component={Link}
                                    to={'/write'}
                                    rel={'noopener noreferrer'}
                                    target={'_blank'}
                            >
                                写文章
                            </Button>
                        </Tabs>
                    </Toolbar>
                </Container>
            </AppBar>
            <div className={classes.toolBar}/>
            {smMatch?menu:null}
        </React.Fragment>
    );
}

const mapStateToProps=(state)=>{
    return{
        changeSize:state.navigation.searchSize,
        menu:state.navigation.menu
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        changeSizeHandler:()=>{dispatch(action.changeSearchSize())},
        resetSearch:()=>{dispatch(action.resetSearchSize())},
        openMenu:()=>{dispatch(action.openMenu())},
        closeMenu:()=>{dispatch(action.closeMenu())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);
import React,{useState} from 'react';
import Container from "@material-ui/core/Container"
import makeStyles from "@material-ui/core/styles/makeStyles";
import Articals from "./articals/articals";
import Sideimg from "./sideimg/sideimg";
import Backtotop from "./backtotop/backtotop";
import Navigation from "../navigation/navigation";
import Loggednav from "../navigation/loggednav";
import {connect} from 'react-redux'

function Mainpage(props) {

    const useStyle=makeStyles((theme)=>{
        return{
            container:{
                marginTop:'30px'
            },
            wrapper:{
                display:'flex'
            },
        }
    })
    const classes=useStyle()

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
        }
    };
    window.addEventListener('scroll', checkScrollTop)

    return (
        <React.Fragment>
            {props.isAuth?<Loggednav/>:<Navigation/>}
                {showScroll?<Backtotop/>:null}
                <Container maxWidth={'md'} disableGutters className={classes.container}>
                    <div className={classes.wrapper}>
                        <Articals/>
                        <Sideimg/>
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

export default connect(mapStateToProps)(Mainpage);
import React from 'react';
import Fab from "@material-ui/core/Fab";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function Backtotop(props) {
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <React.Fragment>
                <Fab style={{position:'fixed',bottom:'50px',right:'36px',background:'white',zIndex:'1000'}} onClick={scrollTop}>
                    <ArrowUpwardIcon/>
                </Fab>
        </React.Fragment>
    );
}

export default Backtotop;
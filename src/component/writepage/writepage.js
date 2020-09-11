import React from 'react';
import Panel from "./panel/panel";
import Createarticle from "./createarticle/createarticle";
import Writearea from "./writearea/writearea";

function Writepage(props) {
    return (
        <React.Fragment>
            <Panel/>
            <div style={{display:'flex',height:'100%'}}>
                <Createarticle/>
                <Writearea/>
            </div>
        </React.Fragment>
    );
}


export default Writepage;
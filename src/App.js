import React,{useEffect} from 'react';
import {MuiThemeProvider} from "@material-ui/core";
import {theme} from "./theme/theme";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Mainpage from "./component/mainpage/mainpage";
import Writepage from "./component/writepage/writepage";
import Signup from "./component/signup/signup";
import Signin from "./component/signin/signin";
import {connect} from 'react-redux'
import * as action from './store/action/index'
import Apppage from "./component/apppage/apppage";
import Recommendpage from "./component/recommendpage/recommendpage";

function App(props) {
    useEffect(()=>{
        props.autoSignin()
    },[])

  return (
      <BrowserRouter>
          <MuiThemeProvider theme={theme}>
              <React.Fragment>
                  <Switch>
                      <Route path={'/recommend'} component={Recommendpage}/>
                      <Route path={'/app'} component={Apppage}/>
                      <Route path={'/signin'} component={Signin}/>
                      <Route path={'/signup'} component={Signup}/>
                      <Route path={'/write'} component={Writepage}/>
                      <Route path={'/'} component={Mainpage}/>
                  </Switch>
              </React.Fragment>
          </MuiThemeProvider>
      </BrowserRouter>
  );
}

const mapDispatchToProps=(dispatch)=>{
    return{
        autoSignin:()=>{dispatch(action.autoSignin())}
    }
}

export default connect(null,mapDispatchToProps)(App);

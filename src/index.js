import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from "redux-thunk";
import {createStore, combineReducers, applyMiddleware,compose} from "redux";
import {Provider} from 'react-redux'
import navigation from "./store/reducer/navigation";
import mainPage from "./store/reducer/mainpage";
import writePage from "./store/reducer/writepage";
import auth from "./store/reducer/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer=combineReducers({
    navigation:navigation,
    mainpage:mainPage,
    writepage:writePage,
    auth:auth
})

const store=createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)
))

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

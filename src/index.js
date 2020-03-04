import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from "./store/reducer";
const store = createStore(reducer);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Provider store={store}><App/></Provider>, wrapper) : false;

import React, {Component} from "react";
import './App.scss';
import {connect} from 'react-redux';
import HomePage from "./Containers/HomePage/HomePage";

class App extends Component {

    render() {
        return (
            <div className={'App'} style={{
                backgroundColor: this.props.theme.mainColor
            }}>
                <HomePage />
            </div>
        )
    }

    componentDidMount() {
        let prevWasDarkTheme = localStorage.getItem("dark");
        if (prevWasDarkTheme === "1") {
            this.props.toggleTheme();
        }
    }
}

const mapStateToProps = state => {
    return {
        theme: state.theme
    };
};
const mapDispatchToProps = dispatch => {
    return {
        toggleTheme: () => dispatch({type: "TOGGLE_THEME"})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

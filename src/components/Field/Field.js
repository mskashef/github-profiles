import React, {Component} from "react";
import './Field.scss';
import {connect} from "react-redux";

class Field extends Component {

    render() {
        let theme = this.props.theme;
        return this.props.isLoading ? (
            <div className={'emptyField'}
                 style={{backgroundColor: this.props.isLoading ? theme.mainLight : "none", width: this.props.w,
                 height: this.props.h}}/>
        ) : (
            <div className={'userInfoField'} style={{height: this.props.h}}>
                    <span className={'emptyField company'}
                          style={{color: this.props.isWebsite ? theme.userInfoWebsiteColor : theme.mainOppositeColor}}>
                        {
                            this.props.title ? (
                                <span style={{color: theme.mainDark}}>{this.props.title}: </span>
                            ) : null
                        }
                        {this.props.value}
                    </span>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        theme: state.theme
    };
};
const mapDispatchToProps = dispatch => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Field);

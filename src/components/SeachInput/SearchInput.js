import React, {Component} from "react";
import './SearchInput.scss';
import {connect} from "react-redux";

class SearchInput extends Component {

    state = {
        searchText: '',
        focused: false
    };
    focusHandler = () => {
        this.setState({focused: true});
    };
    blurHandler = () => {
        this.setState({focused: false});
    };

    searchBtnClickHandler = () => {
        this.focusHandler();
        this.props.onSubmitSearch(this.state.searchText);
    };

    render() {
        let theme = this.props.theme;
        return (
            <div>
                <div className={'searchInputTitleContainer'}
                     style={{color: theme.mainOppositeColor}}>{this.props.title}</div>
                <div
                    onFocus={this.focusHandler}
                    onBlur={this.blurHandler}
                    className={'searchInputContainer'} style={{
                    backgroundColor: theme.mainLight
                }}>
                    <input
                        style={{color: theme.mainOppositeColor}}
                        type={'search'}
                        value={this.state.searchText}
                        className={'searchInput'}
                        placeholder={'@username'}
                        onChange={(e) => {
                            this.setState({searchText: e.target.value})
                        }}/>
                    <button
                        id={this.state.searchText}
                        className={'searchButton'}
                        onClick={this.searchBtnClickHandler}
                        style={{
                            backgroundColor: this.state.focused === true ? theme.mainOppositeColor : theme.mainLight
                        }}>
                        {
                            this.props.isLoading ? (
                                <svg className={'spinning'} width="14" height="14" viewBox="0 0 14 14">
                                    <g id="Ellipse_2" data-name="Ellipse 2" fill="none"
                                       stroke={this.state.focused ? theme.focusedIconColor : theme.blurredIconColor}
                                       strokeLinecap="round" strokeWidth="1.5" strokeDasharray="30 50">
                                        <circle cx="7" cy="7" r="7" stroke="none"/>
                                        <circle cx="7" cy="7" r="6.25" fill="none"/>
                                    </g>
                                </svg>
                            ) : (
                                <svg id="Layer_2" data-name="Layer 2" width="18" height="18" viewBox="0 0 18 18">
                                    <g id="search">
                                        <rect id="Rectangle_2" data-name="Rectangle 2" width="18" height="18"
                                              fill="#a8a8a8" opacity="0"/>
                                        <path id="Path_2" data-name="Path 2"
                                              d="M16.222,15.162l-2.538-2.531a5.913,5.913,0,0,0,1.262-3.658,5.973,5.973,0,1,0-5.973,5.973,5.913,5.913,0,0,0,3.658-1.262l2.531,2.538a.75.75,0,1,0,1.06-1.06ZM4.493,8.973a4.48,4.48,0,1,1,4.48,4.48,4.48,4.48,0,0,1-4.48-4.48Z"
                                              transform="translate(-0.76 -0.76)"
                                              fill={this.state.focused ? theme.focusedIconColor : theme.blurredIconColor}/>
                                    </g>
                                </svg>
                            )
                        }
                    </button>
                </div>
                {
                    !!this.props.errorText ? (
                        <div
                            className={'searchInputErrorTextContainer'}
                            style={{color: theme.errorTextColor}}>
                            {this.props.errorText}
                        </div>
                    ) : null
                }
            </div>
        );
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
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);

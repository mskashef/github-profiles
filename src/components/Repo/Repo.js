import React, {Component, Fragment} from "react";
import './Repo.scss';
import {connect} from "react-redux";
import cloneLight from '../../assets/img/Repo/cloneLight.svg';
import langLight from '../../assets/img/Repo/langLight.svg';
import starLight from '../../assets/img/Repo/starLight.svg';
import cloneDark from '../../assets/img/Repo/cloneDark.svg';
import langDark from '../../assets/img/Repo/langDark.svg';
import starDark from '../../assets/img/Repo/starDark.svg';

class Repo extends Component {

    render() {
        let theme = this.props.theme;
        return (
            <div className={'repo'} style={{backgroundColor: theme.mainLight}}>
                {
                    this.props.isLoading ? null : (
                        <Fragment>

                            {/*------------------------------- / First Row / -------------------------------*/}

                            <div className={'repoFirstRowContainer'}>
                                <div className={'repoNameContainer'}
                                     style={{color: theme.repoTitleColor}}>{this.props.title}</div>
                                <div className={'repoForkContainer'}>
                                    <span style={{color: theme.repoForkedFromTEXTColor}}>Forked from </span>
                                    {
                                        this.props.forkedFrom ? (
                                            <span style={{color: theme.repoTitleColor}}>{this.props.forkedFrom}</span>
                                        ) : null
                                    }
                                </div>
                            </div>

                            {/*------------------------------- / Second Row / -------------------------------*/}

                            <div className={'repoDescriptionContainer'}
                                 style={{color: theme.mainOppositeColor}}>{this.props.description}</div>

                            {/*------------------------------- / Third Row / -------------------------------*/}

                            <div className={'repoIconsContainer'} style={{color: theme.mainOppositeColor}}>
                                <div className={'repoIconAndValueContainer'}>
                                    <img src={theme.dark ? langLight : langDark}/>
                                    {this.props.lang}
                                </div>
                                <div className={'repoIconAndValueContainer'}>
                                    <img src={theme.dark ? starLight : starDark}/>
                                    {this.props.star}
                                </div>
                                <div className={'repoIconAndValueContainer'}>
                                    <img src={theme.dark ? cloneLight : cloneDark}/>
                                    {this.props.clone}
                                </div>
                            </div>
                        </Fragment>
                    )
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
export default connect(mapStateToProps, mapDispatchToProps)(Repo);

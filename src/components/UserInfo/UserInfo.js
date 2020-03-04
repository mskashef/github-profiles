import React, {Component} from "react";
import './UserInfo.scss';
import {connect} from "react-redux";
import Field from "../Field/Field";

class UserInfo extends Component {

    render() {
        let theme = this.props.theme;
        return (
            <div className={'UserInfo'}>
                <div className={'userProfPicContainer'} style={{backgroundColor: theme.mainLight}}>
                    {
                        this.props.isLoading ? null : (
                            <img className={'userProfPic'} src={this.props.profPic}/>
                        )
                    }
                </div>

                <Field value={this.props.name} isLoading={this.props.isLoading} w={220} h={20} />
                <Field title={'Company'} value={this.props.company} isLoading={this.props.isLoading} w={130} h={15} />
                <Field title={'Location'} value={this.props.location} isLoading={this.props.isLoading} w={150} h={15} />
                <Field title={'Website'} value={this.props.website} isLoading={this.props.isLoading} w={110} h={15} isWebsite />

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
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);

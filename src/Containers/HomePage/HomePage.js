import React, {Component} from "react";
import './HomePage.scss';
import {connect} from "react-redux";
import sun from '../../assets/img/HomePage/sun.svg';
import moon from '../../assets/img/HomePage/moon.svg';
import SearchInput from "../../components/SeachInput/SearchInput";
import UserInfo from "../../components/UserInfo/UserInfo";
import Repo from "../../components/Repo/Repo";
import axios from 'axios';
class HomePage extends Component {
    state = {
        loading: false,
        repos: [],
        showUser: false
    };

    searchHandler = username => {
        this.setState({
            hasError: false,
            loading: true,
            repos: [{}, {}, {}, {}],
            showUser: true
        });
        axios.get(`https://api.github.com/users/${username}`).then(resp => {
            this.setState({
                loading: false,
                name: resp.data.name,
                company: resp.data.company,
                avatarUrl: resp.data.avatar_url,
                location: resp.data.location,
                website: resp.data.blog,
                repos: [{}, {}, {}, {}],
            });
            axios.get(resp.data.repos_url).then(resp => {
                this.setState({
                    repos: resp.data.reverse().filter((repo, index) => index < 4)
                })
            });

        }).catch(() => {
            this.setState({
                loading: false,
                hasError: true,
                repos: [],
                showUser: false
            })
        })
    };

    render() {
        let theme = this.props.theme;
        return (
            <div className={'HomePage'}>

                <div className={'topRow'}>
                    <h2 className={'WebPageTitle'} style={{color: theme.mainOppositeColor}}>GitHub Profiles</h2>
                    <img onClick={() => {
                        this.props.toggleTheme()
                    }} src={theme.dark ? sun : moon}/>
                </div>

                <div className={"homePageDescriptionContainer"} style={{color: theme.mainOppositeColor}}>
                    Enter a GitHub username,<br/>
                    to see the magic.
                </div>

                <SearchInput
                    title={'GitHub username:'}
                    isLoading={this.state.loading}
                    errorText={this.state.hasError ? 'User not found :(' : null}
                    onSubmitSearch={(text) => {
                        this.searchHandler(text);
                    }}/>


                    <div className={'userInfoContainer'}>
                        <div style={{width: 250}}>
                            {
                                this.state.showUser ? (
                                    <UserInfo
                                        isLoading={this.state.loading}
                                        profPic={this.state.avatarUrl}
                                        name={this.state.name}
                                        company={this.state.company}
                                        location={this.state.location}
                                        website={this.state.website}
                                    />
                                ) : null
                            }
                        </div>
                        <div className={'ReposContainer'}>
                            {
                                this.state.repos ? (
                                    this.state.repos.map(repo => (
                                        <Repo
                                            key={repo.id + '' + Math.random()}
                                            isLoading={!!!repo.name}
                                            title={repo.name}
                                            description={repo.description}
                                            lang={repo.language}
                                            star={repo.stargazers_count}
                                            clone={repo.forks_count}
                                            forkedFrom={repo.forkedFrom}/>
                                    ))
                                ) : null
                            }

                        </div>
                    </div>

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
    return {
        toggleTheme: () => dispatch({type: "TOGGLE_THEME"})
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect }  from 'react-redux'; // needed if we are calling an action
import { getGithubRepos }  from '../../actions/profile';
import Spinner from '../layout/Spinner'; // for fetching data
import Moment from 'react-moment';

const ProfileGithub = ({ 
    getGithubRepos,
    repos,
    username
}) => {

    useEffect(() => {
        getGithubRepos(username);
    }, [getGithubRepos]);

    return <div className="profile-github">
            <h2 className="text-primary my-1">Github Repos</h2>
            {repos===null ? <Spinner /> : (
                repos.map(repo => (
                    <div key={repo._id} className='repo bt-white p-1 my-1'>
                        <div>
                            <h4>
                                <a href={repo.html_url} target='_blank' rel='noopener no referrer'>{repo.name}</a>
                            </h4>
                            <p>{repo.description}</p>
                        </div>
                        <div>
                            <ul>
                                <li class="badge badge-primary">
                                    Stars: {repo.stargazers_count}
                                </li>
                                <li class="badge badge-dark">
                                    Watchers: {repo.watchers_count}
                                </li>
                                <li class="badge badge-light">
                                    Forks : {repo.forks_count}
                                </li>
                            </ul>
                        </div>
                    </div>
                ))
            )}
        </div>;
}

ProfileGithub.propTypes = {
    getGithubRepos:  PropTypes.func.isRequired,
    repos:  PropTypes.array.isRequired,
    username:  PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    repos: state.profile.repos,
});

export default connect(
    mapStateToProps, 
    { getGithubRepos } 
)(ProfileGithub);

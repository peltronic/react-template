import React, { Fragment, useEffect } from 'react'; /* useEffect: call get Profiles action from  ...*/
import PropTypes from 'prop-types';
import { connect }  from 'react-redux';
import { getPosts }  from '../../actions/post';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import PostForm from './PostForm';

const Posts = ({ 
    getPosts,
    post : {
        posts,
        loading
    }
}) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return loading ? <Spinner /> : (
        <Fragment>
            <h1 className="large text-primary">Posts</h1>
            <p className="lead">
                <i className="fas fas-user"></i> Welcome to the community
            </p>
            <PostForm />
            <div className="posts">
                {posts.map(post =>(
                    <PostItem key={post._id} post={post} />
                ))}
            </div>
        </Fragment>
    );
}

Posts.propTypes = {
    getPosts:  PropTypes.func.isRequired,
    post:  PropTypes.object.isRequired

}

// so...anything in state/reducer, we'll be able to get in this component
const mapStateToProps = state => ({
    post: state.post
});


export default connect(
    mapStateToProps, 
    { getPosts } 
)(Posts);

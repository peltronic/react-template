import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
//import axios from 'axios';

// setAlert is accessible  via props b/c of connect (?)
//const Register = (props) =>
const Register = ({ setAlert, register, isAuthenticated }) => { // destructure the props...can write setAlert instead of props.setAlert below

    // "Hooks":
    //      state is formData object
    //      setFormData is function used to update state
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        password:'',
        password2:''
    }); // 'use state hook'

    const { name, email, password, password2 } = formData; // destruct

    // in formData, we only want to change the name (or one field), so we need to make a copy of formDatausing the spread operator
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if ( password !== password2 ) {
            setAlert('Passwords must match', 'danger'); // via redux (connect)
        } else {
            register({ name, email, password }); // as pulled out from form data

            /* use axios
            const newUser = {
                name,
                email,
                password
            };
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                const body = JSON.stringify(newUser);
                const res = await axios.post('/api/users', body, config); // axios returns a promise
                console.log(res.data); // should be token
            } catch(err) {
                console.error(err.response.data);
            }
        }
        */
        }
    }

    if (isAuthenticated) {
        // react-router
        return <Redirect to="/dashboard" />
    }

    return (
        <Fragment>
            <div>Register</div>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}> 
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Name" 
                        name="name" 
                        value={name}
                        onChange={e => onChange(e)} // separate on change function, instead of calling setFormData directly
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        value={email}
                        onChange={e => onChange(e)}
                        name="email" 
                    />
                    <small className="form-text">
                        This site uses Gravatar so if you want a profile image, use a
                        Gravatar email
                    </small>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        minLength="6"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        value={password2}
                        onChange={e => onChange(e)}
                        minLength="6"
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link to='/login'>Sign In</Link>
            </p>
        </Fragment>
    );
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated // we just need isAutheniticated
});

//export default Register;
// connect: takes in (1) any state you want to map, (2) object with any actions you want to use, which
// allows us ot access props.setAlert 
export default connect(
    mapStateToProps, 
    { setAlert, register }
)(Register);

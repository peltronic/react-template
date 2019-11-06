import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Alert from './components/layout/Alert';
//import Navbar from './components/layout/Navbar';
//import Landing from './components/layout/Landing';
//import Login from './components/auth/Login';
//import Dashboard from './components/dashboard/Dashboard';
//import CreateProfile from './components/profile-forms/CreateProfile';
//import EditProfile from './components/profile-forms/EditProfile';
//import AddExperience from './components/profile-forms/AddExperience';
//import AddEducation from './components/profile-forms/AddEducation';
import Geolocation from './components/geolocations/Geolocation';
import Landing from './components/landing/Landing';
import Listings from './components/listings/Listings';
import ListingItem from './components/listings/ListingItem';
import Terms from './components/common/Terms';
import Privacy from './components/common/Privacy';
//import Profiles from './components/profiles/Profiles';
//import Posts from './components/posts/Posts';
//import Post from './components/post/Post';
//import PrivateRoute from './components/routing/PrivateRoute';
//import Register from './components/auth/Register';

// Redux
import { Provider } from 'react-redux';
import store from './store';
//import { loadUser } from './actions/auth';
//import setAuthToken from './utils/setAuthToken';

import './App.css';

/*
if (localStorage.token) {
    setAuthToken(localStorage.token);
}
*/

const App = () => {

    /*
        // use Effect hook %TODO %STUDYME
    useEffect(() => {
        // ~~ componentDidMount()
        store.dispatch(loadUser());
    }, []); // 2nd paramter with empty brackets prevents this from running continuously (ie doesnt'depend on anything from props or state)
    */

        return (
            <Provider store={store}>
                <Router>
                    <Fragment>
                        {/*
                    <Navbar />
                    <Route exact path='/' component={Landing} />
                    <section className="OFF-container">
                    */}
                        {/*
                        <Alert />
                        */}
                        <Switch>
                            <Route exact path='/' component={Landing} />
                            <Route exact path='/terms' component={Terms} />
                            <Route exact path='/privacy' component={Privacy} />
                            <Route path='/listings' component={Listings} />
                            <Route exact path='/listing/:id' component={ListingItem} />
                            <Route exact path='/region/:id' component={Geolocation} />
                            {/*
                            <Route exact path='/register' component={Register} />
                            <Route exact path='/login' component={Login} />
                            <Route exact path='/profiles' component={Profiles} />
                            <Route exact path='/profile/:id' component={Profile} />
                            <PrivateRoute exact path='/create-profile' component={CreateProfile} />
                            <PrivateRoute exact path='/edit-profile' component={EditProfile} />
                            <PrivateRoute exact path='/add-experience' component={AddExperience} />
                            <PrivateRoute exact path='/add-education' component={AddEducation} />
                            <PrivateRoute exact path='/posts' component={Posts} />
                            <PrivateRoute exact path='/posts/:id' component={Post} />
                            */}
                        </Switch>
                        {/*
                    </section>
                            */}
                </Fragment>
            </Router>
            </Provider>
        )
};

export default App;

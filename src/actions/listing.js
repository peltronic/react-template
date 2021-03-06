import axios from 'axios';

import { 
    GET_LISTINGS, 
    GET_DETAILS, 
    LISTING_ERROR
} from '../actions/types';


// Get all listings
//export const getListings = (query) => async dispatch =>
export const getListings = (query) => (dispatch) => {
    console.log('actions/listings::getListings()');
    console.log(query);
    const payload = {
        ...query,
        uid: 'foo',
        k: 'abc',
        l: 'ad',
        v: '1.2',
        n_ad: '5',
        ip: '68.168.82.68',
        co: 'us',
        o_fmt: 'JSON'
    };

    try {
        return new Promise(function(resolve, reject) {
            axios.get( '/rest/local', { params: payload } )
                .then( res => {
                    dispatch({
                        type: GET_LISTINGS,
                        payload: res.data
                        /*
                        payload: {
                            ...res.data,
                            geoslug: 'chicago'
                        }
                        */
                    });
                    resolve(res);
                });
        });
    } catch(err) {
        dispatch({
            type: LISTING_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

export const getDetails = (query) => (dispatch) => {

    console.log('actions/listings::getDetails(): BEGIN');
    console.log(query);

    const payload = {
        ...query,
        uid: '0717320a6078',
        k: '38zQLicqMz8xQPlCv89KH5WWfjeeoBeQQ9SWV6Jl3J2WnxpoJcBJdg==',
        l: 'ad',
        v: '1.2',
        n_ad: '5',
        ip: '68.168.82.68',
        co: 'us',
        o_fmt: 'JSON'
    };

    return new Promise(function(resolve, reject) {
        axios.get( '/rest/more_info', { params: payload } )
            .then( res => {
                console.log('actions/listings::getDetails(): dispatch GET_DETAILS');
                dispatch({
                    type: GET_DETAILS,
                    payload: res.data
                });
                resolve(res);
            }).catch(function (err) {
                console.log('actions/listings::getDetails(): dispatch LISTING_ERROR');
                dispatch({
                    type: LISTING_ERROR,
                    payload: { msg: err.message, status: 'error_more_info' }
                });
                reject(err);
            });
    });
}

/*
static myActionCreator(somevar) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: "myaction",
        something: somevar
      });

      resolve()
    });
  }
}
*/
/*
    const query = {
        i: 'Tax Consultants',
        lat: 40.7364911,
        long: -73.8779137,
        loc: 'Gallatin,TN'
    };
    */
/*
        new Promise(function(resolve, reject) {
            const res = await axios.get('/rest/local', {
                params: payload
            });
            dispatch({
                type: GET_LISTINGS,
                payload: {
                    ...res.data,
                    geoslug: 'chicago'
                }
            });
            resolve();
        });
        */

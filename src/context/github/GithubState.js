// Inside of here will be our initial state as well as our actions. Any API calls, and will help to clean up the App.js file. 

// importing our useReducer from reach, the axios so we can make API calls, the context and reducer files we made and the types that require state.
import React, { useReducer } from 'react'
import axios from 'axios'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'

import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types'


// Here we made our state that took in props and set a variable to our initial state.
const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    }

    // This GithubState will need to include all our actions.
    // Disbatching to reducer based on the actions.
    // We call an action (make a github api call), get the response and we dispatch a reponse back to the reducer.

    // This is the example of useReducer which takes in our reducer and the initialState we defined above. Boilerplate
    const [state, dispatch] = useReducer(GithubReducer, initialState)

    // Search Users
    // Changes all of the setStates to the various set____ methods defined above
    const searchUsers = async (text) => {
        setLoading();

        const res = await axios.get(
            `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );

        // Sets this to the items that come back from a search
        dispatch({SEARCH_USERS, payload: res.data});
    };


    // Get User


    // Get Repos


    // Clear Users


    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING});


    // What we want to return is the Provider. It will take in one prop 'value' which we want to set up like below and give it anything we want available inside the entire app.

    // We will also be passing in any methods that we define above (Get user, clear user, etc.)

    // Inside the JSX GithubContext.Provider we pass the {props.children} because we want to wrap our whole app in this provider.
    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers
        }}
    >
        {props.children}

    </GithubContext.Provider>
}


export default GithubState;
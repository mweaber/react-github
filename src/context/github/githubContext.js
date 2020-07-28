import {createContext} from 'react'

const githubContext = createContext()

export default githubContext;

// Import createContext, define, and export.
// This file was created first:

// GithubState is where all of our actions will live. All of our calls to the API will be inside this file.
  
// The Reducer will decide what will happen to our state based on the actions that live inside the GithubState
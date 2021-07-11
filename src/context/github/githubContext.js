import { createContext } from 'react';

const githubContext = createContext();

export default githubContext;


//Here we defined the githubContext, whose states we defined 
// in GithubState. Basically, any component that needs any of these states,
// or modifying them. The only thing that it need to do is to 
// import the contet, nad that gives the access to the states and
// the functions implemented in the context.
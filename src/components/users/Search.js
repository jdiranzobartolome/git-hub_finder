import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    // For creating states for a functional component with hooks, useState is used.
    // The name of the state, the name of the function to set it and then the default value
    // in this case an empy array, are defined. 
    const [text, setText] =useState('');
    
    //Since now we use hooks, and the component is functional, 
    // the functions need to be defined with const (functions inside the function of the component)
    const onChange = (e) => setText( e.target.value );

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please enter something', 'light');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    }
    
    // When working with hooks, the render is not needed, since component is functional. 
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input 
                    type="text" 
                    name="text" 
                    placeholder='Search Users...' 
                    value={text}
                    onChange={onChange} />
                <input type="submit" value='Search' className='btn btn-dark btn-block'/>
            </form>
            {githubContext.users.length > 0 && (
            <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>
            )}
            
        </div>
    )
}

//Since we use hooks, and the component is a functional component,
// not a class. Now the proptyes need to be defined as this, outside of
// the function for the component. 

export default Search


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Search = () => {
    const [username, setUsername] = useState('');
    // Use navigate to be able to redirect to a different page with a button
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handleSubmit = (e) => {
      // Perform actions with the entered username
      e.preventDefault();
      if (username.trim() !== '') {
        navigate(`/user/${username}`);
      }
    };

    return (
        
        <div className='search-form'>
        <h1>GitHub Finder</h1>
        <form onSubmit={handleSubmit}>
          <input
              type='text' 
              placeholder='User Name'
              name='input'
              value={username}
              onChange={handleChange}
          />
          <input
              type='submit'
              className='search-btn'
              value='SEARCH'
          />
        </form>
      </div>
    )
  }


export default Search
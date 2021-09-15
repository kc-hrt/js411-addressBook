import React, { useState, useEffect } from 'react';
import User from './components/user';

const URL = 'https://randomuser.me/api?results=25';

const App = () => {
  const [listUsers, setUsers] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setLoaded(true)
        setUsers(data.results)
      })
  }, [])

  if(!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className='grid'>
        {listUsers.map(( user, index ) => {
          return <User key={index} user={user} />
        })}
      </div>
    )
  }
}

export default App;
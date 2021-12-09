import React, {useState} from 'react';
import Tweet from './Tweet'

function App (){
  const [users, setUsers] = useState([
    {name: 'Adam', message: 'Hello', likes: '100'},
    {name: 'Michael', message: 'Thats what she said', likes: '420'},
    {name: 'Dwight', message: 'Beet farms', likes: '1'}
  ])
  return (
    <div className='app'>
      {users.map(user => (
        <Tweet name={user.name} message={user.message} likes={user.likes}/>
      ))}
    </div>
  )
}

export default App;
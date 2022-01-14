import { useSelector } from 'react-redux';
import './App.css';

function App() {

  const userList = useSelector((state) => state.users.value)

  return (
    <div className="App">
      <div className="addUser">
        <input type="text" placeholder="Name..." />
        <input type="text" placeholder="Username..." />
        <button>Add user</button>
      </div>
      <div className="displayUser">
        {userList.map((user) => (
          <>
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
            <input type="text" className="text" />
            <button>Change name</button>
            <button>Change username</button>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import UserClass from './UserClass';
import UsersFunction from './UsersFunction';

function App() {
  return (
    <div className="App">
      <h2>Class Component</h2>
      <UserClass />
      
      <h2>Functional Componnent</h2>
      <UsersFunction/>
    </div>
  );
}

export default App;

//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import ClickCounter from './components/Counter'
import DataForm from './components/PersonalData';
import ChangeColor from './components/BackgroundChanger';
import SetTimer from './components/Timer';
import { UserProvider } from './components/UserContext';
import ProfileEdit from './components/ProfileEdit';
import ProfileInfo from './components/ProfileInfo';
import { Authentication } from './components/Authentication/AuthContext';
import Login from './components/Authentication/Login';
import Logout from './components/Authentication/Logout';
import Profile from './components/Authentication/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ChangeColor />
      <ClickCounter />
      <DataForm />
      <SetTimer />
      <UserProvider>
        <h1>User Profile</h1>
        <ProfileInfo />
        <ProfileEdit />
      </UserProvider>

      <Authentication>
        <h1>User Authentication Simulation</h1>
        <Login />
        <Profile />
        <Logout />
      </Authentication>
    </div>
  );
}

export default App;

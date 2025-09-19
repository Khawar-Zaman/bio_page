
import './App.css';
import profilePic from './profile.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className="bio-container">
       <img src={profilePic} alt="My profile picture" className="profile-img" /> 
      <h1>Khawar Zaman</h1>
      <p>
        I am a passionate developer with a strong interest in full stack development technologies. 
        My goal is to create intuitive and user-friendly applications that solve real-world problems.
      </p>
      <ul className="skills-list">
        <li>Node.Js</li>
        <li>React</li>
        <li>CSS</li>
      </ul>
    </div>
      </header>
    </div>
  );
}

export default App;

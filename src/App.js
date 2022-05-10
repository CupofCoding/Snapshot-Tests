import logo from './logo.svg';
import './App.css';
import GitHubCard from './components/GitHubCard';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>GitHub Credentials</h2>

        <div>
          <GitHubCard />
        </div>
      </header>
    </div>
  );
}

export default App;
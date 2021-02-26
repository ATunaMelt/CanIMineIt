import './App.css';
import TopBar from './TopBar';
import Main from './Main';

function App() {
  return (
    <div className='App'>
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <TopBar />
          <div className='navbar-header'></div>
        </div>
      </nav>
      <header className='App-header'>
        <Main />
      </header>
    </div>
  );
}

export default App;

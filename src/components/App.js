// import { Table } from 'react-bootstrap';
// import logo from '../logo.svg';
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
        {/* <img src={logo} className='App-logo' alt='logo' /> */}
        <Main />
        Edit <code>src/App.js</code> and save to reload.
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

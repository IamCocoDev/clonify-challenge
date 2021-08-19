//import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Route path='/' component={NavBar} />
      <Route path='/' component={Main} />
    </div>
  );
}

export default App;

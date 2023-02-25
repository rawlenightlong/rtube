
import './App.css';
import Index from './pages/Index';

import { Outlet } from 'react-router-dom';
import CreateForm from './components/createform';
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <Nav/>
        <Outlet/>
    </div>
  );
}

export default App;

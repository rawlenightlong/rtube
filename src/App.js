
import './App.css';
import Index from './pages/Index';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Outlet/>
    </div>
  );
}

export default App;

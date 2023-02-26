import Footer from './components/footer';
import './App.css';


import { Outlet } from 'react-router-dom';

import Nav2 from './components/nav2';

function App() {
  return (
    <div className="App">
      <header><Nav2/></header>
        <Outlet/>
        <footer><Footer/></footer>
    </div>
  );
}

export default App;

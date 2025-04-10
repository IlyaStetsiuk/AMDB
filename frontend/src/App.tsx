import React from 'react';
import './styles/main.css';
import './Components/Small/Buttons/buttons.css';
import Home from './Pages/Home/Home';
import Menu from './Components/Small/Menu/Menu';
import { BrowserRouter } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;

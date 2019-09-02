import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headline from './components/Headline/Headline';
import MyResponsiveBar from './components/MyResponsiveBar/MyResponsiveBar';

import data from './assets/data.js';

function App() {
  const greating = 'Hello Nivo!';

  return (
    <div className="App">
      <Headline value={greating} />

      <MyResponsiveBar data={data} />
    </div>
  );
}

export default App;

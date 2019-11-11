import React from 'react';
import './App.css';
import WelcomeMessage from "./components/WelcomeMessage"
import EventTitle from "./components/EventTitle"
import FormSpace from "./components/FormSpace"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeMessage />
        <EventTitle />
      </header>
      <div id="body">
        <FormSpace />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;

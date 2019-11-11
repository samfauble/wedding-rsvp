import React from 'react';
import './App.css';
import WelcomeMessage from "./components/WelcomeMessage"
import EventTitle from "./components/EventTitle"
import FormSpace from "./components/FormSpace"
import Attendance from "./components/Attendance"
import NumberAttending from "./components/NumberAttending"
import SelectDishType from "./components/SelectDishType"
import Submit from "./components/Submit"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeMessage />
        <EventTitle />
      </header>
      <body>
        <FormSpace>
          <Attendance />
          <NumberAttending />
          <SelectDishType />
          <Submit />
        </FormSpace>
      </body>
      <footer></footer>
    </div>
  );
}

export default App;

import React from 'react';
import Header from '../components/Header/Header';
import Calendar from '../components/Calendar/Calendar';
import Scroll from '../components/Scroll/Scroll';
// import NewEvent from '../components/NewEvent/NewEvent';
import Events from '../components/Events/Events';
import './App.css';

function App() {
  return (
    <div id="App">
      <Header/>
      <div>
        <Scroll>
          <Events/>
        </Scroll>
	      <Calendar/>
      </div>
      {/*<Main/>
      <NewEvent/>
      <Events/>*/}
    </div>
  );
}

export default App;

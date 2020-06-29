import React from 'react';
import Clock from '../Clock/Clock';

import './Header.css';

function Header() {
  return (
    <div id="Header">
	    <h1>Arun-calendar</h1>
	    <ul>
	    	<li>Today</li>
		    <li>left</li>
		    <li>right</li>
		    <li>Month</li>
		    <li>Year</li>
	    </ul>
	    <input type="text" name="text" placeholder='search events'/>
	    <button>search</button>
	    <select>
	    	<option>Day</option>
	    	<option>Week</option>
	    	<option>Month</option>
	    	<option>Year</option>
	    </select>
	    <Clock/>
    </div>
  );
}

export default Header;

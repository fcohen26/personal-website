import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
// import $ from 'jquery';
// import './style.scss';

const App = () => <div className="test">All the REACT are belong to us!</div>;

ReactDOM.render(<App />, document.getElementById('main'));

// let seconds = 0;
// function incrementSeconds() {
//   seconds += 1;
//   $('#main').html(`You have been here for ${seconds} seconds!`);
// }
// setInterval(incrementSeconds, 1000);

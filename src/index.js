import $ from 'jquery';
import './style.scss';

let seconds = 0;
function incrementSeconds() {
  seconds += 1;
  $('#main').html(`You have been here for ${seconds} seconds!`);
}
setInterval(incrementSeconds, 1000);

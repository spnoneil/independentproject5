import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Age, pastExpectancy } from './galactic.js';

$(document).ready(function() {
  $('#form').submit(function(e) {
    e.preventDefault;
    const userName = $("#userInput").val();
    const userAge = $("#nameInput").val();
    console.log(userName);
    console.log(userAge);
    let age = new Age(userAge);
    age.calculateAge();
    age.lifeExpectancy();
    age.yearsLeft();
    pastExpectancy(age);
    console.log(age);
  });
});
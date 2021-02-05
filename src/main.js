import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Age, pastExpectancy } from './galactic.js';

$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    const userName = $("#nameInput").val();
    const userAge = parseInt($("#ageInput").val());
    let age = new Age(userAge);
    let expectantCheck = pastExpectancy(age)
    age.calculateAge();
    age.lifeExpectancy();
    age.yearsLeft();
    console.log(pastExpectancy(age))
    console.log(age);
    $("#hide").show();
    $("#nameOutput").text(userName);
    if (pastExpectancy(age) = []) {
      $("#earthOutput").append("<li>" + `On Earth, you're ${age.earthAge} years old, with an average life expectancy of ${age.earthExpectancy}. This means you have ${age.earthYearsLeft} years left! Congratulations?` + "</li>");
      $("#mercuryOutput").append("<li>" + `On Mercury, you're ${age.mercuryAge} years old, with an average life expectancy of ${age.mercuryExpectancy}. This means you have ${age.mercuryYearsLeft} years left! Congratulations?` + "</li>");
      $("#venusOutput").append("<li>" + `On Venus, you're ${age.venusAge} years old, with an average life expectancy of ${age.venusExpectancy}. This means you have ${age.venusYearsLeft} years left! Congratulations?` + "</li>");
      $("#marsOutput").append("<li>" + `On Mars, you're ${age.marsAge} years old, with an average life expectancy of ${age.marsExpectancy}. This means you have ${age.marsYearsLeft} years left! Congratulations?` + "</li>");
      $("#jupiterOutput").append("<li>" + `On Jupiter, you're ${age.jupiterAge} years old, with an average life expectancy of ${age.jupiterExpectancy}. This means you have ${age.jupiterYearsLeft} years left! Congratulations?` + "</li>");
    }
  });
});
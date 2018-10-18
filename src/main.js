import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { GhibliSearch } from './ghibli.js';
// const Promise = require('es6-promise').Promise;

$(document).ready(function() {
  $("#submit-form").submit(function(event) {
    event.preventDefault();
    $("#result").show();
    // let gender = $("#gender").val();
    // let species = $("#species").val();



    let ghibliSearch = new GhibliSearch();
    let promise = ghibliSearch.getPeople();
    // let genderPromise = ghibliSearch.getPeople();

    promise.then(function(response) {
      let body = JSON.parse(response);

      // for(var i=0; i < body.length; i++){
      //   if(body[i].gender == gender) {
      //
      //   }
      // }
      // for(var i=0; i < body.bikes.length; i++) {
      //   let title = body.bikes[i].title;
      //   $(".list").append("<li>" + title +"</li>");
      // }



      $("#result").append(`${body[0].species}`);

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});

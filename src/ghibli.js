var Promise = require('es6-promise').Promise;

export class GhibliSearch {
  getSpecies() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let speciesUrl = `https://ghibliapi.herokuapp.com/species`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", speciesUrl, true);
      request.send();
    });
  }

  getPeople() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let peopleUrl = `https://ghibliapi.herokuapp.com/people`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", peopleUrl, true);
      request.send();
    });
  }
}

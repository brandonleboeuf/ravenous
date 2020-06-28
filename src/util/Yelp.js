/*
Client ID
lDx9D92jXnyDB470f95pAQ
*/

const apiKey =
  "RIbJsHgpMv2_dFvBO1RKNz6W67lGwTfAMTVuxDzTDMMm4wpISJQC0-qPDItxHDA2sGi3IlAjHKWvpbte353lOLDAjvozos1I3dyv-eihBsckbRJKfAB4U1Igz9T4XnYx";

const Yelp = {};

function search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
}

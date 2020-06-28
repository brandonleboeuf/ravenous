/*
Client ID
lDx9D92jXnyDB470f95pAQ
*/
const apiKey =
  "RIbJsHgpMv2_dFvBO1RKNz6W67lGwTfAMTVuxDzTDMMm4wpISJQC0-qPDItxHDA2sGi3IlAjHKWvpbte353lOLDAjvozos1I3dyv-eihBsckbRJKfAB4U1Igz9T4XnYx";

const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        }
      });
  },
};

export default Yelp;

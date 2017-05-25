module.exports = function(){
  var faker = require("faker");
  var _ = require("lodash");
  return  {
    products: _.times(100, function (n) {
      return {
        id: n,
        country: faker.address.country(),
        year: faker.random.number({
                  'min': 2015,
                  'max': 2020
                 }),
        crop: faker.random.arrayElement(["Soy", "Corn", "Cotton", "Weat"]),
        stress: faker.random.arrayElement(["WUE", "NUE", "SUE"])
      }
    })
  }
}
var dbconnect = require('./services/persistence/database.js');

var test = {name: "test",rating:10.0,season:1,episodes: 123,running:true,air_day:"Tuesday",my_rating: 9.0};
//var val = JSON.parse(test);

console.log(process.argv);

dbconnect.addAnimeRows(process.argv[2],test);
/* Add all the required libraries*/

/* Connect to your database using mongoose - remember to keep your key secret*/

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

mongoose.connect(config.db.uri, {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify',false);


var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.findOne({name: 'Library West'}, function (err,data) {
   		console.log(data);
   });
 
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */

   Listing.findOneAndRemove({code: 'CABL'}, function (err,data) {
   	    if (err) return handleError(err);
   	    console.log(data); 
   });
};
var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
    
    Correct Address: 1953 Museum Rd, Gainesville, FL 32603

   */
   Listing.findOneAndUpdate({name: 'Phelps Laboratory'}, {address: '1953 Museum Rd, Gainesville, FL 32603'}, function (err,data) {
		if (err) return handleError(err);
   		console.log(data);
   });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   Listing.find({}, function(err,data) {
   		if(data) {
   			for (var i = 0; i < data.length; i++) {
   				console.log(data[i]);
   			}
   		}
   });

};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();

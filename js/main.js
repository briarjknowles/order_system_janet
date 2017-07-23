 // Initialize Firebase

  var config = {
    apiKey: "AIzaSyBOlxr6IMyQFigRGY9gtmHd4ead8vCeFbQ",
    authDomain: "janet-knowles-orders.firebaseapp.com",
    databaseURL: "https://janet-knowles-orders.firebaseio.com",
    projectId: "janet-knowles-orders",
    storageBucket: "",
    messagingSenderId: "429456216456"
  };

  firebase.initializeApp(config);

var database = firebase.database();

// cart array, not sure if it's neccessary since I have firebase but... 

var cart = [];

// get rid of all event default actions

$('li').on('click', function(e) {
	e.preventDefault();
});

$('a').on('click', function(e) {
	e.preventDefault();
});

// collect info from user form with event listener

$('#addToCart').on('click', function(e) {
	e.preventDefault();

	var stringPrice = $('#price').text();

	var itemPrice = parseInt(stringPrice);

	var stringQuantity = $('#quantity').val();

	var quantity = parseInt(stringQuantity);

	var orderPrice = itemPrice * quantity;

	// create section for orders in db

	var orderData = database.ref('orders');

	// add order info to database

	orderData.push({

	numberOfItem: quantity,
	priceOfItem: itemPrice,
	total: orderPrice

	});

});

//Toggle Review section

$('#reviewToggle').on('click', function(e) {
	e.preventDefault();

	$('.reviewSection').toggle();

});

// comment values save to firebase

$('#submitReview').on('click', function(e) {
	e.preventDefault();

	var userName = $('#userName').val();

	$('#userName').val('');

	var userComment = $('#comment').val();

	$('#comment').val('');

	// create db section for comments

	var commentReference = database.ref('comments');

	//add comment to db

	commentReference.push({
		name: userName,
		comment: userComment
	});
});

//get comments when page loads

function getComments() {

	//listening for value changes in database

	database.ref('comments').on('value', function(results) {

		var allComments = results.val();

		var reviews = [];

		for (var item in allComments) {

			var context = {

				// not sure if I'm using the appropriate values here... taking it from the database value names atm, which makes sense

				name: allComments[item].name,
				comment: allComments[item].comment,
				commentId: item
			};

			var source = $('#comment-template').html();

			var template = Handlebars.compile(source);

			var commentListElement = template(context);

			reviews.push(commentListElement);

		}

		//not sure what's happening here - M?

		$('#reviews').empty();

		for (var i in reviews) {

			$('#reviews').append(reviews[i])
			
		}

	});
}

getComments();

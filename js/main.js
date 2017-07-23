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

var cart = [];

var reviews = [];

$('li').on('click', function(e) {
	e.preventDefault();
});

$('a').on('click', function(e) {
	e.preventDefault();
});

$('#addToCart').on('click', function(e) {
	e.preventDefault();

	var stringPrice = $('#price').text();

	var itemPrice = parseInt(stringPrice);

	var stringQuantity = $('#quantity').val();

	var quantity = parseInt(stringQuantity);

	var orderPrice = itemPrice * quantity;

	// create section for orders in db

	var orderData = database.ref('orders')

	// add order info to database

	orderData.push({

	numberOfItem: quantity,
	priceOfItem: itemPrice,
	total: orderPrice

	});

});

$('#reviewToggle').on('click', function(e) {
	e.preventDefault();

	$('.reviewSection').toggle();

});

$('#submitReview').on('click', function(e) {
	e.preventDefault();

	// create section for orders in db

	var userName =

	var userComment = 

	var commentData = database.ref('comments');

});

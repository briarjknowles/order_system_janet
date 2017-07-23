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

	console.log(orderPrice);

});

$('#reviewToggle').on('click', function(e) {
	e.preventDefault();
})

$('#submitReview').on('click', function(e) {
	e.preventDefault();
});

$(document).ready(function() {

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBlCyslg0Enpg29zDKk17j8UhVoIq2sEA4",
  authDomain: "livechat-170317.firebaseapp.com",
  databaseURL: "https://livechat-170317.firebaseio.com",
  projectId: "livechat-170317",
  storageBucket: "livechat-170317.appspot.com",
  messagingSenderId: "208050247301"
};
firebase.initializeApp(config);
var myFirebase = firebase.database()

$("#post").on("click", function(){
  event.preventDefault();
				//alert is just a placeholder, this will change to something else that's not really annoying
				
       
        var msgUser =$("#username").val().trim();
        var msgText = $("#text").val().trim();
		// if statement would go here for rules on the input text
    myFirebase.ref("/UserInput").push({
      username: msgUser,
      text: msgText
    });
    var nameSaver = msgUser;
    console.log(nameSaver);
    
  });

var startListening = function() {
  myFirebase.ref("/UserInput").on('child_added', function(snapshot) {
    var msg = snapshot.val();
    console.log(msg);
    
    var msgUsernameElement = $("<b>");
    msgUsernameElement = msg.username;
    
    var msgTextElement = $("<p>");
    msgTextElement  = msg.text;
    
    var msgElement = $("<div>");
				//need css to format these divs to make them look nice
        msgElement.append(msgUsernameElement + ': ');
        msgElement.append(msgTextElement);

        $("#results").append(msgElement);
      });
}
startListening();
})

  // NEWS API KEY 0b442f6c24fd47258f41f0daf201f118
  // https://newsapi.org/account
  
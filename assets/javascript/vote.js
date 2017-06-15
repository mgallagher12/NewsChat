
$("#upvote").on("click", function(){
    var CNNup = $("#upCNN").text();
    CNNup ++;
    console.log(CNNup);
    $("#upCNN").empty();
    $("#upCNN").append(CNNup);
    
})
$("#downvote").on("click", function() {
    var CNNdown = $("#downCNN").text();
    CNNdown ++;
    $("#downCNN").empty();
    $("#downCNN").append(CNNdown);
})


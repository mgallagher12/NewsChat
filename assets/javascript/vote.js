
$("#buttonupvote").on("click", function(){
    $('#imggood').show();
    var voteUp = $("#upVote").text();
    voteUp++;
    console.log(voteUp);
    $("#upVote").empty();
    $("#upVote").append(voteUp);
    $('#imggood').fadeOut(3000);
 
    
})
$("#buttondownvote").on("click", function() {
   $("#imgbad").show()
    var voteDown = $("#downvote").text();
    voteDown ++;
    $("#downvote").empty();
    $("#downvote").append(voteDown);
    $("#imgbad").fadeOut(3000);
})
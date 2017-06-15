
$("#buttonupvote").on("click", function(){
    var voteUp = $("#upVote").text();
    voteUp++;
    console.log(voteUp);
    $("#upVote").empty();
    $("#upVote").append(voteUp);
    
    
})
$("#buttondownvote").on("click", function() {
    var voteDown = $("#downvote").text();
    voteDown ++;
    $("#downvote").empty();
    $("#downvote").append(voteDown);
})


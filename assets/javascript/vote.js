<<<<<<< HEAD
=======

>>>>>>> 62a32df1ce4a0c32b9386cb12d99242445dfbfb6
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
<<<<<<< HEAD
})
=======
})

>>>>>>> 62a32df1ce4a0c32b9386cb12d99242445dfbfb6

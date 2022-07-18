var likeDislike = new Firebase("https://like-unlike.firebaseio.com/");

var like;
var dislike;

likeDislike.on("value", function(likeDislikeData) {
  var data = likeDislikeData.val();
  like = data.like;
  dislike = data.dislike;
});

$('.like-container').on('click', function() {
  likeDislike.update({
    like: like+1
  });
  console.log("Number of likes:" + like);
});

$('.dislike-container a').on('click', function() {
  likeDislike.update({
    dislike: dislike+1
  });
  console.log("Number of dislikes: " + dislike);
});
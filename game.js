var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"];
var gamepattern=[];
var j=0;
var i=0;
function nextSequence()
{
  userClickedPattern=[];
  j++;
  $("#level-title").html("Level "+j);
   var  randomnumber=Math.floor(Math.random()*4);
var randomChosenColour=buttonColours[randomnumber];
gamepattern.push(randomChosenColour);
$("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeIn(100);   //for flash effect
playSound(randomChosenColour);
}
$(".btn").click(function(){
  var userChosenColour=this.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});
function animatePress(currentColour)
{
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  },100);
}
function playSound(name)
{
  if(name=="red")
  {
    var redd= new Audio("red.mp3");
    redd.play();
  }
  if(name=="blue")
  {
    var bluee= new Audio("blue.mp3");
    bluee.play();
  }
  if(name=="green")
  {
    var greene= new Audio("green.mp3");
    greene.play();
  }
  if(name=="yellow")
  {
    var yellowe= new Audio("yellow.mp3");
    yellowe.play();
  }
  if(name=="wrong")
  {
    var yele= new Audio("wrong.mp3");
    yele.play();
  }
}
$("body").keypress(function(event)
{
  if(i==0){
 nextSequence();
 i++;
}
});
//Check answer function
function checkAnswer(currentLevel)
{
  if (gamepattern[currentLevel] === userClickedPattern[currentLevel])
  {
        console.log("success");
 if (userClickedPattern.length === gamepattern.length)
 {
   setTimeout(function () {
          nextSequence();
        }, 1000);
 }
}
 else
 {
   console.log("wrong");
   playSound("wrong");
   $("body").addClass("game-over");
   setTimeout(function()
 {
    $("body").removeClass("game-over");
 }, 200);
 $("#level-title").html("Game Over, Press Any Key to Restart");
 startover();
 }
}
function startover()
{
j=0;
gamepattern=[];
i=0;
}

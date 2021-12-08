console.log("**** start the Game ****")

var readlinesync=require("readline-sync");
var userName=readlinesync.question("what's your name:-");
console.log("Welcome" +"  "+ userName +" "+"to do you General Knowledge")
var scour=0;

function play(Question,Answere){
    var userName=readlinesync.question(Question);
    if(userName.toUpperCase()===Answere.toUpperCase()){
        console.log("Right")
        scour=scour+1

       
    }else{
        console.log("wrog")
    }
    console.log("current scour=",scour)
        console.log("------------------------------")
}
const Question=[{
    Question:"Giddha is the folk dance of ?:-",
    Answere:"Punjab"
},{
    Question:" India lies in which continent ?:-",
    Answere:"Asia"
},{
    Question:"Which is the animal referred as the ship of the desert?:-",
    Answere:"Camel"
},{
    Question:" Which organ purify our blood? ?:-",
    Answere:"Kidney",
},{
    Question:" Cry of lion is called? ?:-",
    Answere:"Roar",
},{
    Question:" How many players are there in a cricket team ?:-",
    Answere:"11",
},{
    Question:" Longest river in the world is ?:-",
    Answere:"Nile",
},{
    Question:" A place where bees are kept is called ?:-",
    Answere:"Aviary"
}]

for(var i=0;i<Question.length;i++){
    var currentquestion=Question[i];
    play(currentquestion.Question,
        currentquestion.Answere)
}
console.log("YAY! your scored",scour)

console.log("sucessfuly")
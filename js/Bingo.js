var bingoArray = ["Adelaide", "Freebooting", "Grey sighs into the microphone before a point",
"Squarespace", "Periodic Videos, Numberphile, or Objectivity", "Grey rant", "The vinyl episode is mentioned",
"Something relate to Everest", "Fit-o-tron 5000", "\"The Tims\"", "Elon Musk", "Grey gets patriotic about the USA",
"\"The Reddit\"", "Brady doesn't want a solution to his problem", "Wikipedia vandalization endorsement", "\"The spiritual home of Numberphile\"",
"Flags", "Grey missed an important thing on Twitter", "Brady story", "Audrey and Lulu", "Harry's Razors",
"\"Hard as nails\"", "Grey says the word \"underlying\"", "Grey complains about Plane Crash Corner", "Toothbrush developments",
"Corporate Compensation Corner", "\"Unofficial Official [something]\"", "Listener question corner", "Grey goes out of his way to avoid human interaction",
"Disappointment with Apple", "Grey picks apart Brady's analogies", "Sportsball corner", "Abrupt ending to the podcast",
"\"Infuriating\"", "\"Pleasing\"", "\"Experience\"", "\"Vastly\"", "Grey feigning interest and Brady pretending it's genuine",
"Grey says \"non-zero\"", "Mispronunciation of [Derp] from [Verkastablium]", "Has Grey made a video", "\"Due to, in no small part...\"",
"Humblebrag", "Brady says \"there's something magical\"", "Grey says \"why Brady?\""];

//var bingoTable = document.getElementsByClassName("bingo-table");

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  var randomIndex = 0;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function generateTable(size) {
    var shuffledArray = shuffle(bingoArray);
    var index = 0;
    for (var i = 0; i < size; i++) {
        $(".bingo-table").append("<div class=\"flex-row fr-"+ i + "\">");
        for (var j = 0; j < size; j++) {
            $(".fr-"+i).append("<div class=\"flex-column\" id=\"column-" + index + "\">" + shuffledArray[index] + "</div>");
            index++;
        }
        $(".bingo-table").append("</div>");
    }
}

$(document).ready(function(){
    generateTable(5);
    /*var row = 0;
    var column = 0;
    $(".bingo-table").find(".flex-row").on("click", function() {
        row = ($(this).index()+1);
    });*/
    /*$(".bingo-table").on("click", function (e) {
       myRowIndex = $(this).parent().index();
        myColIndex = $(this).index();
        alert("Row: " + (myRowIndex + 1) + "\nColumn: " + (myColIndex + 1));
        e.stopPropagation();
    });*/
    $('.bingo-table').find('.flex-row').click( function(){
  console.log('You clicked row '+ ($(this).index()+1) );
        console.log('You clicked column '+ ($(this).index("flex-row")+1));
});
});

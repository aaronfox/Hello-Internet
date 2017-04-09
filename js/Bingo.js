var bingoArray = ["Adelaide", "Freebooting", "Grey sighs into the microphone before a point", "Squarespace", "Periodic Videos, Numberphile, or Objectivity", "Grey rant", "The vinyl episode is mentioned", "Something related to Everest", "Fit-o-tron 5000", "\"The Tims\"", "Elon Musk", "Grey gets patriotic about the USA", "\"The Reddit\"", "Brady doesn't want a solution to his problem", "Wikipedia vandalization endorsement", "\"The spiritual home of Numberphile\"", "Flags", "Grey missed an important thing on Twitter", "Brady story", "Audrey and Lulu", "Harry's Razors", "\"Hard as nails\"", "Grey says the word \"underlying\"", "Grey complains about Plane Crash Corner", "Toothbrush developments", "Corporate Compensation Corner", "\"Unofficial Official [something]\"", "Listener question corner", "Grey goes out of his way to avoid human interaction", "Disappointment with Apple", "Grey picks apart Brady's analogies", "Sportsball corner", "Abrupt ending to the podcast", "\"Infuriating\"", "\"Pleasing\"", "\"Experience\"", "\"Vastly\"", "Grey feigning interest and Brady pretending it's genuine", "Grey says \"non-zero\"", "Mispronunciation of [Derp] from [Verkastablium]", "Has Grey made a video", "\"Due to, in no small part...\"", "Humblebrag", "Brady says \"there's something magical\"", "Grey says \"why Brady?\""];

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
    
    // assign each column a div class so that the columns can be resized properly by their size
    var diffClass = "";
    switch (Number(size)) {
        case 3:
            diffClass = "easy";
            break;
        case 5:
            diffClass = "medium";
            console.log("changed diffClass to medium");
            break;
        case 7:
            diffClass = "hard";
            }

    var index = 0;
    for (var i = 0; i < size; i++) {
        $(".bingo-table").append("<div class=\"flex-row fr-"+ i +  "\">");
        for (var j = 0; j < size; j++) {
            $(".fr-"+i).append("<div class=\"flex-column " + diffClass + "\"" +  "id=\"column-" + index + "\">" + shuffledArray[index] + "</div>");
            index++;
        }
        $(".bingo-table").append("</div>");
    }
}

function removeTable(){
  $(".flex-row").remove();
}

function checkWinner(eventId, size) {
    var boolArray = [];
    
    // convert each block to 0's for unchecked and 1's for checked;
    for (i = 0; i < size * size; i++)
        {
            if ($("#column-" + i).css("opacity") == 1) {
                boolArray.push("0");
            }
            else {
                boolArray.push("1");
            }
        }
    // convert array to look like the bingo board for easy win checking
    var arrOfArrs = [];
    var count = 0;
    for (var i = 0; i < size; i++) {
        var arr = [];
        for (var j = 0; j < size; j++) {
            arr.push(boolArray[count]);
            count++;
        }
        arrOfArrs.push(arr);
    }
    
    for (var i = 0; i < size; i++) {
        // check for horizontal bingo
        var acrossCheck = true;
        for (var j = 0; j < size; j++) {
            if (arrOfArrs[i][j] != 1) {
                acrossCheck = false;
                console.log(acrossCheck);
            }
        }
        if (acrossCheck) {
            return true;
        }
    }
    
    for (var i = 0; i < size; i++) {
        var downCheck = true;
        for (var j = 0; j < size; j++) {
            if (arrOfArrs[j][i] != 1) {
                downCheck = false;
            }
        }
        if (downCheck) {
            return true;
        }
    }
    return false;
}
$(document).ready(function(){
  var ARRAY_SIZE = 5;
  $(".bingo-table").on("click", function(event) {
    var opacity = $("#" + event.target.id).css("opacity");
    if (opacity == 1) {
      $("#" + event.target.id).css("opacity", "0.4");
        if(checkWinner(event.target.id, ARRAY_SIZE)) {
            alert("WINNER!");
        }
    }
    else{
      $("#" + event.target.id).css("opacity", "1");
    }
  });
  $(".button").click(function (event) {
    // difficulty level id's are pre-set to be the appropriate array-size number
    ARRAY_SIZE = event.target.id;
    removeTable();
    generateTable(ARRAY_SIZE);
  })
});

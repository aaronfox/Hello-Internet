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

function generateTable(size) {
    var index = 0;
    for (var i = 0; i < size; i++) {
        $(".bingo-table").append("<tr>row-" + i)
        for (var j = 0; j < size; j++) {
            $(".bingo-table").append("<td id=\"" + index + "\">" + bingoArray[index] + "</td>");
            index++;
        }
        $(".bingo-table").append("</tr>")
    }
}

$(document).ready(function(){
    /*$(".bingo-table").append("<tr>ROW ONE");
    $(".bingo-table").append("<td>cell one</td>");
    $(".bingo-table").append("<td>cell two</td>");
    $(".bingo-table").append("<td>cell three</td></tr>");*/
    generateTable(3);
});
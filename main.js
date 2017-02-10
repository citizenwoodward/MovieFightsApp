var vm = new Vue({
  el: "#mfApp",
  data: {
    editOn : true,
    
    speedRound1 : false,
    speedRound2 : false,
    speedRound3 : false,
    speedRound4 : false,
    speedRound5 : false,
    
    player1: "Player One",
    player2: "Player Two",
    player3: "Player Three",
    player1Score: 0,
    player2Score: 0,
    player3Score: 0,
    questions: [
    {item:"What movie character would make the best roommate?", round: "Round 1"},
    {item:"What SNL alumni has had the best movie career?", round: "Round 2"},
    {item: "Best Paul Thomas Anderson Movie?", round: "Round 3"},
    {item: "What's the all-time most disappointing movie sequel?", round: "Round 4"},
   { item: "What movie franchise is the most consistently good across all entries?", round: "Round 5"}],
    
    question1SR: "Bargain Bin - Eurotrip or Still Waiting?",
    question2SR: "Best movie with the word 'Day' in the title?",
    question3SR: "Which Quentin Tarantino movie should be remade with a different director?",
    question4SR: "Best Gene Hackman film?",
    question5SR: "Will Farrell or John C Reily?"
  },
  methods: {
    add : function() {
        seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
     h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();


    },
  timer : function() {
     t = setTimeout(add, 1000);
  }

  }
})


// STOP WATCH
var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}



/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}
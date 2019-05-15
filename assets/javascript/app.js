$(document).ready(function () {
    //Create game variables
    var correctAns = 0;
    var incorrectAns = 0;
    var newQ = 0;
    var correct;
    var clearInterval;
    var timer;


    var triviaQuestions = [
        {
            question: "What planet is Alana from?",
            choices: ["Cleave", "Landfall", "Sextillion", "Wreath"],
            correct: "1",
        },
        {
            question: "Who is Hazel's babysitter?",
            choices: ["Doff", "Sophie", "Ghus", "Izabel"],
            correct: "3",
        },
        {
            question: "Does Mark survive in the last book?",
            choices: ["Yes", "No"],
            correct: "1",
        }
    ];

    function runQuestions() {
        timer();
        correct = triviaQuestions[newQ].correct;
        var question = triviaQuestions[newQ].question;
        $('.questions').html(question).css({
            'font-family': 'Courier New'
        });
        for (var i = 0; i < 4; i++) {
            var choices = triviaQuestions[newQ].choices[i];
            $('.answers').append('<h4 id=' + i + '>' + choices + '</h4>').css({
                'font-family': 'Courier New'
            });
        }
        $("h4").click(function () {
            var id = $(this).attr('id');
            if (id === correct) {
                answered = true;
                $('.questions').text("YESSSS! OMG YOU LOVE SAGA");
                correctAns();
            } else {
                answered = true;
                $('.questions').text("YOU HELLA WRONG");
                incorrectAns();
            }
        });
    }

    //timer function
    function timer() {
        var sec = 10
        var timer = setInterval(function () {
            $('.time-remaining').text(sec--).css({
                'font-family': 'Courier New'
            });
            //how to get "times up" to stay and timer to actually stop?
            if (sec === 0) {
                $('.time-remaining').fadeOut('slow').text("times up").css({
                    'font-family': 'Courier New'
                });
                clearInterval(timer);
            }
        }, 1000);
    }
    
    //absolutely cannot figure out how to make the timer stop
    // function myStopFunction() {
    //     clearTimeout(timer);
    // }

    $('.start-button').on("click", function () {
        // $('.start-button');
        // startGame();
        $('.start-button').remove();
        runQuestions();
    })

    //reset idea..? where to place?
    // function resetFunction(){
    //     $('.quizzie').reset();
    // }
})
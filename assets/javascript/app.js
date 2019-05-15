$(document).ready(function () {
    //Create game variables
    var time = 11;
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

    // function startGame() {
    //     // $('.start-button').remove();
    //     // runQuestions();
    // };

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
        time = 3;
        timer = setInterval(function() {
          time--;
          $('.time-remaining').html(time);
          if (time === 0) {
            clearInterval(timer);
          }
        }, 1000);
        // time--;
        // $('.time-remaining').text(time + " seconds left...").css({
        //     'font-family': 'Courier New'
        // });
        // var time = 3
        // var timer2 = setInterval(function () {
        //     time--;
        //     $('.time-remaining').html(time + " seconds left...");
        //     if (time === 0) {
        //         clearInterval(timer2);
        //     }
        // }, 1000);

    }
    $('.start-button').on("click", function () {
        // $('.start-button');
        // startGame();
        $('.start-button').remove();
        runQuestions();
    })

})

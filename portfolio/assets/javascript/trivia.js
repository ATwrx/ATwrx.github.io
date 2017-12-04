var trivia = [{
    question: "What does the acronym USB stand for when referring to a computer port?",
    answerSet: {
        A: "User Should Buy",
        B: "Universal Serial Bus",
        C: "Uber Stretch Bus",
        D: "United States Baseball"
    },
    correctAnswer: "Universal Serial Bus"
},
{
    question: "What do you call the small image icons used to express emotions or ideas in digital communication?",
    answerSet: {
        A: "Emojis",
        B: "GIF's",
        C: "JPEG's",
        D: "Texts from Mom"
    },
    correctAnswer: "Emojis"
},
{
    question: "When referring to a computer monitor, what does the acronym LCD stand for?",
    answerSet: {
        "A": "Limited Cypher Ducks",
        "B": "Light Collision Detector",
        "C": "Laser Color Display",
        "D": "Liquid Crystal Display"
    },
    correctAnswer: "Liquid Crystal Display"
},
{
    question: "Which of these is NOT a operating system?",
    answerSet: {
        A: "Windows",
        B: "Android",
        C: "Linux",
        D: "Ledges"
    },
    correctAnswer: "Ledges"
},
{
    question: "When referring to computer memory, what does that acronym RAM stand for?",
    answerSet: {
        A: "Real Awesome Memory",
        B: "Random Access Memory",
        C: "Razor Alignment Memory",
        D: "Reacting Automitic Memory"
    },
    correctAnswer: "Random Access Memory"
},
{
    question: "In computer science, what does \"GUI\" stand for?",
    answerSet: {
        A: "Graphical User Interface",
        B: "Gooey Ugly Invention",
        C: "GUI Ducks",
        D: "Green Umpire Instincts"
    },
    correctAnswer: "Graphical User Interface"
},
{
    question: "Steve Jobs, Steve Wozniak, and Ronald Wayne founded what company in 1976?",
    answerSet: {
        A: "BMW",
        B: "Apple",
        C: "The Linux Foundation",
        D: "Microsoft"
    },
    correctAnswer: "Microsoft"
},
{
    question: "In a website browser address bar what does \"www\" stand for?",
    answerSet: {
        A: "We Will Win",
        B: "Wuhwuhwuh",
        C: "World Wide Web",
        D: "Walter Went Wild"
    },
    correctAnswer: "World Wide Web"
},
{
    question: "HTML and CSS are computer languages used to create what?",
    answerSet: {
        A: "Operating Systems",
        B: "Keyboards",
        C: "Web Pages",
        D: "Machine Learning Algorithims"
    },
    correctAnswer: "Web Pages"
},
{
    question: "In a photo editing program, what do the letters RGB stand for?",
    answerSet: {
        A: "Red, Green, Blue",
        B: "Remove Giant Background",
        C: "Ready, Go, Begin",
        D: "Rare Gem Broker"
    },
    correctAnswer: "Red, Green, Blue"
},
{
    question: "When talking about computer memory, what does the acronym ROM stand for?",
    answerSet: {
        A: "Remote Operated Monkeys",
        B: "Rigid Operator Mistakes",
        C: "Run of mistakes",
        D: "Read Only Memory"
    },
    correctAnswer: "Read Only Memory"
}
];

// Starting Countdown Functions
var time = 6;
var initialCounter = setInterval(initialCountdown, 1000);
function initialCountdown() {
    time--;
    if (time <= 0) {
        clearInterval(initialCountdown);
        initGame();
        return;
    }
    $("#initial-countdown").text(time);
}


// Game Runtime
var numCorrect, numIncorrect = 0;
function initGame() {
    $("#welcome").hide();
    var questionSpace = $("#question");
    var answerChoiceSpace = $("#choices");
    var gameTimer = setInterval(runTrivia, 10000);

    // Add Answer Space HTML element for each t.answerSet
    // Create event listener for clicking t.answerSet element
    // Finish runTrivia()
    function runTrivia() {
        var currentQuestion = 0;

        var triviaStr = trivia[currentQuestion];
        var answerSet = triviaStr.answerSet;
        if (currentQuestion <= 9) {
            currentQuestion++;
            questionSpace.text(triviaStr.question);
            jQuery.each(answerSet, function (i, val) {
                $("#" + i).text(val);
            });
        } else {
            clearInterval(runTrivia);
            return;
        }
    }
}

// add a button that fires this function in the results div
function restartGame() {
    setInterval(initialCountdown, 1000);
}
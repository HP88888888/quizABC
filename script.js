var title = document.getElementById("title");
var questionMessage = document.getElementById("questionMessage");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var scoreMessage = document.getElementById("scoreMessage");
var prevButton = document.getElementById("prevButton");
var nextButton = document.getElementById("nextButton");

var totalScore = 0;
var questionCount = -1;

var questions = [
    { question: "1問目: このなかから正解を選んでください。選択肢はA, B, Cです。", correctAnswer: "A" },
    { question: "2問目: このなかから正解を選んでください。選択肢はA, B, Cです。", correctAnswer: "B" },
    { question: "3問目: このなかから正解を選んでください。選択肢はA, B, Cです。", correctAnswer: "C" }
];

title.addEventListener("click", function() {
    if (questionCount === -1) {
        questionCount++;
        showQuestion(questionCount);
    }
});

prevButton.addEventListener("click", function() {
    if (questionCount > 0) {
        questionCount--;
        showQuestion(questionCount);
    }
});

nextButton.addEventListener("click", function() {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestion(questionCount);
    } else if (questionCount === questions.length - 1) {
        showScore(totalScore);
    }
});

function showQuestion(index) {
    var questionData = questions[index];
    title.style.display = "none";
    questionMessage.textContent = questionData.question;
    choiceA.style.display = "inline-block";
    choiceB.style.display = "inline-block";
    choiceC.style.display = "inline-block";
    scoreMessage.textContent = "";
    prevButton.style.display = "block";
    nextButton.style.display = "block";

    choiceA.addEventListener("click", function() {
        checkAnswer("A", questionData.correctAnswer);
    });

    choiceB.addEventListener("click", function() {
        checkAnswer("B", questionData.correctAnswer);
    });

    choiceC.addEventListener("click", function() {
        checkAnswer("C", questionData.correctAnswer);
    });
}

function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        totalScore++;
    }
    choiceA.style.display = "none";
    choiceB.style.display = "none";
    choiceC.style.display = "none";
    prevButton.style.display = "none";
    nextButton.style.display = "block";
}

function showScore(score) {
    title.style.display = "block";
    title.textContent = "クイズ終了。合計スコアは " + score + " 点です。クリックして再挑戦！";
    questionMessage.textContent = "";
    scoreMessage.textContent = "";
    prevButton.style.display = "none";
    nextButton.style.display = "none";
}

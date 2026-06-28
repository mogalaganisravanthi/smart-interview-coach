let techQuestions = [
    {
        q: "What is JavaScript?",
        model: "JavaScript is a programming language used for web development.",
        keywords: ["language", "web", "programming"]
    },
    {
        q: "What is an array?",
        model: "Array is a data structure that stores multiple values in index form.",
        keywords: ["data", "index", "multiple"]
    },
    {
        q: "What is SQL?",
        model: "SQL is used to manage relational databases using queries.",
        keywords: ["database", "query", "relational"]
    }
];

let index = 0;
let userAnswer = "";

// START INTERVIEW
function startTechnicalInterview() {
    index = 0;
    showQuestion();
}

// SHOW QUESTION + SPEECH
function showQuestion() {
    if (index >= techQuestions.length) {
        document.getElementById("questionBox").innerText =
            "Interview Completed 🎉";
        return;
    }

    let q = techQuestions[index];

    document.getElementById("questionBox").innerText = q.q;

    userAnswer = "";

    initSpeech((text) => {
        userAnswer = text;
        document.getElementById("answerBox").innerText = text;
    });
}

// CHECK ANSWER
function checkTechAnswer() {
    let q = techQuestions[index];
    let ans = userAnswer.toLowerCase();

    let score = 0;

    q.keywords.forEach(k => {
        if (ans.includes(k)) {
            score += 30;
        }
    });

    let feedback =
        score >= 70 ? "Excellent 👍" :
        score >= 40 ? "Good ⚠️" :
        "Need Improvement ❌";

    document.getElementById("feedbackBox").innerHTML =
        "<b>Model Answer:</b><br>" + q.model +
        "<br><br><b>Your Score:</b> " + score + "/100<br>" +
        "<b>Feedback:</b> " + feedback;
}

// NEXT QUESTION
function nextTechQuestion() {
    index++;
    showQuestion();
}
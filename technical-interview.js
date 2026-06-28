
let techQuestions = [
    {
        q: "What is JavaScript?",
        model: "JavaScript is a programming language used for web development.",
    },
    {
        q: "What is an array?",
        model: "Array stores multiple values in a single variable using index.",
    },
    {
        q: "What is SQL?",
        model: "SQL is used to manage and query relational databases.",
    }
];

let techIndex = 0;
let techAnswer = "";

// START
function startTechnicalInterview() {
    techIndex = 0;
    loadTechQuestion();
}

// LOAD QUESTION (IMPORTANT RESET FIX)
function loadTechQuestion() {

    if (techIndex >= techQuestions.length) {
        document.getElementById("questionBox").innerText = "Technical Interview Completed 🎉";
        document.getElementById("answerBox").innerText = "";
        document.getElementById("feedbackBox").innerText = "";
        return;
    }

    let q = techQuestions[techIndex];

    document.getElementById("questionBox").innerText = q.q;
    document.getElementById("answerBox").innerText = "";
    document.getElementById("feedbackBox").innerText = "";

    techAnswer = "";

    // IMPORTANT: delay fixes mic overwrite issue
    setTimeout(() => {
        initSpeech((text) => {
            techAnswer = text;
            document.getElementById("answerBox").innerText = text;
        });
    }, 300);
}

// CHECK ANSWER
function checkTechAnswer() {

    let q = techQuestions[techIndex];
    let ans = techAnswer.toLowerCase();

    let score = 0;

    if (ans.includes("javascript")) score += 40;
    if (ans.includes("array") || ans.includes("index")) score += 40;
    if (ans.length > 10) score += 20;

    document.getElementById("feedbackBox").innerHTML =
        "<b>Your Answer:</b><br>" + techAnswer +
        "<br><br><b>Model Answer:</b><br>" + q.model +
        "<br><br><b>Score:</b> " + score + "/100";
}

// NEXT
function nextTechQuestion() {
    techIndex++;
    loadTechQuestion();
}
// ===============================
// QUESTION BANK (FAANG STYLE)
// ===============================

const jsQuestions = [
    { q: "What is hoisting in JavaScript?", keywords: ["hoisting", "declaration", "top"] },
    { q: "Explain closures in JavaScript", keywords: ["closure", "scope", "lexical"] },
    { q: "Difference between let, var, const?", keywords: ["scope", "redeclare", "block"] }
];

const dsaQuestions = [
    { q: "What is time complexity?", keywords: ["big o", "performance", "complexity"] },
    { q: "Explain stack vs queue", keywords: ["lifo", "fifo", "push", "pop"] },
    { q: "What is binary search?", keywords: ["sorted", "divide", "log n"] }
];

const dbQuestions = [
    { q: "What is normalization in DB?", keywords: ["reduce", "redundancy", "tables"] },
    { q: "Difference between SQL and NoSQL?", keywords: ["structured", "schema", "flexible"] },
    { q: "What is indexing?", keywords: ["fast", "search", "performance"] }
];

const hrQuestions = [
    { q: "Tell me about yourself", keywords: ["experience", "skills", "background"] },
    { q: "Why should we hire you?", keywords: ["skills", "value", "fit"] },
    { q: "What are your strengths?", keywords: ["strength", "skill", "improve"] }
];
let interviewFlow = [];
let currentIndex = 0;
let currentAnswer = "";

function startFullInterview() {
    interviewFlow = [
        getRandom(jsQuestions),
        getRandom(dsaQuestions),
        getRandom(dbQuestions),
        getRandom(hrQuestions)
    ];

    currentIndex = 0;
    showQuestion();
}

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function showQuestion() {
    if (currentIndex >= interviewFlow.length) {
        showFinalResult();
        return;
    }

    document.getElementById("questionBox").innerText =
        interviewFlow[currentIndex].q;

    currentAnswer = "";

    initSpeech((text) => {
        currentAnswer = text;
        document.getElementById("answerBox").innerText = text;
    });
}
function evaluateAnswer() {
    let q = interviewFlow[currentIndex];
    let answer = currentAnswer.toLowerCase();

    let score = 0;

    q.keywords.forEach(k => {
        if (answer.includes(k)) {
            score += 25;
        }
    });

    let feedback =
        score >= 75 ? "Excellent 👍" :
        score >= 50 ? "Good ⚠️" :
        "Needs Improvement ❌";

    document.getElementById("feedbackBox").innerText =
        `Score: ${score}/100\n${feedback}`;
}
function nextQuestion() {
    currentIndex++;
    showQuestion();
}
function showFinalResult() {
    document.getElementById("questionBox").innerText =
        "Interview Completed 🎉";

    document.getElementById("answerBox").innerText = "";

    document.getElementById("feedbackBox").innerText =
        "Great job! Review weak areas and try again.";
}
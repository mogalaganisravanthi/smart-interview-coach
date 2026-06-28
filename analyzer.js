document.getElementById("analyzeBtn").addEventListener("click", analyzeAnswer);

function analyzeAnswer() {

    const answer = document
        .getElementById("transcript")
        .innerText
        .toLowerCase()
        .trim();

    if (answer === "" || answer === "your answer will appear here...") {
        alert("🎤 Please answer the question first.");
        return;
    }

    const expected = interviewQuestions[currentQuestion].points;

    let covered = 0;

    expected.forEach(item => {

        let found = false;

        item.keywords.forEach(word => {

            if (answer.includes(word.toLowerCase())) {
                found = true;
            }

        });

        if (found) {
            covered++;
        }

    });

    const coverage = Math.round((covered / expected.length) * 100);

    let communication = 100;

    if (answer.length < 100)
        communication -= 20;

    if (answer.split(" ").length < 25)
        communication -= 20;

    const overall = Math.round((coverage + communication) / 2);

    document.getElementById("reportCard").style.display = "block";

    document.getElementById("coverageScore").innerHTML =
        coverage + "%";

    document.getElementById("communicationScore").innerHTML =
        communication + "/100";

    document.getElementById("overallScore").innerHTML =
        overall + "/100";

    // Suggestions

    let suggestion = "";

    if (overall >= 90) {

        suggestion =
        "🌟 Excellent answer! You covered almost every important point and communicated confidently.";

    } else if (overall >= 70) {

        suggestion =
        "👍 Good answer. Try adding a few more details and examples.";

    } else {

        suggestion =
        "📚 You need to cover more important points. Speak with more confidence and elaborate your answer.";

    }

    document.getElementById("suggestions").innerHTML = suggestion;


    // Grammar Feedback

    let grammar = [];

    if (!answer.includes(".")) {
        grammar.push("• Use full sentences with proper punctuation.");
    }

    if (answer.split(" ").length < 15) {
        grammar.push("• Your answer is too short.");
    }

    if (!answer.includes("i am") && !answer.includes("i'm")) {
        grammar.push("• Introduce yourself using 'I am...' or 'I'm...'.");
    }

    if (grammar.length === 0) {
        grammar.push("✅ No obvious grammar issues found.");
    }

    document.getElementById("grammar").innerHTML =
        grammar.join("<br>");


    // Filler Words

    const fillerWords = [
        "um",
        "uh",
        "like",
        "you know",
        "actually",
        "basically"
    ];

    let used = [];

    fillerWords.forEach(word => {

        if (answer.includes(word)) {

            used.push(word);

        }

    });

    if (used.length === 0) {

        document.getElementById("fillers").innerHTML =
        "✅ Great! No filler words detected.";

    } else {

        document.getElementById("fillers").innerHTML =
        "❌ Filler words detected: " + used.join(", ");

    }


    // Save score

    if (!localStorage.getItem("scores")) {

        localStorage.setItem("scores", JSON.stringify([]));

    }

    let scores = JSON.parse(localStorage.getItem("scores"));

    scores.push(overall);

    localStorage.setItem("scores", JSON.stringify(scores));


    // Countdown

    let seconds = 5;

    document.getElementById("countdown").innerHTML =
    "➡ Next question in " + seconds + " seconds...";

    const timer = setInterval(function () {

        seconds--;

        document.getElementById("countdown").innerHTML =
        "➡ Next question in " + seconds + " seconds...";

        if (seconds <= 0) {

            clearInterval(timer);

            document.getElementById("nextBtn").click();

        }

    }, 1000);

}
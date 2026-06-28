
document.getElementById("analyzeBtn").onclick = function () {

    const text = document.getElementById("transcript").innerText.toLowerCase();

    if (!text) {
        alert("No speech detected yet!");
        return;
    }

    let score = 100;

    let issues = [];

    if (text.includes(" i is ")) {
        issues.push("Grammar mistake: 'I is' → 'I am'");
        score -= 10;
    }

    if (text.includes(" i am completed")) {
        issues.push("Grammar mistake: use 'I have completed'");
        score -= 10;
    }

    const required = ["name", "education", "skills", "project", "career"];

    let covered = 0;

    required.forEach(r => {
        if (text.includes(r)) covered++;
    });

    let coverage = Math.round((covered / required.length) * 100);

    let confidence = Math.max(0, score - (100 - coverage));

    let output =
`📊 REPORT

Coverage: ${coverage}%
Confidence: ${confidence}%

Issues:
${issues.length ? issues.join("\n") : "No major issues"}`;

    document.getElementById("result").innerText = output;

    alert(output);
};
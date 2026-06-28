
document.getElementById("analyzeBtn").onclick = function () {

    const text = document.getElementById("transcript").innerText.toLowerCase();

    let issues = [];
    let score = 100;

    // --------------------------
    // 1. BASIC GRAMMAR CHECKS
    // --------------------------

    if (text.includes(" i am completed")) {
        issues.push("❌ Incorrect grammar: use 'I have completed' instead of 'I am completed'");
        score -= 10;
    }

    if (text.includes(" i is ")) {
        issues.push("❌ Grammar mistake: 'I is' should be 'I am'");
        score -= 10;
    }

    if (!text.includes("my name")) {
        issues.push("⚠️ Missing self introduction (name not clearly stated)");
        score -= 10;
    }

    // --------------------------
    // 2. CONTENT CHECK
    // --------------------------

    const required = ["name", "education", "skills", "project", "career"];

    let covered = 0;

    required.forEach(item => {
        if (text.includes(item)) {
            covered++;
        }
    });

    let coverage = Math.round((covered / required.length) * 100);

    // --------------------------
    // 3. CONFIDENCE SCORE
    // --------------------------

    let confidence = Math.max(0, score - (100 - coverage));

    // --------------------------
    // 4. OUTPUT
    // --------------------------

    let output = "📊 AI INTERVIEW REPORT\n\n";

    output += "🎯 Content Coverage: " + coverage + "%\n";
    output += "💡 Confidence Score: " + confidence + "%\n\n";

    if (issues.length === 0) {
        output += "✅ No major grammar issues found\n";
    } else {
        output += "⚠️ Issues:\n";
        issues.forEach(i => output += i + "\n");
    }

    document.getElementById("result").innerText = output;

    alert(output);
};
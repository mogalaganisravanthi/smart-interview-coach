
}
document.getElementById("analyzeBtn").onclick = function () {

    const answer = document
        .getElementById("transcript")
        .innerText
        .toLowerCase();

    const expected = interviewQuestions[currentQuestion].points;

    let covered = 0;

    let report = "📊 AI Interview Analysis\n\n";

    const keywordMap = {
        "name": ["name", "i am", "my name", "called"],
        "education": ["b.tech", "btech", "degree", "studied", "graduation", "college"],
        "skills": ["python", "java", "c++", "html", "css", "javascript", "skills", "know"],
        "project": ["project", "built", "developed", "application", "app"],
        "career goal": ["goal", "become", "future", "aim", "aspire", "work as"],
        "department": ["ai", "artificial intelligence", "ml", "machine learning", "cs", "cse", "it"]
    };

    expected.forEach(point => {

        const key = point.toLowerCase();

        let keywords = keywordMap[key] || [key];

        let found = keywords.some(k => answer.includes(k));

        if (found) {
            report += "✅ " + point + "\n";
            covered++;
        } else {
            report += "❌ " + point + "\n";
        }
    });

    const score =
        Math.round((covered / expected.length) * 100);

    report += "\n📈 Coverage Score: " + score + "%";

    alert(report);
};
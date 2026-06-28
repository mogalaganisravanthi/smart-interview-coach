
}
document.getElementById("analyzeBtn").onclick = function () {

    const answer = document
        .getElementById("transcript")
        .innerText
        .toLowerCase();

    const expected =
        interviewQuestions[currentQuestion].points;

    let covered = 0;

    let report = "📊 AI Interview Analysis\n\n";

    expected.forEach(point => {

        if(answer.includes(point.toLowerCase())){

            report += "✅ " + point + "\n";

            covered++;

        }

        else{

            report += "❌ " + point + "\n";

        }

    });

    const score =
    Math.round((covered/expected.length)*100);

    report +=
    "\nCoverage Score : " +
    score +
    "%";

    alert(report);

}

}
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "en-US";
recognition.continuous = true;
recognition.interimResults = true;

const transcript = document.getElementById("transcript");

let finalText = "";

recognition.onstart = function () {
    transcript.innerHTML = "🎤 Listening...";
};

recognition.onresult = function (event) {

    let interimText = "";

    for (let i = event.resultIndex; i < event.results.length; i++) {

        let text = event.results[i][0].transcript;

        if (event.results[i].isFinal) {
            finalText += text + " ";
        } else {
            interimText += text;
        }
    }

    transcript.innerHTML = finalText + interimText;
};

recognition.onerror = function (event) {
    alert("Microphone Error: " + event.error);
};

document.getElementById("startBtn").onclick = function () {

    finalText = "";
    transcript.innerHTML = "";

    recognition.start();
};

document.getElementById("stopBtn").onclick = function () {

    recognition.stop();

    setTimeout(function () {
        transcript.innerHTML = finalText;
    }, 500);

};
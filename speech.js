
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.continuous = true;
recognition.interimResults = true;

const transcriptBox = document.getElementById("transcript");

let finalText = "";

document.getElementById("startBtn").onclick = function () {
    recognition.start();
};

document.getElementById("stopBtn").onclick = function () {
    recognition.stop();
};

recognition.onresult = function (event) {

    let interim = "";

    for (let i = event.resultIndex; i < event.results.length; i++) {

        const text = event.results[i][0].transcript;

        if (event.results[i].isFinal) {
            finalText += " " + text;
        } else {
            interim += text;
        }
    }

    transcriptBox.innerText = finalText + " " + interim;
};
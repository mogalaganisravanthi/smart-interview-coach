const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    alert("❌ Your browser doesn't support Speech Recognition.\nPlease use Google Chrome.");
}

const recognition = new SpeechRecognition();

recognition.lang = "en-US";
recognition.continuous = true;
recognition.interimResults = true;

let finalTranscript = "";
let isListening = false;

const transcriptBox = document.getElementById("transcript");

document.getElementById("startBtn").addEventListener("click", () => {

    if (isListening) return;

    isListening = true;

    finalTranscript = "";

    transcriptBox.innerHTML = "🎤 Listening...";

    document.getElementById("startBtn").disabled = true;

    recognition.start();

});

document.getElementById("stopBtn").addEventListener("click", () => {

    isListening = false;

    recognition.stop();

});

recognition.onresult = (event) => {

    let interimTranscript = "";

    for (let i = event.resultIndex; i < event.results.length; i++) {

        const text = event.results[i][0].transcript;

        if (event.results[i].isFinal) {

            finalTranscript += text + " ";

        } else {

            interimTranscript += text;

        }

    }

    transcriptBox.innerHTML =
        finalTranscript +
        "<span style='color:gray'>" + interimTranscript + "</span>";

};

recognition.onend = () => {

    if (isListening) {

        recognition.start();

    } else {

        transcriptBox.innerHTML = finalTranscript.trim();

        document.getElementById("startBtn").disabled = false;

    }

};

recognition.onerror = (event) => {

    console.log(event.error);

    if (event.error === "no-speech") return;

    if (event.error === "aborted") return;

    alert("Microphone Error: " + event.error);

};
function initSpeech(callback) {
    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;

    let finalText = "";

    recognition.onresult = (event) => {
        let interim = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
            let transcript = event.results[i][0].transcript;

            if (event.results[i].isFinal) {
                finalText += transcript + " ";
            } else {
                interim += transcript;
            }
        }

        callback(finalText + interim);
    };

    recognition.start();
}
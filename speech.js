
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!window.SpeechRecognition) {
    alert("Speech Recognition not supported in this browser. Use Chrome.");
}

const recognition = new SpeechRecognition();

recognition.continuous = true;
recognition.interimResults = true;

const transcriptBox = document.getElementById("transcript");

let finalText = "";

document.getElementById("startBtn").onclick = () => {
    recognition.start();
};

document.getElementById("stopBtn").onclick = () => {
    recognition.stop();
};

recognition.onresult = (event) => {

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

recognition.onerror = (e) => {
    console.log("Speech error:", e.error);
    alert("Mic error: " + e.error);
};
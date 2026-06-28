const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "en-US";
recognition.continuous = true;
recognition.interimResults = true;

const transcript = document.getElementById("transcript");

let finalText = "";

recognition.onresult = function(event){

let interim = "";

for(let i=event.resultIndex;i<event.results.length;i++){

let text = event.results[i][0].transcript;

if(event.results[i].isFinal){

finalText += text + " ";

}else{

interim += text;

}

}

transcript.innerHTML =
finalText +
"<span style='color:gray'>"+interim+"</span>";

}

document.getElementById("startBtn").onclick=function(){

finalText="";

transcript.innerHTML="";

recognition.start();

}

document.getElementById("stopBtn").onclick=function(){

recognition.stop();

}
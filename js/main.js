let text = document.getElementById('text');

function textToSpeech(){
    let t = text.value;
    let speech = new SpeechSynthesisUtterance(t);
    speech.lang = "En-IN";
    speech.pitch = .1;
    speech.rate = 1;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
}
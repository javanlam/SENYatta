function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }
  
    const voices = speechSynthesis.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      document.getElementById("voiceSelect").appendChild(option);
    }
}
  
populateVoiceList();
if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

function textToAudio(message) {
    let msg = message;
    
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    // speech.lang = "yue-Hant-HK";
    
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 0.3;

    window.speechSynthesis.speak(speech);
}
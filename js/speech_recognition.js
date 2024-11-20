// Source of Speech Reognition Scripts: Github - Zolomohan "Speech Recognition in JavaScript", link: https://github.com/zolomohan/speech-recognition-in-javascript/blob/master/speechRecognition.js

if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
        let speechRecognition = new webkitSpeechRecognition();
        let final_transcript = "";
    
        speechRecognition.continuous = true;
        speechRecognition.interimResults = true;
        speechRecognition.lang = ['en-US', 'United States'];
    
        speechRecognition.onstart = () => {
            document.querySelector("#status").style.display = "block";
        };
        speechRecognition.onerror = () => {
            document.querySelector("#status").style.display = "none";
            console.log("Speech Recognition Error");
        };
        speechRecognition.onend = () => {
            document.querySelector("#status").style.display = "none";
            update();
            console.log("Speech Recognition Ended");
        };
    
        speechRecognition.onresult = (event) => {
            let interim_transcript = "";
            final_transcript = "";              // added to clear text box

            // += changed to = for refreshing whole string
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                final_transcript = event.results[i][0].transcript;
                } else {
                interim_transcript = event.results[i][0].transcript;
                }
            }
            document.querySelector("#final").innerHTML = final_transcript;
            document.querySelector("#interim").innerHTML = interim_transcript;
        };
    
        document.querySelector("#start").onclick = () => {
            speechRecognition.start();
        };
        document.querySelector("#stop").onclick = () => {
            console.log("Called");
            console.log(final_transcript);
            // sendPrompt(prompt);
            speechRecognition.stop();
        };
    } else {
        console.log("Speech Recognition Not Available");
  }
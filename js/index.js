var situation_chosen;
var situation;

function choose_situation(n) {
    switch(n) {
        case 1:
            situation = "food";
            break;
        case 2:
            situation = "ticket";
            break;
        case 3:
            situation = "customs";
            break;
        case 4:
            situation = "borrow";
            break;
    }
    situation_chosen = true;
    if (situation_chosen) {
        document.getElementById("choose-situation").style.opacity = 0;
        document.getElementById("note").style.opacity = 0;
        document.getElementById("voice-recording").style.opacity = 1;
        document.getElementById("user-response-head").style.opacity = 1;
        document.getElementById("voiceSelect-header").style.opacity = 1;
        document.getElementById("voiceSelect").style.opacity = 1;
    }
    chatbot(situation);
}
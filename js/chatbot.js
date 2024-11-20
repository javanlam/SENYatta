var cashier = [
    ["Welcome to McDonald's! How can I help you today?", 
        "Good Afternoon! Welcome to McDonald's. What can I get for you?", 
        "Thank you for choosing McDonald's! How may I assist you?",
        "Hello and welcome to McDonald's! What can I serve you today?",
        "Welcome to McDonald's! How can I satisfy you?",
        "Thank you for choosing McDonald's! What can I get started for you?"],
    // ["屌你老母",
    // "收皮",
    // "早晨，睇路呀",
    // "得閒飲茶",
    // "你好肥",
    // "返學未?"],
    ["Sure, anything else?",
        "Would you like to make it a meal?",
        "Of course! Would you like to make it a meal with a drink?",
        "Absolutely! Would you like any additional items or make it a meal?",
        "Great choice! Would you also like fries or a drink?",
        "Certainly! Would you like to have any additional items or make it a meal?"],
    ["Your total is $45. Enjoy your meal!",
        "Your order adds up to $38. Please wait until your number is called.",
        "Thank you! The total is $43.5. You may take your order at that counter.",
        "Please take a seat, and we'll bring your order to you shortly. Thank you!",
        "Once the transaction is completed, we'll process your order. Enjoy your meal!",
        "Here is your receipt. Your order will be ready shortly. Enjoy your meal!"]
];

var user = [
    ["Hi there! I'd like to order a Big Mac, please.",
        "Hello! I'll have a Double Angus, please.",
        "Hi! Can I get a Filet-O-Fish, please?",
        "Hello! I'd like to order a McChicken.",
        "Hi! I'd like a Happy Meal with chicken nuggets, please.",
        "Hi there! I'd like to order a Spicy McChicken, please."],
    ["I'd like a side of French fries and a Coke.",
        "Can I get a large meal with a Sprite?",
        "No, just the burger and fries, please.",
        "Just the burger and a Coke.",
        "I'll choose fries, please.",
        "I'll have a medium Sprite."],
    ["Thank you very much!",
        "Thank you very much!",
        "Thank you very much!",
        "Thank you very much!",
        "Thank you very much!",
        "Thank you very much!"]
];

var dialogue = Math.floor(Math.random() * 5);

function chatbot(situation) {
    switch(situation) {
        case "food":
            document.getElementById('output1').innerHTML = "<b>You are at McDonald's. You want to order food.</b>";
            document.getElementById('output2').innerHTML = "Cashier: " + cashier[0][dialogue];
            textToAudio(cashier[0][dialogue]);
            // quickStart(cashier[0][dialogue]);
            document.getElementById('possible-responses').innerHTML = "A possible response: " + user[0][dialogue];
            break;
        case "ticket":
            break;
        case "customs":
            break;
        case "borrow":
            break;
    }
}

var i = 1;

function update() {
    console.log("update is called");
    if (i <= 2) {
        document.getElementById('output2').innerHTML = "Cashier: " + cashier[i][dialogue];
        textToAudio(cashier[i][dialogue]);
        // google_speech_synthesis.quickStart(cashier[i][dialogue]);
        // if (written) {
        //     var audio = new Audio('output.mp3');
        //     audio.play();
        // }
        document.getElementById('possible-responses').innerHTML = "A possible response: " + user[i][dialogue];
    }
    if (i == 3) {
        document.getElementById("start").style.opacity = 0;
        document.getElementById("stop").style.opacity = 0;
        document.getElementById("voiceSelect-header").style.opacity = 0;
        document.getElementById("voiceSelect").style.opacity = 0;
        document.getElementById("refresh").style.opacity = 1;
    }
    i = i + 1;
    // sendPrompt(prompt);
}
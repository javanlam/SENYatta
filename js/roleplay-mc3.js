function start() {
    document.getElementById("start").style.display = "none";
    document.getElementById("mc").style.display = "block";
    document.getElementById("body").style.background = "linear-gradient(0deg, rgba(20,20,20,0.6), rgba(20,20,20,0.6)), url(/../Chatbot/images/disneyland-entrance.jpg)";
    document.getElementById("body").style.backgroundRepeat = "no-repeat";
    document.getElementById("body").style.backgroundSize = "100% 100%";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("extra-image").src = "images/disneyland-card.png";
    var recording = new Audio('recordings/roleplay-mc3/1.mp3');
    recording.play();
    document.getElementById("question").innerHTML = "職員：早晨，請問你想購買邊哪一種門票？";
    document.getElementById("answer1").innerHTML = "A.  我想購買一日門票。($400)";
    document.getElementById("answer2").innerHTML = "B.  我想購買年證。($1000)";
    document.getElementById("roleplay-progress").value = "1";
}

var i = 1;

function update() {
    console.log(i);
    switch(i) {
        case 0:
            document.getElementById("roleplay-progress").value = "1";
            document.getElementById("instructions").style.display = "none";
            document.getElementById("instructions-mc").style.display = "block";
            document.getElementById("instructions-mc").innerHTML = "";
            document.getElementById("mc-face").style.display = "block";
            document.getElementById("user-face").style.display = "block";
            document.getElementById("tryagain").style.display = "none";
            document.getElementById("next").style.display = "none";
            document.getElementById("question-box").style.display = "block";
            document.getElementById("question").style.display = "block";
            document.getElementById("answer-box").style.display = "block";
            document.getElementById("extra-image").src = "images/disneyland-card.png";
            document.getElementById("body").style.background = "linear-gradient(0deg, rgba(20,20,20,0.6), rgba(20,20,20,0.6)), url(/../Chatbot/images/disneyland-entrance.jpg)";
            document.getElementById("body").style.backgroundRepeat = "no-repeat";
            document.getElementById("body").style.backgroundSize = "100% 100%";
            var recording = new Audio('recordings/roleplay-mc3/1.mp3');
            recording.play();
            document.getElementById("question").innerHTML = "職員：早晨，請問你想購買哪一種門票？";
            document.getElementById("answer1").innerHTML = "A.  我想購買一日門票。($400)";
            document.getElementById("answer2").innerHTML = "B.  我想購買年證。($1000)";
            i++;
            break;
        case 1:
            document.getElementById("roleplay-progress").value = "2";
            var recording = new Audio('recordings/roleplay-mc3/2.mp3');
            recording.play();
            document.getElementById("question").innerHTML = "職員：你需要額外購買快證嗎？";
            document.getElementById("answer1").innerHTML = "A.  好呀。(+$50)";
            document.getElementById("answer2").innerHTML = "B.  唔使啦。";
            i++;
            break;
        case 2:
            document.getElementById("roleplay-progress").value = "3";
            document.getElementById("extra-image").src = "";
            var recording = new Audio('recordings/roleplay-mc3/3.mp3');
            recording.play();
            document.getElementById("question").innerHTML = "職員：這是你要付嘅金額，謝謝！";
            document.getElementById("answer-box").style.display = "none";
            document.getElementById("user-face").style.display = "none";
            document.getElementById("continue").style.display = "block";
            i++;
            break;
        case 3:
            document.getElementById("roleplay-progress").value = "4";
            document.getElementById("body").style.background = "linear-gradient(0deg, rgba(20,20,20,0.6), rgba(20,20,20,0.6)), url(/../Chatbot/images/disneyland-birthday.jpeg)";
            document.getElementById("body").style.backgroundRepeat = "no-repeat";
            document.getElementById("body").style.backgroundSize = "100% 100%";
            document.getElementById("mc-face").style.display = "none";
            document.getElementById("instructions").style.display = "block";
            document.getElementById("instructions").innerHTML = "在購買門票後，你正式入場，你打算先領取生日紀念品。";
            document.getElementById("question-box").style.display = "none";
            i++;
            break;
        case 4:
            document.getElementById("roleplay-progress").value = "5";
            document.getElementById("extra-image").src = "images/disneyland-birthdaybadge.jpeg";
            document.getElementById("instructions").style.display = "none";
            document.getElementById("instructions-mc").innerHTML = "你會講：";
            document.getElementById("answer-box").style.display = "block";
            document.getElementById("mc-face").style.display = "block";
            document.getElementById("user-face").style.display = "block";
            document.getElementById("continue").style.display = "none";
            document.getElementById("answer1").innerHTML = "A.  唔該，我想問吓生日係咪可以攞生日紀念品？";
            document.getElementById("answer2").innerHTML = "B.  你好，依度係咪有得攞生日紀念品？";
            document.getElementById("answer3").innerHTML = "C.  早晨，我使唔使登記先攞到生日紀念品？";
            i++;
            break;
        case 5:
            document.getElementById("roleplay-progress").value = "6";
            document.getElementById("extra-image").src = "";
            document.getElementById("question-box").style.display = "block";
            document.getElementById("instructions-mc").innerHTML = "";
            var recording = new Audio('recordings/roleplay-mc3/4.mp3');
            recording.play();
            document.getElementById("question").innerHTML = "職員：生日快樂，你出示門票和身份證便可以。";
            document.getElementById("answer-box").style.display = "none";
            document.getElementById("continue").style.display = "block";
            i++;
            break;
        case 6:
            document.getElementById("roleplay-progress").value = "7";
            document.getElementById("extra-image").src = "";
            document.getElementById("body").style.background = "linear-gradient(0deg, rgba(20,20,20,0.6), rgba(20,20,20,0.6)), url(/../Chatbot/images/disneyland-tomorrowland.jpg)";
            document.getElementById("body").style.backgroundRepeat = "no-repeat";
            document.getElementById("body").style.backgroundSize = "100% 100%";
            document.getElementById("mc-face").style.display = "none";
            document.getElementById("user-face").style.display = "none";
            document.getElementById("instructions").style.display = "block";
            document.getElementById("instructions").innerHTML = "你領取生日紀念品後，打算先前去機動遊戲，但你看著地圖，不知道如何前往目的地。這時，一位演藝人員主動前來協助你。";
            document.getElementById("question").style.display = "none";
            i++;
            break;
        case 7:
            document.getElementById("roleplay-progress").value = "8";
            document.getElementById("mc-face").style.display = "block";
            document.getElementById("user-face").style.display = "block";
            document.getElementById("instructions").style.display = "none";
            document.getElementById("question").style.display = "block";
            var recording = new Audio('recordings/roleplay-mc3/5.mp3');
            recording.play();
            document.getElementById("question").innerHTML = "演藝人員：你好，我可以怎樣幫你？";
            document.getElementById("answer-box").style.display = "block";
            document.getElementById("continue").style.display = "none";
            document.getElementById("answer1").innerHTML = "A.  唔該我想去坐過山車，我可以點行？";
            document.getElementById("answer2").innerHTML = "B.  你知唔知點去旋轉木馬？";
            document.getElementById("answer3").innerHTML = "C.  我想去坐摩天輪，我行邊條路會最快？";
            i++;
            break;
        case 8:
            document.getElementById("roleplay-progress").value = "9";
            var recording = new Audio('recordings/roleplay-mc3/6.mp3');
            recording.play();
            document.getElementById("question").innerHTML = "演藝人員：你可以在城堡前面廣場轉右，如果你再有任何問題可以問其他演藝人員。";
            document.getElementById("answer-box").style.display = "none";
            document.getElementById("user-face").style.display = "none";
            document.getElementById("continue").style.display = "block";
            i++;
            break;
        case 9:
            document.getElementById("roleplay-progress").value = "10";
            document.getElementById("body").style.background = "linear-gradient(0deg, rgba(20,20,20,0.6), rgba(20,20,20,0.6)), url(/../Chatbot/images/disneyland-starlinerdiner.jpg)";
            document.getElementById("body").style.backgroundRepeat = "no-repeat";
            document.getElementById("body").style.backgroundSize = "100% 100%";
            document.getElementById("mc-face").style.display = "none";
            document.getElementById("user-face").style.display = "none";
            document.getElementById("question").style.display = "none";
            document.getElementById("instructions").style.display = "block";
            document.getElementById("instructions").innerHTML = "到達明日世界後，你有點肚餓，決定先吃午餐。你進入了一所餐廳，正在點餐。";
            i++;
            break;
        case 10:
            document.getElementById("roleplay-progress").value = "11";
            document.getElementById("extra-image").src = "images/disneyland-starlinerdiner-menu.png";
            document.getElementById("instructions").style.display = "none";
            document.getElementById("mc-face").style.display = "block";
            document.getElementById("user-face").style.display = "block";
            document.getElementById("question").style.display = "block";
            var recording = new Audio('recordings/roleplay-mc3/7.mp3');
            recording.play();
            document.getElementById("question").innerHTML = "店員：你好，請問你想吃甚麼？";
            document.getElementById("answer-box").style.display = "block";
            document.getElementById("continue").style.display = "none";
            document.getElementById("answer1").innerHTML = "A.  我要炸雞套餐。";
            document.getElementById("answer2").innerHTML = "B.  我要魚柳漢堡套餐。";
            document.getElementById("answer3").innerHTML = "C.  我要雙層牛肉漢堡套餐";
            i++;
            break;
        case 11:
            document.getElementById("roleplay-progress").value = "12";
            document.getElementById("extra-image").src = "images/disneyland-starlinerdiner-drinks.png";
            var recording = new Audio('recordings/roleplay-mc3/8.mp3');
            recording.play();
            document.getElementById("question").innerHTML = "店員：請問你想喝甚麼？";
            document.getElementById("answer1").innerHTML = "A.  我要可樂。";
            document.getElementById("answer2").innerHTML = "B.  我要果汁。";
            document.getElementById("answer3").innerHTML = "C.  我要檸檬茶。";
            i++;
            break;
        case 12:
            document.getElementById("roleplay-progress").value = "13";
            document.getElementById("extra-image").src = "";
            var recording = new Audio('recordings/roleplay-mc3/9.mp3');
            recording.play();
            document.getElementById("question").innerHTML = "總共$150。";
            document.getElementById("answer1").innerHTML = "A.  我畀現金。";
            document.getElementById("answer2").innerHTML = "B.  八達通唔該。";
            document.getElementById("answer3").innerHTML = "C.  信用卡唔該。";
            i++;
            break;
        case 13:
            document.getElementById("roleplay-progress").value = "14";
            var recording = new Audio('recordings/roleplay-mc3/10.mp3');
            recording.play();
            document.getElementById("question").innerHTML = "店員：你可以在旁邊等取餐。";
            document.getElementById("answer-box").style.display = "none";
            document.getElementById("answer3").style.display = "none";
            document.getElementById("continue").style.display = "block";
            i++;
            break;
        case 14:
            document.getElementById("roleplay-progress").value = "15";
            document.getElementById("mc-face").style.display = "none";
            document.getElementById("user-face").style.display = "none";
            document.getElementById("question").style.display = "none";
            document.getElementById("instructions").style.display = "block";
            document.getElementById("instructions").innerHTML = "在領餐後，你發現漏給了飲品，你前往領餐處查詢。";
            i++;
            break;
        case 15:
            document.getElementById("roleplay-progress").value = "16";
            document.getElementById("question-box").style.display = "none";
            document.getElementById("mc-face").style.display = "block";
            document.getElementById("user-face").style.display = "block";
            document.getElementById("instructions").style.display = "none";
            document.getElementById("question").style.display = "block";
            document.getElementById("instructions-mc").innerHTML = "你會講：";
            document.getElementById("answer-box").style.display = "block";
            document.getElementById("continue").style.display = "none";
            document.getElementById("answer1").innerHTML = "A.  唔好意思，我依個餐好似漏咗杯嘢飲。";
            document.getElementById("answer2").innerHTML = "B.  唔該，我頭先個餐好似未畀杯飲品。";
            i++;
            break;
        case 16:
            document.getElementById("roleplay-progress").value = "17";
            document.getElementById("mc-face").style.display = "none";
            document.getElementById("user-face").style.display = "none";
            document.getElementById("instructions").style.display = "block";
            document.getElementById("instructions").innerHTML = "你成功拿回了飲品。吃完午餐後，你繼續前往原來的目的地。";
            document.getElementById("instructions-mc").style.display = "none";
            document.getElementById("answer-box").style.display = "none";
            document.getElementById("tryagain").style.display = "block";
            document.getElementById("next").style.display = "block";
            break;
        case 17:
            i = 1;
            update();
            break;
        case 18:
            document.getElementById("tryagain").style.display = "none";
            document.getElementById("next").style.display = "none";
            window.location.assign("roleplay-mc4.html");
            break;

    }

}


function start() {
    document.getElementById("start").style.display = "none";
    document.getElementById("question-box").style.display = "none";
    document.getElementById("mc-face").style.display = "none";
    document.getElementById("mc").style.display = "block";
    document.getElementById("instructions-mc").style.display = "block";
    document.getElementById("answer2").style.display = "none";
    document.getElementById("instructions-mc").innerHTML = "你會選擇:";
    document.getElementById("answer1").innerHTML = "A.  前往客務中心查詢港鐵職員。";
    document.getElementById("roleplay-progress").value = "1";
}

var i = 1;
var choice;

function update() {
    console.log(i);
    switch(i) {
        case 0:
            document.getElementById("roleplay-progress").value = "1";
            document.getElementById("question-box").style.display = "none";
            document.getElementById("mc-face").style.display = "none";
            document.getElementById("user-face").style.display = "block";
            document.getElementById("mc").style.display = "block";
            document.getElementById("instructions").style.display = "block";
            document.getElementById("instructions").innerHTML = "你現正身處尖東站，你打算前往太空館，但你不知道如何步行前往，而你又不懂得看地圖。";
            document.getElementById("tryagain").style.display = "none";
            document.getElementById("next").style.display = "none";
            document.getElementById("instructions-mc").style.display = "block";
            document.getElementById("instructions-mc").innerHTML = "你會選擇:";
            document.getElementById("answer-box").style.display = "block";
            document.getElementById("answer1").innerHTML = "A.  前往客務中心查詢港鐵職員。";
            document.getElementById("answer2").style.display = "none";
            document.getElementById("body").style.background = "linear-gradient(0deg, rgba(20,20,20,0.6), rgba(20,20,20,0.6)), url(/../Chatbot/images/directions-etst.jpg)";
            document.getElementById("body").style.backgroundRepeat = "no-repeat";
            document.getElementById("body").style.backgroundSize = "100% 100%";
            i++;
            break;
        case 1:
            document.getElementById("instructions").style.display = "none";
            document.getElementById("roleplay-progress").value = "2";
            document.getElementById("mc-face").style.display = "block";
            document.getElementById("answer2").style.display = "block";
            document.getElementById("instructions-mc").style.display = "block";
            document.getElementById("instructions-mc").innerHTML = "(疑惑：前往太空館應該使用哪一個出口) 你可以說：";
            document.getElementById("answer1").innerHTML = "A.  唔該我想問吓去太空館應該行去邊個出口？";
            document.getElementById("answer2").innerHTML = "B.  唔好意思你知唔知去太空館應該點行？";
            i++;
            break;
        case 2:
            var recording = new Audio('recordings/roleplay-mc1/1.mp3');
            recording.play();
            document.getElementById("roleplay-progress").value = "3";
            document.getElementById("extra-image").src = "";
            document.getElementById("body").style.background = "linear-gradient(0deg, rgba(20,20,20,0.6), rgba(20,20,20,0.6)), url(/../Chatbot/images/directions-etst-tunnel.jpg)";
            document.getElementById("body").style.backgroundRepeat = "no-repeat";
            document.getElementById("body").style.backgroundSize = "100% 100%";
            document.getElementById("question-box").style.display = "block";
            document.getElementById("question").innerHTML = "你可以沿著這條路前往J出口，然後返回地面就可以。";
            document.getElementById("answer-box").style.display = "none";
            document.getElementById("instructions-mc").innerHTML = "";
            document.getElementById("continue").style.display = "block";
            i++;
            break;
        case 3:
            document.getElementById("roleplay-progress").value = "4";
            document.getElementById("body").style.background = "linear-gradient(0deg, rgba(20,20,20,0.6), rgba(20,20,20,0.6)), url(/../Chatbot/images/directions-space-museum.jpg)";
            document.getElementById("body").style.backgroundRepeat = "no-repeat";
            document.getElementById("body").style.backgroundSize = "100% 100%";
            document.getElementById("mc-face").style.display = "none";
            document.getElementById("user-face").style.display = "none";
            document.getElementById("instructions").style.display = "block";
            document.getElementById("instructions").innerHTML = "你返回地面後，再步行了5分鐘，終於抵達了太空館。";
            document.getElementById("instructions-mc").style.display = "none";
            document.getElementById("question-box").style.display = "none";
            document.getElementById("answer-box").style.display = "none";
            document.getElementById("tryagain").style.display = "block";
            document.getElementById("next").style.display = "block";
            document.getElementById("continue").style.display = "none";
            break;
        case 4:
            i = 1;
            update();
            break;
        case 5:
            document.getElementById("tryagain").style.display = "none";
            document.getElementById("next").style.display = "none";
            window.location.assign("roleplay-mc2.html");
            break;

    }

}


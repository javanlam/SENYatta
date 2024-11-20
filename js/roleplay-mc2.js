function start() {
    document.getElementById("start").style.display = "none";
    document.getElementById("mc").style.display = "block";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("extra-image").src = "images/restaurant-menu.jpg";
    var recording = new Audio('recordings/roleplay-mc2/1.mp3');
    recording.play();
    document.getElementById("question").innerHTML = "侍應：你好，請問你想吃甚麼？";
    document.getElementById("answer1").innerHTML = "A.  我要乾炒牛河。";
    document.getElementById("answer2").innerHTML = "B.  我要揚州炒飯。";
    document.getElementById("answer3").innerHTML = "C.  我要星洲炒米。";
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
            document.getElementById("extra-image").src = "images/restaurant-menu.jpg";
            var recording = new Audio('recordings/roleplay-mc2/1.mp3');
            recording.play();
            document.getElementById("question").innerHTML = "侍應：你好，請問你想吃甚麼？";
            document.getElementById("answer1").innerHTML = "A.  我要乾炒牛河。";
            document.getElementById("answer2").innerHTML = "B.  我要揚州炒飯。";
            document.getElementById("answer3").innerHTML = "C.  我要星洲炒米。";
            i++;
            break;
        case 1:
            document.getElementById("roleplay-progress").value = "2";
            var recording = new Audio('recordings/roleplay-mc2/2.mp3');
            recording.play();
            document.getElementById("question").innerHTML = "侍應：請問你想喝甚麼？";
            document.getElementById("answer1").innerHTML = "A.  我要凍檸茶。";
            document.getElementById("answer2").innerHTML = "B.  我要熱奶茶。";
            document.getElementById("answer3").innerHTML = "C.  我要凍朱古力。";
            i++;
            break;
        case 2:
            document.getElementById("roleplay-progress").value = "3";
            document.getElementById("mc-face").style.display = "none";
            document.getElementById("user-face").style.display = "none";
            document.getElementById("extra-image").src = "";
            document.getElementById("instructions").style.display = "block";
            document.getElementById("instructions").innerHTML = "過了20分鐘後，你點的餐還未送到，你舉手向侍應查詢。";
            document.getElementById("question-box").style.display = "none";
            document.getElementById("answer-box").style.display = "none";
            document.getElementById("continue").style.display = "block";
            i++;
            break;
        case 3:
            document.getElementById("roleplay-progress").value = "4";
            document.getElementById("question-box").style.display = "block";
            document.getElementById("answer-box").style.display = "block";
            document.getElementById("mc-face").style.display = "block";
            document.getElementById("user-face").style.display = "block";
            document.getElementById("instructions").style.display = "none";
            document.getElementById("instructions-mc").innerHTML = "(疑惑：不清楚是否漏單) 你可以說：";
            document.getElementById("extra-image").src = "";
            document.getElementById("answer1").innerHTML = "我叫咗嘅食物仲未到，想睇吓係咪漏單。";
            document.getElementById("answer2").style.display = "none";
            document.getElementById("answer3").style.display = "none";
            document.getElementById("question-box").style.display = "none";
            i++;
            break;
        case 4:
            document.getElementById("roleplay-progress").value = "5";
            document.getElementById("answer-box").style.display = "none";
            document.getElementById("mc-face").style.display = "none";
            document.getElementById("user-face").style.display = "none";
            document.getElementById("instructions").style.display = "block";
            document.getElementById("instructions").innerHTML = "你吃完午餐後準備離開餐廳，於是拿著收據到收銀處付款。";
            document.getElementById("instructions-mc").style.display = "none";
            document.getElementById("continue").style.display = "block";
            i++;
            break;
        case 5:
            document.getElementById("roleplay-progress").value = "6";
            document.getElementById("continue").style.display = "none";
            document.getElementById("instructions").style.display = "none";
            document.getElementById("instructions-mc").style.display = "block";
            document.getElementById("instructions-mc").innerHTML = "";
            document.getElementById("answer-box").style.display = "block";
            document.getElementById("mc-face").style.display = "block";
            document.getElementById("user-face").style.display = "block";
            document.getElementById("question-box").style.display = "block";
            document.getElementById("answer2").style.display = "block";
            document.getElementById("answer3").style.display = "block";
            var recording = new Audio('recordings/roleplay-mc2/3.mp3');
            recording.play();
            document.getElementById("question").innerHTML = "總共$50。";
            document.getElementById("answer1").innerHTML = "A.  我畀現金。";
            document.getElementById("answer2").innerHTML = "B.  八達通唔該。";
            document.getElementById("answer3").innerHTML = "C.  信用卡唔該。";
            i++;
            break;
        case 6:
            document.getElementById("roleplay-progress").value = "7";
            document.getElementById("mc-face").style.display = "none";
            document.getElementById("user-face").style.display = "none";
            document.getElementById("instructions").style.display = "none";
            document.getElementById("instructions-mc").style.display = "none";
            document.getElementById("question-box").style.display = "none";
            document.getElementById("answer-box").style.display = "none";
            document.getElementById("tryagain").style.display = "block";
            document.getElementById("next").style.display = "block";
            break;
        case 7:
            i = 1;
            update();
            break;
        case 8:
            document.getElementById("tryagain").style.display = "none";
            document.getElementById("next").style.display = "none";
            window.location.assign("roleplay-mc3.html");
            break;

    }

}


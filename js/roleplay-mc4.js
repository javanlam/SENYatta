function start() {
    document.getElementById("start").style.display = "none";
    document.getElementById("mc").style.display = "block";
    document.getElementById("instructions").style.display = "none";
    var recording = new Audio('recordings/roleplay-mc4/1.mp3');
    recording.play();
    document.getElementById("question").innerHTML = "家明：你好，你叫甚麼名字？";
    document.getElementById("answer1").innerHTML = "A.  我叫允行。";
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
            var recording = new Audio('recordings/roleplay-mc4/1.mp3');
            recording.play();
            document.getElementById("question").innerHTML = "家明：你好，你叫咩名？";
            document.getElementById("answer1").innerHTML = "A.  我叫允行。";
            i++;
            break;
        case 1:
            document.getElementById("roleplay-progress").value = "2";
            var recording = new Audio('recordings/roleplay-mc4/2.mp3');
            recording.play();
            document.getElementById("question").innerHTML = "家明：我今年中二，你今年多少年級？";
            document.getElementById("answer1").innerHTML = "A.  我今年中一。";
            document.getElementById("answer2").innerHTML = "B.  我今年中二。";
            document.getElementById("answer3").innerHTML = "C.  我今年中三。";
            i++;
            break;
        case 2:
            document.getElementById("roleplay-progress").value = "3";
            var recording = new Audio('recordings/roleplay-mc4/3.mp3');
            recording.play();
            document.getElementById("question").innerHTML = "家明：你有甚麼嗜好？我喜歡踢足球。";
            document.getElementById("answer1").innerHTML = "A.  我鍾意彈琴。";
            document.getElementById("answer2").innerHTML = "B.  我鍾意畫畫。";
            document.getElementById("answer3").innerHTML = "C.  我都鍾意踢波。";
            i++;
            break;
        case 3:
            document.getElementById("roleplay-progress").value = "4";
            var recording = new Audio('recordings/roleplay-mc4/4.mp3');
            recording.play();
            document.getElementById("question").innerHTML = "家明：你是自己一個還是有兄弟姊妹？我有一個姐姐。";
            document.getElementById("answer1").innerHTML = "A.  我有哥哥/家姐。";
            document.getElementById("answer2").innerHTML = "B.  我有細佬/妹妹。";
            document.getElementById("answer3").innerHTML = "C.  我冇兄弟姊妹。";
            i++;
            break;
        case 4:
            document.getElementById("roleplay-progress").value = "5";
            var recording = new Audio('recordings/roleplay-mc4/5.mp3');
            recording.play();
            document.getElementById("question").innerHTML = "家明：你屋企有沒有養寵物？";
            document.getElementById("answer1").innerHTML = "A.  我屋企有養貓。";
            document.getElementById("answer2").innerHTML = "B.  我屋企有養魚。";
            document.getElementById("answer3").innerHTML = "C.  我屋企冇養寵物。";
            i++;
            break;
        case 5:
            document.getElementById("roleplay-progress").value = "6";
            var recording = new Audio('recordings/roleplay-mc4/6.mp3');
            recording.play();
            document.getElementById("question").innerHTML = "家明：我屋企有養貴婦狗。你平時返學喜歡上甚麼課？我最喜歡上體育課，因為有得踢球。";
            document.getElementById("answer1").innerHTML = "A.  我鍾意上中文堂。";
            document.getElementById("answer2").innerHTML = "B.  我鍾意上數學堂。";
            document.getElementById("answer3").innerHTML = "C.  我鍾意上體育堂。";
            i++;
            break;
        case 6:
            document.getElementById("roleplay-progress").value = "7";
            var recording = new Audio('recordings/roleplay-mc4/7.mp3');
            recording.play();
            document.getElementById("question").innerHTML = "家明：你通常甚麼時候來社區中心？";
            document.getElementById("answer1").innerHTML = "A.  我通常星期六日嚟。";
            document.getElementById("answer2").innerHTML = "B.  我通常放學後嚟。";
            document.getElementById("answer3").innerHTML = "C.  我冇固定邊個時間嚟。";
            i++;
            break;
        case 7:
            document.getElementById("roleplay-progress").value = "8";
            var recording = new Audio('recordings/roleplay-mc4/8.mp3');
            recording.play();
            document.getElementById("question").innerHTML = "家明：好吧，我要回家了，下次見到你再和你聊天，再見。";
            document.getElementById("answer3").style.display = "none";
            document.getElementById("answer1").innerHTML = "A.  好呀，下次見！";
            document.getElementById("answer2").innerHTML = "B.  有機會一齊出去玩！";
            i++;
            break;
        case 8:
            document.getElementById("roleplay-progress").value = "9";
            document.getElementById("mc-face").style.display = "none";
            document.getElementById("user-face").style.display = "none";
            document.getElementById("question-box").style.display = "none";
            document.getElementById("answer-box").style.display = "none";
            document.getElementById("tryagain").style.display = "block";
            document.getElementById("next").style.display = "block";
            break;
        case 9:
            i = 1;
            update();
            break;
        case 10:
            document.getElementById("tryagain").style.display = "none";
            document.getElementById("next").style.display = "none";
            window.location.assign("index.html");
            break;

    }

}


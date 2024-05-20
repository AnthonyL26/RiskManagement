
function onLoad() {
    document.getElementById('info').click();
}

var risk = 30;
var badEventText = ['Spoofing', 'Man-in-the-middle', 'XSS', 'SQL Injection', 'DDOS', 'Social Engineering', 'Zero Day', 'Phishing' ];
var goodEventText = ['Good Advertising', 'Success at Exhibition', 'Celebrity Shoutout', 'Successful Sponsor', 'Stock is mooning!'];
var day = 1;

function dayEvent() {
    risk+=2;
    day++;
    document.getElementById('risk').text = risk;
    document.getElementById('daynum').text = day;
    var text = '';
    var chance = Math.floor(Math.random() * 100);
    var moneyChange = Math.floor(Math.random() * 40000) + 10000;
    var isGood = false;
    var event = null;
    if (chance <= risk) {
        event = badEventText[Math.floor(Math.random()*badEventText.length)];
        moneyChange*=-1;
        text += 'Attack: ' + event + ' ' + moneyChange;
    } else {
        event = goodEventText[Math.floor(Math.random()*goodEventText.length)];
        text += 'Blessing: ' + event + ' +' + moneyChange;
        isGood = true;
    }
    var money = parseInt(document.getElementById('moneytext').textContent) + moneyChange;
    document.getElementById('moneytext').textContent = money;
    const eventText = document.createElement('p');
    eventText.textContent = text;
    const eventLog = document.getElementById('event');
    if(isGood) {
        eventText.style.borderColor ='rgb(0, 255, 0)';
        eventText.style.backgroundColor ='rgba(0, 100, 0, 10)';
    } else {
        eventText.style.borderColor ='rgb(255, 0, 0)';
        eventText.style.backgroundColor ='rgba(100, 0, 0, 10)';
    }
    eventLog.prepend(eventText);
    checkWin();
}

function checkWin() {
    if(parseInt(document.getElementById('moneytext').text) > 500000) {
        document.getElementById('win').style.display = 'flex';
    }
    if(parseInt(document.getElementById('moneytext').text) < 0) {
        document.getElementById('lose').style.display = 'flex';
    }
}

const explanations = ['Train up your employees. Reduce SLE of Social Engineering attacks.']

$(document).ready(function() {

$('.upgrade').hover(
    function() {
        console.log('hover')
        var explanation = document.getElementById('explanation');
        console.log(this.id)
        explanation.textContent = explanations[parseInt(this.id)-1];
    }, function() {
        console.log('stop')
    })
});

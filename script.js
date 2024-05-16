function onLoad() {
    document.getElementById('info').click();
}

var risk = 0;
var badEventText = ['bad'];
var goodEventText = ['good'];
var day = 1;

function dayEvent() {
    risk+=2;
    day++;
    document.getElementById('daynum').text = day;
    var text = '';
    var chance = Math.floor(Math.random() * 100);
    var moneyChange = Math.floor(Math.random() * 40000) + 10000;
    var isGood = false;
    if (chance <= risk) {
        text = badEventText[Math.floor(Math.random()*badEventText.length)];
    } else {
        text = goodEventText[Math.floor(Math.random()*goodEventText.length)];
        isGood = true;
    }
    if (!isGood) {
        moneyChange*=-1;
    }
    var money = parseInt(document.getElementById('moneytext').textContent) + moneyChange;
    document.getElementById('moneytext').textContent = money;
    console.log(money);
    const eventText = document.createElement('p');
    eventText.textContent = text;
    const eventLog = document.getElementById('event')
    eventLog.prepend(eventText);
    checkWin();
}

function checkWin() {
    if(parseInt(document.getElementById('moneytext').text) > 500000) {
        console.log('win')
        document.getElementById('win').style.display = 'flex';
    }
}

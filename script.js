
function onLoad() {
    document.getElementById('info').click();
}

var risk = 15;
var badEventText = [ 'Physical Attack', 'DDOS', 'Zero Day', 'Virus', 'Data Corruption', 'XSS', 'SQL Injection', 'Social Engineering', 'Spoofing' ];
var goodEventText = ['Good Advertising', 'Success at Exhibition', 'Celebrity Shoutout', 'Successful Sponsor', 'Stock is mooning!'];
var day = 1;
var boughtUpgrades =[];

function dayEvent() {
    risk+=1;
    if (risk > 80) {
        risk = 80;
    }
    day++;
    document.getElementById('risk').text = risk;
    document.getElementById('daynum').text = day;
    var text = '';
    var chance = Math.floor(Math.random() * 100);
    var moneyChange = Math.floor(Math.random() * 40000) + 10000;
    var isGood = false;
    var event = null;
    if (chance <= risk) {
        eventId = Math.floor(Math.random()*badEventText.length)
        event = badEventText[eventId];
        moneyChange = Math.floor(reduce(eventId, moneyChange));
        moneyChange*=-1;
        text += 'Attack: ' + event + ' SLE: ' + moneyChange;
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

const explanations = ['Reduce SLE of Physical attacks.', 'Reduce SLE of DDOS attacks.', 'Reduce SLE of Zero Day attacks.', 'Reduce SLE of Virus attacks.', 'Reduce SLE of Data Corruption.', 'Reduce SLE of XSS attacks.', 'Reduce SLE of SQL Injection attacks.', 'Reduce SLE of Social Engineering attacks.', 'Reduce SLE of Spoofing attacks.']

$(document).ready(function() {

$('.upgrade').hover(
    function() {
        var explanation = document.getElementById('explanation');
       
        explanation.innerHTML = explanations[parseInt(this.id)] + ' <br>Cost: $30000';
    }, function() {
    })
},
);

function buy(div) {
    money = parseInt(document.getElementById('moneytext').textContent)
    if (money < 30000) {
        document.getElementById('explanation').textContent = 'Not Enough Cash';
    } else {
        money -=30000
        document.getElementById('moneytext').textContent = money;
        div.style.display = 'none'
        boughtUpgrades.push(parseInt(div.id))
    }
}

function reduce(attackID, moneyChange) {
    if (boughtUpgrades.includes(attackID)) {
        moneyChange /= 50;
    }
    return moneyChange
}



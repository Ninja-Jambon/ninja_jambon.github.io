var fs = require('fs');

var msg = fs.readFileSync('msg.txt', 'utf-8');

function addmessage() {

    var text = document.getElementById("text")
    fs.writeFileSync('msg.txt', msg + '\n' + text)

}
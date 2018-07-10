const fs = require('fs');
const {parseGraphicInfo} = require('./parseGraphicInfo');
const {parseGraphic} = require('./parseGraphic');

function openFileCallback(res) {
    console.log(res);
    if(res && res[0]){
        var data = fs.readFileSync(res[0]);
        if(data){
            var infoes = parseGraphicInfo(data);
            console.log('total info : ' + infoes.length);
            var gData = fs.readFileSync(res[0].replace('Info', ''));
            if(infoes && gData){
                var graphic = parseGraphic(gData, infoes[1]);
            }
        }
    }
}

exports.openFileCallback = openFileCallback;
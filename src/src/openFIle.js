const fs = require('fs');
const {parseGraphicInfo} = require('./parseGraphicInfo');

function openFileCallback(res) {
    console.log(res);
    if(res && res[0]){
        var data = fs.readFileSync(res[0]);
        if(data){
            parseGraphicInfo(data);
        }
    }
}

exports.openFileCallback = openFileCallback;
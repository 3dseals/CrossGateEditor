const {GraphicInfo} = require('./GraphicInfo');

function parseGraphicInfo(data) {
    for(var i = 0; i < 400; i+=80){
        data.slice(i,i+79);
    }
};

exports.parseGraphicInfo = parseGraphicInfo;
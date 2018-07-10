const {GraphicInfo} = require('./GraphicInfo');
const {number2Buffer, buffer2Number} = require('./Util');
const {Buffer} = require('buffer');

function parseGraphicInfo(data) {

    var infoes = [];
    for(var i = 0; i < data.length; i+=40){
        var byteArr = data.slice(i,i+40);
        var obj = {};
        obj.id = buffer2Number(byteArr.slice(0, 4));
        obj.addr = buffer2Number(byteArr.slice(4, 8));
        obj.length = buffer2Number(byteArr.slice(8, 12));
        obj.offX = buffer2Number(byteArr.slice(12, 16));
        obj.offY = buffer2Number(byteArr.slice(16, 20));
        obj.width = buffer2Number(byteArr.slice(20, 24));
        obj.height = buffer2Number(byteArr.slice(24, 28));
        obj.areaX = buffer2Number(byteArr.slice(28, 29));
        obj.areaY = buffer2Number(byteArr.slice(29, 30));
        obj.flag = buffer2Number(byteArr.slice(30, 31));
        obj.mapid = buffer2Number(byteArr.slice(36, 40));
        infoes.push(new GraphicInfo(obj));
    }
    return infoes;
};

exports.parseGraphicInfo = parseGraphicInfo;
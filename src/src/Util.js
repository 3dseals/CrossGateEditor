var Buffer = require('buffer').Buffer;

var trimReg = /^\u0000+|\u0000+$/g;

module.exports = {
    /**
     * 将unsigned number转换为Litter-Endian buffer
     * @param number
     * @param bytes buffer的字节数
     */
    number2Buffer: function(number, bytes) {
        bytes = bytes || 4;
        // 转换为16进制字符串
        var hex = (parseInt(number,10)>>>0).toString(16);

        // ------- 将hex length补充成bytes x 2，不足则高位补0，超过则去掉高位
        var length = hex.length;
        var targetLength = bytes * 2;
        if (length < targetLength) {
            var i = targetLength - length;
            while (i > 0) {
                hex = '0' + hex;
                i--;
            }

        } else if (length > targetLength) {
            hex = hex.substring(length - targetLength);
        }

        // ------ 填充到buffer里，高位在后
        var buffer = new Buffer(bytes);

        for(var offset = 0; offset < bytes; offset++)
        {
            var bn = Number("0x" + hex.substring(offset * 2, (offset * 2) + 2));
            buffer.writeUInt8(bn, (bytes-1) - offset);
        }

        return buffer;
    },

    /**
     * 将buf转为数字
     * @param buf
     * @param offset
     * @param bytes 如有符号必须4字节或8字节
     * @returns {number}
     */
    buffer2Number: function(buf, offset, bytes) {
        bytes = bytes || 4;
        if(offset == null)offset = 0;
        var hex = buf.toString('hex', offset, offset + bytes);
        var v = 0;
        for(var offset = 0; offset < bytes; offset++)
        {
            var bn = Number("0x" + hex.substring(offset * 2, (offset * 2) + 2));
            v += bn << (offset*8);
        }
        if(bytes === 4){
            v = v | 0xFFFFFFFF00000000;
        }
        return v;
    },

    /**
     * 构造Object.defineProperty中指定的property属性，并达到const声明的效果，只读，不可写
     * @param value
     * @returns {{configurable: boolean, writable: boolean, value: *}}
     */
    buildConstProp: function(value) {
        return {
            configurable: false,
            writable: false,
            value: value
        };
    },

    /**
     * 在String.prototype.trim的基础上再去掉\u0000
     *  默认trim的处理见下:
     *      https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/trim
     *      http://blog.stevenlevithan.com/archives/faster-trim-javascript
     *      http://jsperf.com/mega-trim-test
     * @param str
     * @returns {string}
     */
    trim: function(str) {
        return str.trim().replace(trimReg, '');
    },
};
class GraphicInfo {
    constructor(data){
        this.id = data.id;          // LONG	序號;	圖片的編號
        this.addr = data.addr;      // DWORD	地址;	指明圖片在數據文件中的起始位置
        this.length = data.length;  // DWORD	塊長度;	圖片數據塊的大小
        this.offX = data.offX;      // LONG	偏移量X;	顯示圖片時，橫坐標偏移X
        this.offY = data.offY;      // LONG	偏移量Y;	顯示圖片時，縱坐標偏移Y
        this.width = data.width;    // LONG	圖片寬度;	...
        this.height = data.height;  // LONG	圖片高度;	...
        this.areaX = data.areaX;    // BYTE	佔地面積-東;	佔地面積是物件所佔的大小，1就表示占1格
        this.areaY = data.areaY;    // BYTE	佔地面積-南;	同上
        this.flag = data.flag;      // BYTE	標誌;	用於地圖，0表示障礙物，1表示可以走上去
        // BYTE[5]	未知;	在StoneAge中本字段長度為45字節
        this.mapid = data.mapid;    // LONG	地圖編號;	低16位表示在地圖文件裡的編號，高16位可能表示版本，非地圖單位的此項均為0

    }
}

exports.GraphicInfo = GraphicInfo;
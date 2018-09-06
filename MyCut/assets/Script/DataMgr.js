const {
    ccclass,
    property
} = cc._decorator;
@ccclass
export default class DataMgr extends cc.Component {

    //当前玩家选择的关卡 游戏中的关卡
    currentCheckPoint = "-1";
    initData() {
        console.log("--- initData ---");
        let mc = cc.sys.localStorage.getItem("maxCheckpoint");
        if (!mc) {
            cc.sys.localStorage.setItem("maxCheckpoint", "001");
        }
    }
    //玩家最高的关卡 此关卡不过的话 后续的关卡 都不可点击，前面的关卡或许有的没有完成，因为有跳跃关卡的道具


    // //内存池大小
    // largeBoxPoolSize=20; //大型砖块 
    // middleBoxPoolSize = 20; //中型砖块
    // smallBoxPoolSize = 100; //小型砖块

    // //牙的内存池大小
    // toothPoolSize = 20;

    // //生成砖块的间隔
    // intervalGenerateTile = 1;

    // //轮盘上牙的数量
    // toothCount = 3;

    // //轮盘转速，tooth转速
    // rouletteSpeed = 90;



    // //场景资源的图片 名称
    // gameBgName = ["cj01", "cj02", "cj03", "cj04", "cj05"];

    // bgFrame = {};

    // //砖块的图片 名称(顺序和出场顺序是一致的)
    // boxName = ["zz01", "zz02", "zz03", "zz04", "zz05"];

    // playerData = [{
    //         name: "plaeyr1",
    //         price: 100
    //     },
    //     {
    //         name: "plaeyr2",
    //         price: 200
    //     },
    //     {
    //         name: "plaeyr3",
    //         price: 300
    //     },
    //     {
    //         name: "plaeyr4",
    //         price: 400
    //     },
    //     {
    //         name: "plaeyr5",
    //         price: 500
    //     }
    // ];

    // initData() {
    //     console.log("--- initData ---");
    //     let score = cc.sys.localStorage.getItem("bestScore");
    //     if (!score)
    //         cc.sys.localStorage.setItem("bestScore", 0);
    //     else
    //         this.userData.bestScore = score;

    //     let propNum = cc.sys.localStorage.getItem("propGreenNum");
    //     if (!propNum)
    //         cc.sys.localStorage.setItem("propGreenNum", 0);
    //     else
    //         this.userData.propGreenNum = parseInt(propNum);

    //     let addHpMax = cc.sys.localStorage.getItem("addHpMax");
    //     if (!addHpMax)
    //         cc.sys.localStorage.setItem("addHpMax", 5);
    //     else
    //         this.userData.addHpMax = parseInt(addHpMax);

    //     let reliveNum = cc.sys.localStorage.getItem("reliveNum");
    //     if (!reliveNum)
    //         cc.sys.localStorage.setItem("reliveNum", 0);
    //     else
    //         this.userData.reliveNum = parseInt(reliveNum);

    //     let reliveTime = cc.sys.localStorage.getItem("reliveTime")
    //     if (!reliveTime) {
    //         cc.sys.localStorage.setItem("reliveTime", parseInt(Date.now() / 1000));
    //         cc.sys.localStorage.setItem("reliveNum", this.userData.addHpMax);
    //         this.userData.reliveNum = this.userData.addHpMax;
    //     } else {
    //         reliveTime = parseInt(reliveTime);
    //         let timeNow = parseInt(Date.now() / 1000);
    //         let num = parseInt((timeNow - reliveTime) / 1800);
    //         if (num > 0) {
    //             if (num + this.userData.reliveNum > this.userData.addHpMax) {
    //                 this.userData.reliveNum = this.userData.addHpMax;
    //                 cc.sys.localStorage.setItem("reliveTime", parseInt(Date.now() / 1000));
    //             } else {
    //                 this.userData.reliveNum += (num);
    //                 cc.sys.localStorage.setItem("reliveTime", reliveTime + num * 1800);
    //             }
    //             cc.sys.localStorage.setItem("reliveNum", this.userData.reliveNum);
    //         }
    //     }

    //     console.log(this.userData);

    //     //加载图片资源
    //     cc.loader.loadRes("cj01", cc.SpriteFrame, function (err, frame) {
    //         if (!err)
    //             cc.dataMgr.bgFrame["cj01"] = frame;
    //     });
    //     cc.loader.loadRes("cj02", cc.SpriteFrame, function (err, frame) {
    //         if (!err)
    //             cc.dataMgr.bgFrame["cj02"] = frame;
    //     });
    //     cc.loader.loadRes("cj03", cc.SpriteFrame, function (err, frame) {
    //         if (!err)
    //             cc.dataMgr.bgFrame["cj03"] = frame;
    //     });
    //     cc.loader.loadRes("cj04", cc.SpriteFrame, function (err, frame) {
    //         if (!err)
    //             cc.dataMgr.bgFrame["cj04"] = frame;
    //     });
    //     cc.loader.loadRes("cj05", cc.SpriteFrame, function (err, frame) {
    //         if (!err)
    //             cc.dataMgr.bgFrame["cj05"] = frame;
    //     });

    //     this.getUerOpenID();
    // }

    // //重大改变之前 如扣钱口金币等 要保存数据 
    // saveData() {
    //     cc.sys.localStorage.setItem("propGreenNum", this.userData.propGreenNum);
    //     cc.sys.localStorage.setItem("addHpMax", this.userData.addHpMax);
    //     cc.sys.localStorage.setItem("reliveNum", this.userData.reliveNum);
    // }

    // //比较储存历史最高纪录
    // getBestScore_i(nowScore) {
    //     if (nowScore > parseInt(this.userData.bestScore)) {
    //         this.userData.bestScore = nowScore;
    //         cc.sys.localStorage.setItem("bestScore", nowScore);
    //     }
    //     return this.userData.bestScore;
    // }

    // getBgFrame_sf(name) {
    //     if (!name)
    //         name = cc.dataMgr.gameBgName[cc.dataMgr.userData.gameBgIdx];
    //     return this.bgFrame[name];
    // }

    // getUerOpenID() {
    //     if (CC_WECHATGAME) {

    //         let openid = cc.sys.localStorage.getItem("openid");
    //         if (!openid) { //保证用户是第一次进游戏
    //             // console.log("发送wx.login请求!");
    //             wx.login({
    //                 success: (res) => {
    //                     let codeInfo = res.code;
    //                     console.log("-- wx.login --" + codeInfo);
    //                     console.log(res);
    //                     if (true)
    //                         return;
    //                     if (res.code) {
    //                         //发起网络请求
    //                         wx.request({
    //                             url: 'https://bpw.blyule.com/public/index.php/index/index/getopenid?code=' + res.code,
    //                             data: {
    //                                 code: res.code,
    //                             },
    //                             success: (obj, statusCode, header) => {
    //                                 // console.log("请求openid,服务器返回的数据！！--> " + obj);
    //                                 // console.log(obj.data.openid);

    //                                 self.openid = obj.data.openid;
    //                                 cc.sys.localStorage.setItem("openid", obj.data.openid); //之所以要存，是在分享的时候放入query中
    //                                 //微信官方文档那里写的调用函数是getLaunchInfoSync，但是根本搜不到这个API，应该是下面这个。
    //                                 var launchOption = wx.getLaunchOptionsSync();
    //                                 //  console.log(launchOption);
    //                                 //  self.otherOpenIDLabel.string = JSON.stringify(launchOption.query) + "query.otherID-->" + launchOption.query.otherID;

    //                                 if (launchOption.query.otherID == null || launchOption.query.otherID == undefined) {
    //                                     launchOption.query.otherID = 0;
    //                                 }
    //                                 // console.log("看下 自己的openid 和 推荐方的openid");
    //                                 // console.log(self.openid);
    //                                 // console.log(launchOption.query.otherID);
    //                                 wx.request({
    //                                     url: 'https://bpw.blyule.com/public/index.php/index/index/add?userid=' + self.openid + "&" + "cuid=" + launchOption.query.otherID,
    //                                     data: {
    //                                         userid: self.openid,
    //                                         cuid: launchOption.query.otherID,
    //                                     },
    //                                     success: (data, statusCode, header) => {
    //                                         //  console.log("添加用户成功！ 服务器返回的数据！！--> ");
    //                                         //  console.log(data);

    //                                         //  console.log("看下自己的openid数据！！--> ");
    //                                         //  console.log(self.openid);
    //                                     },
    //                                 });


    //                             },
    //                         });
    //                     }
    //                 }
    //             });
    //         }
    //     }
    // }

    // //这是分享成功给玩家的奖励 回满reliveNum 和 下局双倍
    // shareSuccess(){
    //     this.userData.reliveNum = this.userData.addHpMax;
    //     this.userData.shareDouble = 2;
    // }
}
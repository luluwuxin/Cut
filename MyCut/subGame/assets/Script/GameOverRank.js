const {
    ccclass,
    property
} = cc._decorator;
@ccclass
export default class GameOverRank extends cc.Component {
    @property(cc.Node)
    backSprite = null;
    @property(cc.Label)
    rankLabel = null;
    @property(cc.Sprite)
    avatarImgSprite = null;
    @property(cc.Label)
    nickLabel = null;
    @property(cc.Label)
    topScoreLabel = null;

    start() {

    }

    init(rank, data, isPlayer) {
        console.log("--- initOverRank ---");
        console.log(data);
        let avatarUrl = data.avatarUrl;
        // let nick = data.nickname.length <= 10 ? data.nickname : data.nickname.substr(0, 10) + "...";
        let nick = data.nickname;
        let grade = data.KVDataList.length != 0 ? (typeof (data.KVDataList[0].value) == "object" ? data.KVDataList[0].value.wxgame.score : 0) : 0;

        if (rank % 2 == 0) {
            this.backSprite.color = new cc.Color(55, 55, 55, 255);
        }
        if (isPlayer) {
            this.rankLabel.node.color = new cc.Color(0, 255, 0, 255);
        }
        this.rankLabel.string = (rank + 1).toString();
        this.createImage(avatarUrl);
        this.nickLabel.string = nick;
        this.topScoreLabel.string = grade.toString();
    }
    createImage(avatarUrl) {
       // if (CC_WECHATGAME) {
            try {
                let image = wx.createImage();
                image.onload = () => {
                    try {
                        let texture = new cc.Texture2D();
                        texture.initWithElement(image);
                        texture.handleLoadedTexture();
                        this.avatarImgSprite.spriteFrame = new cc.SpriteFrame(texture);
                    } catch (e) {
                        //  cc.log(e);
                        this.avatarImgSprite.node.active = false;
                    }
                };
                image.src = avatarUrl;
            } catch (e) {
                // cc.log(e);
                this.avatarImgSprite.node.active = false;
            }
        // } else {
        //     cc.loader.load({
        //         url: avatarUrl,
        //         type: 'jpg'
        //     }, (err, texture) => {
        //         this.avatarImgSprite.spriteFrame = new cc.SpriteFrame(texture);
        //     });
        // }
    }

}
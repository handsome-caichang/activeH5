<template>
<div class="activity-lottery-winning body">
    <div class="main home" style="height: 100%;">
        <div class="editTarget-homeBoxBg hd-Special-bgImgInfo">
            <div class="titleImg titleDown">
                <img id="titleBox" class="editTarget-titleBox" :src="title"/>
            </div>
            <div class="outercont">
                <div class="outer-cont defBgColor" style="cursor: pointer; z-index: 4;" :class="rotateClass"> 
                    <img class="outerImg" :src="rotatePan" /> 
                    <div class="newAwardShow">
                        <img class="zp" v-for="(item,indexs) in zhuanpanData" :key="indexs" :src="item.img" :style="zhuanStyle(item,indexs)" />
                        <img class="editTarget-deviceLine abs" v-for="(item,index) in zhuanpanData" :key="index+100" :style="devicStyle(item,index)" :src="device" />
                    </div> 
                </div>
                <div id="inner" class="startBtnImg" @click="startAward">
                    <img :src="startBtn" />
                </div>
            </div>
            <div class="content">
                <div style="margin-bottom:70px;margin-top:20px;">
                    <div class="center_txt">
                        <div class="txt_style_1 joinNumLine ">已有<span class="ipt_num joinNumLineText">62614</span>人参与</div>
                        <div class="txt_style_1 ">
                            <div class="dayDraw" style="font-size: 0.6rem; color: rgb(250, 82, 8);">
                                您今天还有
                                <span class="ipt_num specil dayDrawCount" style="font-size: 0.6rem; color: rgb(250, 82, 8);">3</span>
                                次抽奖机会
                            </div>
                        </div>
                    </div>
                </div>
                <div id="myAwardBox" class="poupMainBox" style="background-color: rgb(254, 103, 95); border-color: rgb(255, 255, 255);">
                    <img class="titleImgBox" :src="myAwardImg"/>
                    <div class="myAwardInfo rowSpacing">
                        <div class="award-box">
                            <div class="awardLimitBox">
                                <span class="awardText awardNameDef">一等奖：价值100元礼品</span>
                            </div>
                            <span class="awardInfoDetail" @click="gotoDetail">查看详情</span>
                        </div>
                        <div class="infoDeviceLine"></div>
                    </div>
                    <!-- <div class="myAwardInfo rowSpacing">
                        <div style="line-height: 2.6rem; padding-left: 0.05rem;font-size: 0.75rem;">暂无中奖记录</div>
                    </div> -->
                </div>
                <div id="actExplain" class="poupMainBox " style="background-color: rgb(254, 103, 95); border-color: rgb(255, 255, 255);">
                    <img class="titleImgBox" :src="activeRule"/>
                    <div class="ruleBoxBg editTarget-ruleBox"></div>
                    <div id="ruleBox">
                        <div id="activeRuleInfoBox" class="poupMainInfo poupMain">
                            <div id="awardLine" class="rowSpacing poupLine" data-sortkey="a">
                                <div class="titleTextBox">
                                    <div class="awardTitleText" style="font-size: 0.75rem; color: rgb(255, 255, 255);">活动奖品</div>
                                </div>
                                <div id="awardLineBox" class="awardDetailText" style="font-size: 0.7rem; color: rgb(255, 255, 255);">
                                    <div class="unComfortLine awardItem "><span class="awardStyle">一等奖</span>: <span class="award">价值100元礼品</span></div>
                                    <div class="unComfortLine awardItem "><span class="awardStyle">二等奖</span>: <span class="award">价值50元礼品</span></div>
                                    <div class="unComfortLine awardItem "><span class="awardStyle">三等奖</span>: <span class="award">价值10元礼品</span></div>
                                    <div class="unComfortLine awardItem "><span class="awardStyle">四等奖</span>: <span class="award">价值5元小礼品</span></div>
                                    <div class="unComfortLine awardItem "><span class="awardStyle">五等奖</span>: <span class="award">价值5元小礼品</span></div>
                                    <div class="unComfortLine awardItem "><span class="awardStyle">六等奖</span>: <span class="award">价值5元小礼品</span></div>
                                    <div class="unComfortLine awardItem "><span class="awardStyle">七等奖</span>: <span class="award">价值5元小礼品</span></div>
                                    <div class="unComfortLine awardItem "><span class="awardStyle">八等奖</span>: <span class="award">价值5元小礼品</span></div>
                                    <div class="awardItem anwei "><span class="awardStyle">安慰奖</span>: <span class="award">价值5元小礼品</span></div>
                                </div>
                                <div class="infoDeviceLine ruleBoxLine"></div>
                            </div>
                            <div id="gameDateTime" class="rowSpacing poupLine" data-sortkey="b">
                                <div class="titleTextBox">
                                    <div class="awardTitleText" style="font-size: 0.75rem; color: rgb(255, 255, 255);">活动时间</div>
                                </div>
                                <div class="awardDetailText" style="font-size: 0.7rem; color: rgb(255, 255, 255);"><span id="startDate">2018年5月9日 13:48</span>-<span id="endDate">2018年5月16日 13:48</span></div>
                                <div class="infoDeviceLine ruleBoxLine"></div>
                            </div>
                            <div id="explainBox" class="rowSpacing poupLine" data-sortkey="e">
                                <div class="titleTextBox">
                                    <div class="awardTitleText" style="font-size: 0.75rem; color: rgb(255, 255, 255);">活动说明</div>
                                </div>
                                <div id="exlainInfo" class="awardDetailText" style="font-size: 0.7rem; color: rgb(255, 255, 255);">点击“开始”转盘开始转动，最终指针指着的即为您所中的奖品。</div>
                                <div class="infoDeviceLine ruleBoxLine"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="loadingToast" :class="{'hide': !loadinData}">
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
            <i class="weui-loading weui-icon_toast"></i>
            <p class="weui-toast__content">数据加载中</p>
        </div>
    </div>

    <resule-box v-if="noAward" @tralg="tralg" :awardDetail="awardDetail" :type="popType"></resule-box>
</div>
</template>

<script>
import resuleBox from './child/resuleBox'
import device from './image/device.png'
import rotatePan from './image/rotatePan.png'
import zp0 from './image/zp0.png'
import zp1 from './image/zp1.png'
import zp2 from './image/zp2.png'
import zp3 from './image/zp3.png'
import startBtn from './image/startBtn.png'
import title from './image/title.png'
import myAwardImg from './image/myAwardImg.png'
import activeRule from './image/activeRuleImg.png'

export default {
    name: "luckDraw",
    data() {
        return {
            device,
            rotatePan,
            startBtn,
            title,
            myAwardImg,
            activeRule,
            currentAward: '0', // 0 谢谢参与 ， 1 一等奖，2 二等奖， 3 三等奖， 4 四等奖，5 五等奖， 99 安慰奖
            awardList: [ // 当前奖品
                {
                    levelName: '一等奖',
                    id: '1',
                    isConsolation: false,
                    rotateNum: '330'
                },
                {
                    levelName: '二等奖',
                    id: '2',
                    isConsolation: false,
                    rotateNum: '210'
                },
                {
                    levelName: '三等奖',
                    id: '3',
                    isConsolation: false,
                    rotateNum: '90'
                },
            ],
            noAward: false, // 抽奖弹窗
            loadinData: false, // 加载抽奖
            endChoujian: true, // 第一次刚进来的时候，不用旋转,
            zhuanpanData: [
                {
                    img: zp0
                },
                {
                    img: zp2
                },
                {
                    img: zp0
                },
                {
                    img: zp3
                },
                {
                    img: zp0
                },
                {
                    img: zp1
                },
            ],
            awardDetail: { // 当前中奖的详情
                name: '一等奖', // 奖品名称
                levelName: '价值100元礼品', // 奖品等级名称
                id: '123', // id
            },
            popType: '2'
        }
    },
    computed: {
        rotateClass() {
            let className = 'rotate', anweiNum = 30;
            // if (this.awardList.length == 3 || this.awardList.length == 4) {
            //     anweiNum = 30;
            // }else if (this.awardList.length == 1 || this.awardList.length == 2) {
            //     anweiNum = 45;
            // }else if(this.awardList.length == 5 || this.awardList.length == 6) {
            //     anweiNum = 22;
            // }
            if (this.endChoujian) return '';
            switch (this.currentAward) {
                case '0':
                    return className + anweiNum;
                    break;
                case '1':
                    return className + 330;
                    break;
                case '2':
                    return className + 210;
                    break;
                case '3':
                    return className + 90;
                    break;
                default:
                    break;
            }
        }
    },
    components: {
        resuleBox
    },
    methods: {
        zhuanStyle(item,index) {
            let rota = index * 60 + 30;
            let heightNum = Math.round( document.documentElement.clientWidth * 0.95 / 2 *100)/100;  // 宽度高度值的一半
            let widthNum = Math.round( document.documentElement.clientWidth / 2 *100)/100;  // 宽度高度值的一半
            let currWidth = Math.round( document.documentElement.clientWidth * 0.2 / 2  *100)/100; // 自身高度宽度一半
            let trasNum =  widthNum / 2; // y 轴移动距离
            let tops = heightNum - currWidth  + 'px'; // 高度一半 - 自身高度一半
            let lefts = widthNum - currWidth  + 'px'; // 宽度一半 - 自身宽度一半
            return {
                width: '20%',
                top: tops,
                left: lefts,
                transform: `rotate(${rota}deg)`+ `translateY(-${trasNum}px)`
            }
        },
        devicStyle(item,index) {
            let rota = index * 60 - 1;
            let heightNum = Math.round( document.documentElement.clientWidth * 0.95 / 2 *100)/100;  // 宽度高度值的一半
            let widthNum = Math.round( document.documentElement.clientWidth / 2 *100)/100;  // 宽度高度值的一半
            let a = heightNum - 26 / 152 * heightNum ;
            let tops = heightNum - a + 'px'; // 高度一半 - 自身高度一半
            let lefts = widthNum  + 'px'; // 宽度一半 - 自身宽度一半
            return {
                width: '2px',
                height: a + 'px',
                top: tops,
                left: lefts,
                transform: `rotate(${rota}deg)`
            }
        },
        gotoDetail() {
            this.$router.push('awardDetail/123');
        },
        startAward() {
            this.loadinData = true;
            setTimeout(() => {
                this.loadinData = false;
                this.endChoujian = false;
                this.currentAward = '1';
                setTimeout( ()=> {
                    this.endChoujian = true;
                    this.noAward = true;
                }, 5000)
            }, 3000)
        },
        tralg(type) {
            this.noAward = false;
            this.endChoujian = true;
            if (type == 'detail') {
                this.$router.push(`awardDetail/${this.awardDetail.id}`);
            }
        }
    }
};

</script>

<style scoped>
@import "./css/luck.scss";
@import "./css/animations.scss";

.award-box {
    display: flex;
    justify-content: space-around;
}

.titleImgBox {
  z-index: 699;
  position: relative;
  margin: 0 auto;
  margin-bottom: 20px;
}

.txt_style_1 {
    text-align: center;
}
.hd-Special-bgImgInfo {
    background-image: url('./image/homeBg.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-color: rgb(254, 103, 95);
    height: 100%;
}

.activity-lottery-winning {
    background-color: #fff;
}

.titleImg .editTarget-titleBox {
    width: 80%;
}

.joinNumLine {
    color: rgb(250, 82, 8);
    font-size: 0.6rem;
    text-shadow: rgb(255, 255, 255) 1px 0px 0px, rgb(255, 255, 255) -1px 0px 0px, rgb(255, 255, 255) 0px 1px 0px, rgb(255, 255, 255) 0px -1px 0px;
}

.joinNumLineText {
    color: rgb(250, 82, 8);
    font-size: 0.6rem;
    text-shadow: rgb(255, 255, 255) 1px 0px 0px, rgb(255, 255, 255) -1px 0px 0px, rgb(255, 255, 255) 0px 1px 0px, rgb(255, 255, 255) 0px -1px 0px;
}
.weui-mask_transparent {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}
.weui-toast {
    position: fixed;
    z-index: 5000;
    width: 7.6em;
    min-height: 7.6em;
    top: 180px;
    left: 50%;
    margin-left: -3.8em;
    background: rgba(17,17,17,0.7);
    text-align: center;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
}
@keyframes weuiLoading {
	0% {
		-webkit-transform: rotate3d(0,0,1,0deg);
		transform: rotate3d(0,0,1,0deg)
	}

	100% {
		-webkit-transform: rotate3d(0,0,1,360deg);
		transform: rotate3d(0,0,1,360deg)
	}
}
.weui-icon_toast.weui-loading {
	margin: 30px 0 0;
	width: 38px;
	height: 38px;
	vertical-align: baseline
}
.weui-loading {
	width: 20px;
	height: 20px;
	display: inline-block;
	vertical-align: middle;
	-webkit-animation: weuiLoading 1s steps(12,end) infinite;
	animation: weuiLoading 1s steps(12,end) infinite;
	background: transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;
	background-size: 100%
}
.weui-toast__content {
    margin: 0 0 15px;
}

.myAwardInfo .awardNameDef {
    display: inline-block;
    vertical-align: bottom;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.myAwardInfo .awardInfoDetail {
    font-size: 18px;
    color: rgb(255, 252, 0);
    width: 25%;
}
.awardLimitBox {
    display: inline-block;
    vertical-align: bottom;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px; 
    color: rgb(255, 255, 255);
    width: 75%;
}

.titleImg {
    text-align: center;
    padding-top: 20px;
}
</style>

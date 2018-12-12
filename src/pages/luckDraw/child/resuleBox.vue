<template>
<div class="resuleBox" style="opacity: 1;">
    <div v-if="type == '1'" class="resule-gift-box" style="opacity: 1;">
        <img class="bgc abs" :src="xydzpFailImg">
        <img @click="tralg" class="btn abs" :src="againImg" :style="btnStyle">
    </div>

    <div v-if="type == '2'" class="resule-gift-box" style="opacity: 1;">
        <img class=" abs slaveImg" :src="successBg">
        <img class="abs awardImg" :style="resultStyle('2')" :src="theGift">
        <p class="abs resuleText" :style="resultStyle('3')">{{awardDetail.name}}</p>
        <p class="abs resuleText" :style="resultStyle('4')">{{awardDetail.levelName}}</p>
        <img class="abs btnImg" :style="resultStyle('5')" :src="seeAward" @click="tralg('detail')">
    </div>
</div>
</template>

<script>
import againImg from '../image/againImg.png';
import xydzpFailImg from '../image/xydzpFailImg.png';
import theGift from '../image/theGift.png';
import seeAward from '../image/seeAwardDetailImg.png';
import successBg from '../image/successBgImg.png';
export default {
    name: 'resuleBox',
    props: {
        type: {
            default: '1' // 弹窗类型，1 为没中奖， 2 为中奖
        },
        awardDetail: {
            type: Object,
            default: () => {
                return {
                    name: '', // 奖品名称
                    levelName: '', // 奖品等级名称
                    id: '', // id
                }
            }
        }
    },
    data() {
        return {
            xydzpFailImg,
            againImg,
            theGift,
            seeAward,
            successBg
        }
    },
    computed: {
        btnStyle() {
            let imgHeight = Math.round((322.78 / 256 * document.documentElement.clientWidth * 0.8) * 100) / 100;
            let imgYH = Math.round((126 / 256 * document.documentElement.clientWidth * 0.8) * 100) / 100;
            let btnH = Math.round((38.22 / 128 * document.documentElement.clientWidth * 0.4) * 100) / 100;
            let btnTop = Math.round((imgHeight - imgYH / 2 - btnH / 2) * 100) / 100 + 20 + 'px';
            return {
                top: btnTop
            }
        }
    },
    methods: {
        tralg(type = '') {
            this.$emit('tralg', type);
        },
        resultStyle(type) {
            let cliWidth = document.documentElement.clientWidth,tops = '';
            let awardTop = Math.round( (140 / 320 * cliWidth) * 100 ) / 100 + 'px'; // 奖品图片的top
            let levelNameTop = Math.round( (255 / 320 * cliWidth) * 100 ) / 100 + 'px'; // 奖品等级名称的top
            let nameTop = Math.round( (280 / 320 * cliWidth) * 100 ) / 100 + 'px'; // 奖品名称的top
            let btnTop = Math.round( (330 / 320 * cliWidth) * 100 ) / 100 + 'px'; // 按钮的top
           if (type == '2') {
               tops = awardTop;
           }
           if(type == '3') {
               tops = levelNameTop;
           }
           if(type == '4') {
               tops = nameTop;
           }
           if(type == '5') {
               tops = btnTop;
           }
            return {
                top: tops
            }
        }
    }
}
</script>

<style scoped>
.resuleText {
    text-shadow: 1px 0 0 #fff, -1px 0 0 #fff, 0px 1px 0 #fff, 0px -1px 0 #fff;
    text-align: center;
    color: rgb(255, 107, 58);
    font-size: 20px;
}
.btnImg {
    width: 50%;
    top: 350px;
    z-index: 1;
}
.awardImg {
    width: 30%;
    z-index: 1;
}
.slaveImg {
    width: 90%;
}

.resule-gift-box {
    display: flex;
    justify-content: center;
}

.bgc {
    width: 80%;
    top: 20px;
}

.btn {
    width: 40%;
}
</style>

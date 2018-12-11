<template>
<div class="product-container">
    <div class="home basePage" _page="home">
        <div class="imgContainer swiper-imgContainer-resize" style="height: 0px;">
            <div class="swiper-container">
            </div>
        </div>
        <div class="absCenter">
            已有 <span class="specil">2</span> 人参与拼团
        </div>
        <div id="hotGoodInfoBox" class="innerBox" style="display: block;">
    			<div class="contentBox">
                    <div class="hotGoodList">
                        <div class="hotGoodItem">
                            <img class="headImg" src="//hdg.faisys.com/image/ptchl_zf/headImg60.png">
                            <span class="name">邝**</span>
                            <span>正在拼</span>
                            <span class="goodName">价值100元礼品</span>
                        </div>
                        <div class="hotGoodItem">
                            <img class="headImg" src="//hdg.faisys.com/image/ptchl_zf/headImg60.png">
                            <span class="name">邝**</span>
                            <span>正在拼</span>
                            <span class="goodName">价值100元礼品</span>
                        </div>
                    </div>
                </div>
    		</div>
        <div id="goodInfoBox" class="innerBox">
            <div class="topBar">全部商品</div>
            <div class="goodList">
                <div class="goodItem" index="0" @click="toDetail">
                    <div class="goodCover hd-game-theBg-fillAuto layerId-90 defBgColor" title="点击后编辑" style="background-image: url(&quot;//hdg.faisys.com/image/ptchl_zf/goodImg.png&quot;); background-position: center center; background-repeat: no-repeat; background-size: 100% 100%;"></div>
                    <div class="goodInfo">
                    <div class="goodPrice">
                    <span class="curPrice">￥<span>9.9</span></span>
                    <span class="groupType"><span>3</span>人团</span>
                    </div>
                    <div class="goodDetail">
                    <span style="margin-right: 0.15rem;">原价</span>
                    <span class="originPrice" style="margin-right: 0.3rem;">￥<span>19.9</span></span>
                    <span class="line"></span>
                    <span class="lessNum" style="margin-left: 0.3rem;">库存<span>0</span></span>
                    </div>
                    <div class="goodName">
                    价值100元礼品
                    </div>
                    </div>
                </div>
                <div class="goodItem" index="1" @click="toDetail">
                    <div class="goodCover hd-game-theBg-fillAuto layerId-91 defBgColor" title="点击后编辑" style="background-image: url(&quot;//hdg.faisys.com/image/ptchl_zf/goodImg.png&quot;); background-position: center center; background-repeat: no-repeat; background-size: 100% 100%;"></div>
                    <div class="goodInfo">
                    <div class="goodPrice">
                    <span class="curPrice">￥<span>9.9</span></span>
                    <span class="groupType"><span>3</span>人团</span>
                    </div>
                    <div class="goodDetail">
                    <span style="margin-right: 0.15rem;">原价</span>
                    <span class="originPrice" style="margin-right: 0.3rem;">￥<span>19.9</span></span>
                    <span class="line"></span>
                    <span class="lessNum" style="margin-left: 0.3rem;">库存<span>0</span></span>
                    </div>
                    <div class="goodName">
                    价值50元礼品
                    </div>
                    </div>
                </div>
                <div class="goodItem" index="1" @click="toDetail">
                    <div class="goodCover hd-game-theBg-fillAuto layerId-91 defBgColor" title="点击后编辑" style="background-image: url(&quot;//hdg.faisys.com/image/ptchl_zf/goodImg.png&quot;); background-position: center center; background-repeat: no-repeat; background-size: 100% 100%;"></div>
                    <div class="goodInfo">
                    <div class="goodPrice">
                    <span class="curPrice">￥<span>9.9</span></span>
                    <span class="groupType"><span>3</span>人团</span>
                    </div>
                    <div class="goodDetail">
                    <span style="margin-right: 0.15rem;">原价</span>
                    <span class="originPrice" style="margin-right: 0.3rem;">￥<span>19.9</span></span>
                    <span class="line"></span>
                    <span class="lessNum" style="margin-left: 0.3rem;">库存<span>0</span></span>
                    </div>
                    <div class="goodName">
                    价值50元礼品
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="ruleImg" style="z-index: auto;"> 
        <div id="ruleImg" class="slaveImg" title="点击后编辑">
        </div> 
    </div>
</div>
</template>

<script>
export default {
    name: 'product',
    data() {
        return {

        }
    },
    methods: {
        toDetail() {
            let userId = 123;
            this.$router.push(`product/${userId}`)
        }
    },
    created() {
        
    }
}
</script>

<style scoped>
.swiper-imgContainer-resize .swiper-container {
    width: 16rem;
    height: 10.9653rem;
    background-image: url(https://hdg.faisys.com/image/ptchl_zf/banner.jpg); 
    background-position: center center;
    background-repeat: no-repeat; 
    position: relative; 
    float: none; 
    padding: 0px; 
    background-size: 100% 100%; 
    cursor: pointer;
}
.absCenter {
  position: absolute;
  top: 9rem;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  font-size: .65rem;
    color: #5900ec;
    text-shadow: -1px -1px 0 #fff, 0px -1px 0 #fff, 1px -1px 0 #fff, 1px 0 0 #fff, 1px 1px 0 #fff, 0px 1px 0 #fff, -1px 1px 0 #fff, -1px 0 0 #fff;
    z-index: 10;
}
.home .innerBox .goodItem .goodCover {
    display: inline-block;
    width: 5rem;
    height: 5rem;
}
.home .innerBox .goodItem .goodInfo {
    width: auto;
}
.slaveImg {
    width: 1.792rem;
    height: 1.792rem; 
    top: 0.298667rem; 
    left: 13.8667rem; 
    position: absolute; 
    float: none; 
    z-index: 600; 
    cursor: move; 
    background-size: 100% 100%; 
    background-image: url(https://hdg.faisys.com/image/ptchl_zf/ruleImg_special.png);
}
</style>

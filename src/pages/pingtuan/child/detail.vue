<template>
    <!-- 商品详情页 -->
    <div class="goodDetailPage basePage ptPage editTarget-mainStyle" _page="goodDetailPage">
        <div class="topBar">
            <span class="back"></span>商品详情
        </div>
        <!-- 拼团活动 -->
        <div class="goodDetailBox">
            <!-- 图片 -->
            <div class="swiperAwardBannerWrapper swiper-mask-wrap-manage">
                <div class="imgContainer swiper-imgContainer-resize" style="height: 0px; z-index: auto;">
                      <div class="banner-img" title="点击后编辑" style="">
                      </div>
                </div>
            </div>
            <!-- 描述 价格-->
            <div class="goodInfo">
                <div class="topBox">
                    <div class="priceInfo">
                        <div class="triangle"></div>
                        <div class="curPrice">￥<span>12</span></div><div class="groupType"><span>3</span>人团</div>
                        <div class="originPrice">原价&nbsp;￥<span>19.9</span></div>
                    </div>
                    <div class="timeInfo" style="display: block;">
                        <div class="lessDay">距离<span class="tipsText">结束仅剩</span>&nbsp;<span class="day">57</span>&nbsp;天</div>
                        <div class="lessTime"><span class="hour">16</span>&nbsp;:&nbsp;<span class="minute">17</span>&nbsp;:&nbsp;<span class="second">09</span></div>
                    </div>
                    <div class="tipInfo" style="display: none;">活动已结束</div>
                </div>
                <div class="bottomBox">
                    <div class="goodName"></div>
                    <div class="goodDetailInfo">
                        <div class="hasSell">已拼:&nbsp;<span>1</span></div><div class="lessNum">库存:&nbsp;<span>3</span></div><div class="limitBuy">每人限购<span>1</span>件</div>
                    </div>
                </div>    
            </div>
            <!-- 拼团描述 -->
            <div class="groupRule editTarget-groupRule1"></div>
            <div class="groupRule editTarget-groupRule2"></div>
            <!-- 当前拼团人数 -->
            <div class="groupingBox">
                <div class="title">以下用户正在开团，可直接参团<div class="more">查看更多<span></span></div></div>
                <div class="contentBox">
                    <div class="groupingItem" zlid="undefined">
                        <img class="headImg" src="//hdg.faisys.com/image/ptchl_zf/headImg60.png">
                        <div class="left">
                            <div class="name">邝**</div>
                            <div class="restPeople" style="display: none;">
                                还差<span class="num">1人</span>成团
                            </div>
                        </div>
                        <div class="right">
                            <div class="restPeople">还差<span class="num">1人</span>成团</div>
                            <div class="joinTAGroupBtn mainStyle" style="background-color: rgb(255, 86, 59);">拼TA的团</div>
                        </div>
                    </div>
                    <div class="groupingItem" zlid="undefined">
                        <img class="headImg" src="//hdg.faisys.com/image/ptchl_zf/headImg60.png">
                        <div class="left">
                            <div class="name">邝**</div>
                            <div class="restPeople" style="display: none;">
                                还差<span class="num">1人</span>成团
                            </div>
                        </div>
                        <div class="right">
                            <div class="restPeople">还差<span class="num">1人</span>成团</div>
                            <div class="joinTAGroupBtn mainStyle" style="background-color: rgb(255, 86, 59);">拼TA的团</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 商品详情 -->
            <div class="goodIntroductBox layerId-1 defBgColor" title="点击后编辑" style="cursor: pointer; position: relative; z-index: auto;">
    			<div class="contentBox">
                    <div class="goodIntroductItem">
                        <img class="describeImg" src="//hdg.faisys.com/image/ptchl_zf/describeImg.png">
                        <pre style="display: none;" class="describeText">undefined</pre>
                    </div>
                </div>
    		</div>
        </div>
        <!-- 加入拼团弹窗 -->
        <div id="groupingMask" class="homePoupMask noTouch">
            <div id="groupingPoup" class="ptMsgBox alignCenter">
                <div class="close"></div>
                <div class="title">正在拼团</div>
                <div class="contentBox">
                    <div class="groupingItem" zlid="undefined">
                        <img class="headImg" src="//hdg.faisys.com/image/ptchl_zf/headImg60.png">
                        <div class="left">
                            <div class="name">邝**</div>
                            <div class="restPeople">还差<span class="num">1人</span>成团</div>
                        </div>
                        <div class="right">
                            <div class="restPeople" style="display: none;">还差<span class="num">1人</span>成团</div>
                            <div class="joinTAGroupBtn mainStyle" style="background-color: rgb(255, 86, 59);">拼TA的团</div>
                        </div>
                    </div>
                    <div class="groupingItem" zlid="undefined">
                        <img class="headImg" src="//hdg.faisys.com/image/ptchl_zf/headImg60.png">
                        <div class="left">
                            <div class="name">邝**</div>
                            <div class="restPeople">还差<span class="num">1人</span>成团</div>
                        </div>
                        <div class="right">
                            <div class="restPeople" style="display: none;">还差<span class="num">1人</span>成团</div>
                            <div class="joinTAGroupBtn mainStyle" style="background-color: rgb(255, 86, 59);">拼TA的团</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapMutations} from 'vuex'
    export default {
        name: 'detail',
        components: {
        },
        methods: {
            ...mapMutations([
                'set_bottomTab'
            ]),
        },
        created() {
            this.set_bottomTab(false);
        },
        beforeDestroy() {
            this.set_bottomTab(true)
        },
    }
</script>
<style scoped>
    .banner-img {
        width: 16rem; 
        height: 16rem; 
        background-image: url(https://hdg.faisys.com/image/ptchl_zf/goodImg.png); 
        background-position: center center; 
        background-repeat: no-repeat; 
        position: relative; 
        float: none; 
        z-index: 100; 
        background-size: 100% 100%; 
        cursor: pointer;
    }
    .editTarget-groupRule1 {
        background-image: url(https://hdg.faisys.com/image/ptchl_zf/groupRule1.jpg);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 99.7333% 99.7054%;
        cursor: pointer;
        position: relative;
        z-index: 700;
    }
    .editTarget-groupRule2 {
        background-image: url("https://hdg.faisys.com/image/ptchl_zf/groupRule2.jpg");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 99.7333% 99.7054%;
        cursor: pointer;
        position: relative;
        z-index: 700;
        display: none;
    }
</style>

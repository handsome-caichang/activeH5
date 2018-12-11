<template>
<div id="awardDetailBox" class="poupMain bg isAngular">
    <div id="awardDetailScrollBox">
        <div class="awardCloseIcon" @click="closeDetail"></div>
        <div class="awardDetail">
            <div class="hostName" style="padding: 0.7rem 2.2rem 1rem 0.7rem; text-align: left; color: rgb(255, 255, 255); word-break: break-word; text-decoration: none;"></div>
            <div class="awardName layerId-26 defBgColor" style="cursor: pointer; position: relative;">价值100元礼品</div>
            <div class="awardCodeTime codeTimeFixedRange"><em>使用期限</em>：<span class="codeBgTime">2018.12.03</span> - <span class="codeEndTime">2018.12.10</span></div>
            <div class="awardDetailWarp"></div>
        </div>
        <div class="codeImgBox">
            <div id="codeDetailInfoBox">
                <div class="codeLine"><span id="codeName">兑奖码</span>：<span style=" max-width: 8.7rem;word-wrap: break-word;display: inline-block; vertical-align: middle;" class="code selectText">888888</span><span class="copy">复制券码</span></div>
                <div class="codeOptInfo_Gift">凭券联系现场工作人员兑奖</div>
            </div>
        </div>
        <div class="awardBtnList">
            <div style="height:0.4rem;"></div>
            <!--兑奖券详情弹出层 -->
            <div id="ticketDetailBox">
                <p class="ticketitle"><span class="text">兑奖券详情</span></p>
                <div class="ticketInfo">
                    <div class="itemList dateLine codeTimeFixedRange">
                        <div class="title">有效日期</div>
                        <div class="box">
                            <span class="beginTime">2016.03.03</span>至<span class="endTime">2017.03.03</span>
                        </div>
                    </div>
                    <div class="itemList addressLine">
                        <div class="title titleAdress">兑奖地址</div>
                        <div class="box">
                            <div class="address">地址</div>
                        </div>
                    </div>
                    <div class="itemList addressLine">
                        <div class="title titleAdress">客服电话</div>
                        <div class="box">
                            <div class="address">
                                <span class="phoneText">18602186759</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'awardDetail',
    methods: {
        closeDetail() {
            this.$router.go(-1);
        }
    }
}
</script>

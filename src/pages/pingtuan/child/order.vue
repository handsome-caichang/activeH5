<template>
  <div id="payment_module">
      <div class="orderListPage pay_page editTarget-mainStyle" data-page="orderList" style="display: block;">
        <div class="topBar tab">
          <div class="topBarTab active">
            <span>全部</span>
          </div>
          <div class="topBarTab" style="display: none;">
            <span>待支付</span>
          </div>
          <div class="topBarTab" >
            <span>拼团中</span>
          </div>
          <div class="topBarTab" >
            <span>交易成功</span>
          </div>
        </div>
        <div class="orderList payPageContent">
          <div class="orderLine" _index="0">
            <div class="contentBox">
            <div class="orderDetail">
              <div class="detailTop orderId">
              <div class="content">
                订单号：10000001
              </div>
              </div>
              <div class="commodityBox gray_bg">
              <img class="commodityImg" src="//hdg.faisys.com/image/ptchl_zf/goodImg.png" />
              <div class="commodityName">
                价值100元礼品2233
              </div>
              <div class="commodityPrice">
                <span class="crrPrice">￥9.9</span>
                <span class="oriPrice warnMsg">￥19.9</span>
                <span class="commodityNum">x1</span>
              </div>
              </div>
            </div>
            <div class="orderStatus">
              拼团中
            </div>
            <div class="cutOffRule"></div>
            <div class="orderBottom">
              <span class="totalMoney">合计：<span class="num">￥9.9</span></span>
              <div class="orderBtn mainStyle confirmBtn" style="display: none; background-color: rgb(255, 86, 59);">
              付款
              </div>
              <div class="orderBtn mainStyle shareBtn" style="display: inline-block; background-color: rgb(255, 86, 59);">
              去分享
              </div>
              <div class="orderBtn deleteBtn" style="display: none;">
              删除订单
              </div>
            </div>
            </div>
          </div>
          <div class="orderLine" _index="1">
            <div class="contentBox">
            <div class="orderDetail">
              <div class="detailTop orderId">
              <div class="content">
                订单号：10000002
              </div>
              </div>
              <div class="commodityBox gray_bg">
              <img class="commodityImg" src="//hdg.faisys.com/image/ptchl_zf/goodImg.png" />
              <div class="commodityName">
                价值100元礼品2233
              </div>
              <div class="commodityPrice">
                <span class="crrPrice">￥9.9</span>
                <span class="oriPrice warnMsg">￥19.9</span>
                <span class="commodityNum">x1</span>
              </div>
              </div>
            </div>
            <div class="orderStatus">
              交易成功
            </div>
            <div class="cutOffRule"></div>
            <div class="orderBottom">
              <span class="totalMoney">合计：<span class="num">￥9.9</span></span>
              <div class="orderBtn mainStyle confirmBtn" style="display: none; background-color: rgb(255, 86, 59);">
              付款
              </div>
              <div class="orderBtn mainStyle shareBtn" style="display: none; background-color: rgb(255, 86, 59);">
              去分享
              </div>
              <div class="orderBtn deleteBtn" style="display: inline-block;">
              删除订单
              </div>
            </div>
            </div>
          </div>
            <div class="orderLine" _index="0">
              <div class="contentBox">
              <div class="orderDetail">
                <div class="detailTop orderId">
                <div class="content">
                  订单号：10000001
                </div>
                </div>
                <div class="commodityBox gray_bg">
                <img class="commodityImg" src="//hdg.faisys.com/image/ptchl_zf/goodImg.png" />
                <div class="commodityName">
                  价值100元礼品2233
                </div>
                <div class="commodityPrice">
                  <span class="crrPrice">￥9.9</span>
                  <span class="oriPrice warnMsg">￥19.9</span>
                  <span class="commodityNum">x1</span>
                </div>
                </div>
              </div>
              <div class="orderStatus">
                拼团中
              </div>
              <div class="cutOffRule"></div>
              <div class="orderBottom">
                <span class="totalMoney">合计：<span class="num">￥9.9</span></span>
                <div class="orderBtn mainStyle confirmBtn" style="display: none; background-color: rgb(255, 86, 59);">
                付款
                </div>
                <div class="orderBtn mainStyle shareBtn" style="display: inline-block; background-color: rgb(255, 86, 59);">
                去分享
                </div>
                <div class="orderBtn deleteBtn" style="display: none;">
                删除订单
                </div>
              </div>
              </div>
            </div>
            <div class="orderLine" _index="1">
              <div class="contentBox">
              <div class="orderDetail">
                <div class="detailTop orderId">
                <div class="content">
                  订单号：10000002
                </div>
                </div>
                <div class="commodityBox gray_bg">
                <img class="commodityImg" src="//hdg.faisys.com/image/ptchl_zf/goodImg.png" />
                <div class="commodityName">
                  价值100元礼品2233
                </div>
                <div class="commodityPrice">
                  <span class="crrPrice">￥9.9</span>
                  <span class="oriPrice warnMsg">￥19.9</span>
                  <span class="commodityNum">x1</span>
                </div>
                </div>
              </div>
              <div class="orderStatus">
                交易成功
              </div>
              <div class="cutOffRule"></div>
              <div class="orderBottom">
                <span class="totalMoney">合计：<span class="num">￥9.9</span></span>
                <div class="orderBtn mainStyle confirmBtn" style="display: none; background-color: rgb(255, 86, 59);">
                付款
                </div>
                <div class="orderBtn mainStyle shareBtn" style="display: none; background-color: rgb(255, 86, 59);">
                去分享
                </div>
                <div class="orderBtn deleteBtn" style="display: inline-block;">
                删除订单
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
    name: 'order',
    data() {
        return {

        }
    }
}
</script>

<style scoped>  
  @import "../../../assets/css/paryment.scss";
  #payment_module {
    padding-bottom: 2.2rem;
    z-index: 1;
  }
  #payment_module .orderListPage .orderList{
    padding-bottom: 0px;
  }
  #payment_module .topBarTab.active span {
    color: #ff563b;
    border-bottom: 0.1rem solid #ff563b;
  }
</style>

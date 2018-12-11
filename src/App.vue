<template>
  <div id="app">
    
    <div id="preloadPage" class="bg hideImp">
      <div class="spinner">
        <div class="spinner-container container1">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
        </div>
        <div class="spinner-container container2">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
        </div>
        <div class="spinner-container container3">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
        </div>
      </div>
      <div class="info"><span id="loadPercent">1</span>%</div>
      <div id="userPreload" data-src="http://7020498.h40.faiusr.com/4/8TOcE262U1Mx4GN0gT7xM9N1Y2Y1cDO.png"></div>
    </div>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "./assets/css/base.scss";
  html,body {
    font-size: 23.4375px;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  #app {
    overflow: hidden auto;
    height: 100%;
  }
</style>

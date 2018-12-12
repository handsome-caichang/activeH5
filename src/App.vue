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
    <transition name="slide-fade" transition>
        <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
      window.H5That = this;
  }
}
</script>

<style>
  @import "./assets/css/base.scss";
  html,body {
    font-size: 23.4375px;;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  #app {
    overflow: hidden auto;
    height: 100%;
  }
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(375px);
  }

</style>

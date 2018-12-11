<template>
<div class="container">
    <transition name="slide">
        <router-view />
    </transition>
    <div id="bottomTab" v-if="bottomTab">
        <div id="tab">
            <router-link :to="{ path: 'product' }" tag="div" class="bottomItem" active-class="active">
                <div class="bottomIcon editTarget-homeIcon_normal"></div>
                <div class="bottomIcon editTarget-homeIcon_active"></div>
                <div class="bottomText">首页</div>
            </router-link>
            <router-link :to="{ path: 'order' }" tag="div" class="bottomItem" active-class="active">
                <div class="bottomIcon editTarget-orderIcon_normal"></div>
                <div class="bottomIcon editTarget-orderIcon_active"></div>
                <div class="bottomText">订单</div>
            </router-link>
        </div>
    </div>
    <bottom-tab  v-if="!bottomTab"></bottom-tab>
</div>
</template>

<script>
import BottomTab from './child/component/bottomTab'
import {mapState,mapMutations} from 'vuex'
export default {
    name: 'home',
    data() {
        return {}
    },
    computed: {
       ...mapState([
           'bottomTab'
       ])
    },
    methods: {
    },
    created() {
    },
    components: {
        BottomTab
    }
}
</script>

<style scoped>
  @import "../../assets/css/home.scss";
.container {
    height: 100%;
    overflow: auto;
}
#bottomTab #tab .bottomItem .editTarget-homeIcon_normal{
    display: inline-block;
} 
#bottomTab #tab .bottomItem.active .editTarget-homeIcon_normal {
     display: none;
}
#bottomTab #tab .bottomItem.active .editTarget-homeIcon_active{
    display: inline-block;
} 
#bottomTab #tab .bottomItem .editTarget-orderIcon_normal{
    display: inline-block;
} 
#bottomTab #tab .bottomItem.active .editTarget-orderIcon_normal {
     display: none;
}
#bottomTab #tab .bottomItem.active .editTarget-orderIcon_active{
    display: inline-block;
} 

.editTarget-homeIcon_normal {
    background-image: url(https://hdg.faisys.com/image/ptchl_zf/homeIcon_normal.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 99.5553% 99.5553%;
    cursor: pointer;
    z-index: auto;
}

.editTarget-homeIcon_active {
    background-image: url(https://hdg.faisys.com/image/ptchl_zf/homeIcon_active.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 99.5553% 99.5553%;
    cursor: pointer;
}

.editTarget-orderIcon_normal {
    background-image: url(https://hdg.faisys.com/image/ptchl_zf/orderIcon_normal.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 99.5553% 99.5553%;
    cursor: pointer;
}

.editTarget-orderIcon_active {
    background-image: url(https://hdg.faisys.com/image/ptchl_zf/orderIcon_active.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 99.5553% 99.5553%;
    cursor: pointer;
}

</style>

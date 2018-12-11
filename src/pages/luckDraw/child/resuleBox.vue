<template>
<div class="resuleBox hide regPage" style="opacity: 1; display: block;">
    <div id="resule-gift-box" style="opacity: 1; height: 711px; display: block;" class="">
        <img class="editTarget-xydzpGetPricePic imgPreventDefault abs" :src="xydzpFailImg" style="top: 3rem; left: 2rem; width: 12.2rem; height: 15.2rem;">
        <img @click="tralg" class="editTarget-xydzpAgainImg abs" :src="againImg" style="top: 14.5rem; left: 4.5rem; width: 6.8rem; height: 2rem;">
    </div>
</div>
</template>

<script>
import againImg from '../image/againImg.png';
import xydzpFailImg from '../image/xydzpFailImg.png';
export default {
    name: 'resuleBox',
    data() {
        return {
            xydzpFailImg,
            againImg
        }
    },
    methods: {
        tralg() {
            this.$emit('tralg');
        }
    }
}
</script>

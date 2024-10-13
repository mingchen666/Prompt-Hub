<template>
 <div class="custom-tooltip" v-if="visible" :style="positionStyle">
    <div class="tooltip-content">
      {{ content }}
    </div>
    <div class="tooltip-arrow" :style="arrowStyle"></div>
 </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue'

const props = defineProps({
 content: {
    type: String,
    required: true
 },
 position: {
    type: Object,
    default: () => ({ top: '50%', left: '50%' })
 },
 arrowPosition: {
    type: String,
    default: 'bottom' //可选值：top, bottom, left, right
 }
})

const visible = ref(true)
const positionStyle = ref({
 top: props.position.top,
 left: props.position.left,
 transform: 'translate(-50%, -50%)'
})

const arrowStyle = ref({})

const updateArrowStyle = () => {
 switch (props.arrowPosition) {
    case 'top':
      arrowStyle.value = {
        bottom: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        borderTopColor: '#fff'
      }
      break
    case 'bottom':
      arrowStyle.value = {
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        borderBottomColor: '#fff'
      }
      break
    case 'left':
      arrowStyle.value = {
        top: '50%',
        right: '100%',
        transform: 'translateY(-50%)',
        borderLeftColor: '#fff'
      }
      break
    case 'right':
      arrowStyle.value = {
        top: '50%',
        left: '100%',
        transform: 'translateY(-50%)',
        borderRightColor: '#fff'
      }
      break
 }
}

onMounted(() => {
 updateArrowStyle()
 setTimeout(() => {
    visible.value = false
 },5000)
})
</script>

<style scoped>
.custom-tooltip {
 position: fixed;
 background-color: #fff;
 border:1px solid #ccc;
 border-radius:4px;
 padding:10px;
 box-shadow:04px8px rgba(0,0,0,0.1);
 z-index:1000;
}

.tooltip-content {
 font-size:14px;
 color: #333;
}

.tooltip-arrow {
 position: absolute;
 width:0;
 height:0;
 border-style: solid;
 border-width:6px;
 border-color: transparent;
}
</style>

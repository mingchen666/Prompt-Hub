<template>
  <div class="not-found">
    <div class="background"></div>
    <el-result icon="error" title="404" sub-title="页面未找到" class="result">
      <template #extra>
        <arco-button type="primary" @click="goHome">返回首页</arco-button>
      </template>
    </el-result>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://source.unsplash.com/random/1920x1080') no-repeat center center;
  background-size: cover;
  filter: blur(5px);
  z-index: -1;
}

.result {
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>

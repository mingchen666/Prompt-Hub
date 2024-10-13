<template>
  <div class="product-detail">
    <!--主容器 -->
    <div class="main-container">
      <!-- <a-split class="main-container" v-model:size="size" min="0.2" :style="{
        height: '100%',
        width: '100%',
        minWidth: '500px',
        border: '1px solid var(--color-border)'
      }">
        <template #first>
          <div class="left-container1" :style="{ maxHeight: '800px',height: '100%', width: '100%' }" v-loading="isLoading" element-loading-text="生成中,请稍后...">
            <CodeDisplay :code="code"></CodeDisplay>
          </div>
        </template>
        <template #second>
          <div
          :style="{  maxHeight: '800px',height: '100%', width: '100%' }"
            class="right-container1"
            v-loading="isLoading"
            element-loading-text="生成中,请稍后..."
          >
            <CodePreview :code="code"></CodePreview>
          </div>
        </template>
      </a-split> -->

      <!--左容器：代码 -->
      <div class="left-container" v-loading="isLoading" element-loading-text="生成中,请稍后...">
        <CodeDisplay :code="code"></CodeDisplay>
      </div>
      <!--右容器：代码预览区域 -->
      <div class="right-container" v-loading="isLoading" element-loading-text="生成中,请稍后...">
        <CodePreview :code="code"></CodePreview>
      </div>
    </div>
    <!-- 案例展示 -->
    <div class="cases-show">
      <case-show></case-show>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import CaseShow from './CaseShow.vue'
import CodeDisplay from './CodeDisplay.vue'
import CodePreview from './CodePreview.vue'
// import { getNewChineseService } from '@/apis/newmeaning';
const props = defineProps({
  code: {
    type: String,
    default: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello, World! Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f0f0f0; /* 浅灰色背景 */
        }
        .hello-world {
            font-size: 2em; /* 文字大小 */
            color: #333; /* 深灰色文字 */
        }
    </style>
</head>
<body>
    <div class="hello-world">Hello, World!</div>
</body>
</html>`
  },
  loading: {
    type: Boolean,
    default: false
  }
})
const size = ref(0.5)
const isLoading = computed(() => props.loading)
// getNewChineseService
</script>

<style scoped>
.product-detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  /* background-color: #f5f5f5; */
}

.main-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  max-width: 1200px;
  height: 600px;
  max-height: 800px;
  /* background-color: #fff; */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.left-container,
.right-container {
  /* flex: 1; */
  /* padding: 10px; */
  height: 100%;
  /* width: 50%; */
  max-height: 800px;
  border-radius: 8px;
  /* background-color: #f9f9f9; */
}

.left-container {
  flex:1;
  width: 40%;
  margin-right: 20px;
}

.right-container {
  flex:1.5;
  width: 50%;
  /* background-color: #e9e9e9; */
}
.case-show {
  /* margin-top: 2px; */
}
</style>

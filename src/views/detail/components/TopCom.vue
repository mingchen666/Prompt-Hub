<template>
  <div class="product-detail">
    <!--输入框和一键生成按钮 -->
    <div class="input-container">
      <el-input
        v-model="inputValue"
        style="width: 450px; margin-right: 20px"
        :rows="5"
        type="textarea"
        show-word-limit
        maxlength="10000"
        placeholder="请输入内容"
      />

      <a-button shape="circle" type="primary" @click="handleGenerate" class="generate-button"
        >一键生成</a-button
      >
    </div>
    <a-button status="warning" @click="handleRead" class="read-btn"
      ><IconWarning /> <span>使用前必读！</span></a-button
    >
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import { ElMessageBox } from 'element-plus'
import IconWarning from '@/components/icons/IconWarning.vue'
import { messages } from '@/utils/messagetext'
// import { useUserInfoStore } from '@/stores/index'

//输入框的值
const inputValue = ref('')
// const userInfoStore = useUserInfoStore()
const emits = defineEmits(['generate-click'])
//处理一键生成按钮点击事件
const handleGenerate = () => {
  // userInfoStore.setCurrentPrompt(inputValue.value)
  emits('generate-click', inputValue.value)
}
// 接收父组件传来的type值
const categoryType = inject('categoryType')
// 处理显示消息的方法,弹出框
const handleRead = () => {
  if (categoryType in messages) {
    const { title, text } = messages[categoryType]
    ElMessageBox.alert(text, title, {
      confirmButtonText: '我知道了'
    })
  } else {
    ElMessageBox.alert('小罗的测试消息', '测试', {
      confirmButtonText: '我知道了'
    })
  }
}
</script>

<style scoped>
.product-detail {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height:100vh; */
  background-color: #f5f5f5;
  margin-top: 80px;
}

.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 600px;
  /* background-color: #fff; */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

:deep(.el-textarea) {
  margin-right: 20px;
}
/* 生成按钮 */
.generate-button {
  width: 150px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 12px;
  margin-left: 50px;
}
.read-btn {
  float: right;
  /* display: flex;
  justify-content: flex-start; */
}
.read-btn span {
  margin-left: 5px;
}
</style>

<template>
  <div class="update-log-container">
    <h1 class="update-log-title">更新日志</h1>
    <div class="update-log-list">
      <div v-for="(log, index) in updateLogs" :key="index" class="log-item">
        <div class="log-header">
          <span class="log-date">{{ log.date }}</span>
        </div>
        <ul class="log-content">
          <li v-for="(detail, idx) in log.details" :key="idx" class="log-detail">
            {{ detail }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const updateLogs = ref([
  {
    date: '2024-10-07  v1.1',
    details: [
      '添加首页公告引导',
      '添加更新日志',
      '添加小罗的api多个model',
      '无需手动设置key信息，直接就能使用(追求效果更好建议换成自己的)',
      '没有key的可以联系小罗提供'
    ]
  },
  {
    date: '2024-10-06  v1.0',
    details: ['初始版本v1.0发布']
  }
])
</script>

<style scoped>
.update-log-container {
  min-height: 100vh;
  max-width: 1000px;
  margin: 40px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.update-log-title {
  font-size: 28px;
  font-weight: 600;
  color: #333333;
  text-align: center;
  margin-bottom: 30px;
}

.update-log-list {
  border-left: 2px solid #e5e5e5;
  padding-left: 20px;
}

.log-item {
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #f0f0f0;
}

.log-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.log-date {
  font-size: 20px;
  font-weight: 500;
  color: #333333;
  background-color: #f0f0f0;
  padding: 6px 12px;
  border-radius: 6px;
}

.log-content {
  list-style: none;
  padding: 0;
}

.log-detail {
  font-size: 16px;
  color: #666666;
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}

.log-detail::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  background-color: #333333;
  border-radius: 50%;
}
</style>

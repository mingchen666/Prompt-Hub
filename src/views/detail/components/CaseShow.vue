<template>
  <div class="case-display">
    <h2>案例展示</h2>
    <a-row :gutter="[24, 24]" justify="center">
      <a-col :span="6" v-for="(card, index) in caseCards" :key="index">
        <a-card hoverable class="card">
          <template #cover>
            <a-image :src="card.image||'@/assets/image-error.png'" alt="案例展示" width="100%" height="180px" class="card-image" />
          </template>
          <a-card-meta :title="card.title">
            <template #description>
              {{ card.description }}
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

//定义卡片数据
const caseCards = ref([
  {
    title: '等待添加',
    image: 'https://via.placeholder.com/150',
    description: '等待添加'
  },
  {
    title: '等待添加',
    image: 'https://via.placeholder.com/150',
    description: '等待添加'
  },
  {
    title: '等待添加',
    image: 'https://via.placeholder.com/150',
    description: '等待添加'
  },
  {
    title: '等待添加',
    image: 'https://via.placeholder.com/150',
    description: '等待添加'
  },
  {
    title: '等待添加',
    image: 'https://via.placeholder.com/150',
    description: '等待添加'
  },
  {
    title: '等待添加',
    image: 'https://via.placeholder.com/150',
    description: '等待添加'
  },
  {
    title: '等待添加',
    image: 'https://via.placeholder.com/150',
    description: '等待添加'
  },
  {
    title: '等待添加',
    image: 'https://via.placeholder.com/150',
    description: '等待添加'
  }
]);

</script>

<style scoped>
.case-display {

  width: 80%;
  margin: 0 auto;
  margin-bottom: 20px;
  /* padding: 80px; */
}

.card {
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
}

.card-image {
  width: 100%;
  height: 180px;
  border-radius: 8px 8px 0 0;
}
</style>

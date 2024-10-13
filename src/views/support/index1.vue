<template>
  <div class="sponsor-page">
    <div class="background"></div>
    <div class="content">
      <el-card class="sponsor-card">
        <template #header>
          <div class="card-header">
            <h2>支持我们</h2>
            <p>您的支持将帮助我们继续开发和维护这个项目。</p>
          </div>
        </template>
        <el-row :gutter="20">
          <el-col :span="8" v-for="(option, index) in sponsorOptions" :key="index">
            <a-card class="sponsor-option">
              <div class="sponsor-icon">
                <i :class="option.icon"></i>
              </div>
              <div class="sponsor-title">{{ option.title }}</div>
              <div class="sponsor-description">{{ option.description }}</div>
              <a-button type="primary" @click="sponsor(option)">支持</a-button>
            </a-card>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sponsorOptions = ref([
  {
    title: '一次性捐赠',
    description: '通过一次性捐赠支持我们的项目。',
    icon: 'el-icon-money',
    action: 'donate'
  },
  {
    title: '成为赞助商',
    description: '成为我们的赞助商，获得品牌曝光机会。',
    icon: 'el-icon-medal',
    action: 'sponsor'
  },
  {
    title: '订阅支持',
    description: '通过订阅支持我们的持续开发。',
    icon: 'el-icon-star-on',
    action: 'subscribe'
  }
])

const sponsor = (option) => {
  alert(`您选择了${option.title}`)
}
</script>

<style scoped>
.sponsor-page {
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

.content {
  width: 80%;
  max-width: 1200px;
}

.sponsor-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-header {
  text-align: center;
}

.sponsor-option {
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  transition: transform0.3s;
}

.sponsor-option:hover {
  transform: translateY(-5px);
}

.sponsor-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.sponsor-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.sponsor-description {
  font-size: 16px;
  margin-bottom: 20px;
}
</style>

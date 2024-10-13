<template>
  <div class="about-page">
    <div class="background"></div>
    <div class="content">
      <el-card class="about-card">
        <template #header>
          <div class="card-header">
            <h2>关于</h2>
          </div>
        </template>
        <arco-card class="about-section">
          <div class="section-title">项目介绍</div>
          <div class="section-content">
            <p>
              旨在收集和展示众多公开的优秀Prompt，用户可以输入内容并直接预览效果。我们致力于提供一个用户友好的界面和卓越的交互体验，帮助用户快速找到并使用高质量的Prompt。
            </p>
          </div>
        </arco-card>
        <arco-card class="about-section">
          <div class="section-title">鸣谢</div>
          <div class="section-content">
            <h4>非常感谢以下人员的prompt:</h4>
            <p>李继刚老师</p>
            <p>云中江树</p>
            <p>RangerEx</p>
            <p>...</p>
          </div>
        </arco-card>
        <arco-card class="about-section">
          <div class="section-title">关于我</div>
          <div class="section-content">
            <p>
              本科在读，计算机相关专业，前端ing，对llm感兴趣，有点爱coding，感兴趣的可以加我一起交流~
            </p>
          </div>
        </arco-card>
      </el-card>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.about-page {
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

.about-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 04px8px rgba(0, 0, 0, 0.1);
}

.card-header {
  text-align: center;
}

.about-section {
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  transition: transform0.3s;
}

.about-section:hover {
  transform: translateY(-5px);
}

.section-title {
  font-size: 24px;
  margin-bottom: 20px;
  /* text-align: center; */
}

.section-content {
  font-size: 14px;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin-bottom: 10px;
}
</style>

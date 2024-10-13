<template>
 <div class="support-page">
    <div class="background"></div>
    <div class="content">
      <el-card class="support-card">
        <template #header>
          <div class="card-header">
            <h2>赞助与支持</h2>
          </div>
        </template>
        <arco-card class="support-section">
          <!-- <div class="section-title">项目维护与开发</div> -->
          <div class="section-content">
            <p>这个项目在开发和维护过程中需要投入大量的时间和精力。如果这个项目对您有帮助，可以通过以下方式支持我，帮助我继续改进和维护这个项目。</p>
          </div>
        </arco-card>
        <div class="qrcode-section">
          <img src="@/assets/images/paycode.jpg" alt="赞赏码" class="qrcode-image">
          <p class="qrcode-description">扫描二维码进行赞赏</p>
        </div>
      </el-card>
    </div>
 </div>
</template>

<script setup>
</script>

<style scoped>
.support-page {
 display: flex;
 justify-content: center;
 align-items: center;
 height:100vh;
 position: relative;
}

.background {
 position: absolute;
 top:0;
 left:0;
 width:100%;
 height:100%;
 background: url('https://source.unsplash.com/random/1920x1080') no-repeat center center;
 background-size: cover;
 filter: blur(5px);
 z-index: -1;
}

.content {
 width:80%;
 max-width:1200px;
}

.support-card {
 background: rgba(255,255,255,0.9);
 border-radius:10px;
 box-shadow:0 4px 8px rgba(0,0,0,0.1);
}

.card-header {
 text-align: center;
}

.support-section {
 padding:20px;
 border-radius:10px;
 margin-bottom:20px;
 transition: transform 0.3s;
}

.support-section:hover {
 transform: translateY(-5px);
}

.section-title {
 font-size:24px;
 margin-bottom:20px;
 text-align: center;
}

.section-content {
 font-size:16px;
}

.qrcode-section {
 text-align: center;
 margin-top:20px;
}

.qrcode-image {
 width:200px;
 height:200px;
 border-radius:10px;
 box-shadow:04px8px rgba(0,0,0,0.1);
}

.qrcode-description {
 font-size:16px;
 margin-top:10px;
}
</style>

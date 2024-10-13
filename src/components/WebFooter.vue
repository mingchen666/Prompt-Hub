<template>
  <div class="footer">
    <!-- <div class="footer-content">
      <div class="footer-section">
        <ul class="horizontal-links">
          <li><a href="#">友情链接</a></li>
          <li><a href="#">链接1</a></li>
          <li><a href="#">链接1</a></li>
          <li><a href="#">链接2</a></li>
          <li><a href="#">链接3</a></li>
        </ul>
      </div>
    </div> -->
    <div class="footer-bottom">
      <p>&copy; 小罗 v1.0</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.footer {
  /* margin-top: 10px; */
  background-color: #fff;
  color: #0b0b0b;
  padding: 10px 0 0 0;
}

.footer-content {
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;
}

.footer-section {
  margin-right: 20px;
}

.footer-section:last-child {
  margin-right: 0;
}

.footer-section h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.horizontal-links {
  list-style: none;
  padding: 0;
  display: flex;
}

.horizontal-links li {
  margin-right: 10px;
}

.horizontal-links li:last-child {
  margin-right: 0;
}

.horizontal-links li a {
  color: #fff;
  text-decoration: none;
}

.horizontal-links li a:hover {
  text-decoration: underline;
}

.footer-bottom {
  text-align: center;
  /* margin-top: 20px; */
  font-size: 12px;
}
</style>

<template>
  <div class="web-header">
    <a-menu mode="horizontal" :default-selected-keys="[activeIndex]" @menuItemClick="handleSelect">
      <a-menu-item key="/">首页</a-menu-item>
      <a-menu-item key="/about">关于</a-menu-item>
      <a-menu-item key="/support">赞助/支持</a-menu-item>
      <a-menu-item key="/update">更新日志</a-menu-item>
      <a-menu-item key="/none">暂时没想好叫什么</a-menu-item>
      <!-- <a-menu-item> -->

      <!-- </a-menu-item> -->
    </a-menu>
    <div class="settings-icon" @click="openSettings" placement="bottom">
      <a-tooltip
        content="在这里设置key等信息哦！"
        position="bottom"
        :popup-visible="isVisible"
        trigger="hover"
        disabled
        :offset="10"
        :popup-style="popupStyle"
        ><icon-settings size="28" />
      </a-tooltip>
    </div>
  </div>
  <SettingsDrawer ref="settingsDrawer"></SettingsDrawer>
</template>

<script setup>
import SettingsDrawer from '@/components/SettingsDrawer.vue'
import { IconSettings } from '@arco-design/web-vue/es/icon'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
//定义当前激活的导航项
const activeIndex = ref('/')
const router = useRouter()
// 抽屉组件ref
const settingsDrawer = ref(null)
// 气泡框样式以及可见状态
const popupStyle = ref({
  borderRadius: '10px'
})
const isVisible = ref(true)

// 打开设置
const openSettings = () => {
  if (settingsDrawer.value && settingsDrawer.value.openDrawer) {
    settingsDrawer.value.openDrawer()
  }
}
//处理导航项选择事件
const handleSelect = (key) => {
  activeIndex.value = key
  router.push(`${key}`)
}

setTimeout(() => {
  isVisible.value = false
}, 8000)
</script>

<style scoped>
.web-header {
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  background-color: var(--color-neutral-2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed; /*固定导航栏在顶部 */
  top: 0; /*固定在顶部 */
  left: 0; /*固定在左侧 */
  z-index: 1000; /*确保导航栏在其他内容之上 */
  margin-bottom: 100px;
}

.a-menu {
  background-color: transparent; /*设置菜单背景透明 */
  color: var(--color-text-1); /*设置菜单文字颜色 */
  width: 100%;
  max-width: 800px; /*限制菜单的最大宽度 */
}

.a-menu-item {
  padding: 020px; /*设置菜单项内边距 */
  font-size: 16px; /*设置菜单项文字大小 */
}

.a-menu-item:hover {
  background-color: var(--color-fill-2); /*设置菜单项悬停背景颜色 */
}
.settings-icon {
  float: right;
  cursor: pointer;
  font-size: 24px;
  color: black;
}
/* 弹出显示 */
.tooltip,
.el-popper.is-dark {
  margin-right: 10px;
}

</style>

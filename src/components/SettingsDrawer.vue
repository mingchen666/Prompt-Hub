<template>
  <a-drawer
    v-model:visible="visible"
    @ok="saveSettings"
    title="设置"
    placement="right"
    width="35%"
    ok-text="保存"
  >
    <a-form :model="form" ref="formRef" label-align="left" layout="vertical">
      <a-form-item label="选择api供应商" required>
        <a-select
          v-model="form.apiCategory"
          placeholder="请选择分类"
          @change="handleCategoryChange"
        >
          <a-option
            v-for="item in apiOptions"
            :value="item.value"
            :key="item.value"
            :label="item.label"
          />
        </a-select>
      </a-form-item>
      <a-form-item label="baseUrl" required v-if="isShowBaseUrl">
        <a-input
          v-model="form.baseUrl"
          placeholder="请输入baseUrl"
          :disabled="form.apiCategory === 'system'"
        />
      </a-form-item>
      <a-form-item label="key" required v-if="form.apiCategory !== 'system'">
        <a-input
          v-model="form.key"
          placeholder="请输入key"
          :disabled="form.apiCategory === 'system'"
        />
      </a-form-item>
      <a-form-item label="models" required>
        <a-input
          v-model="form.models"
          placeholder="请输入models"
          @change="handleModelsInput"
          :disabled="form.apiCategory === 'system'"
        />
      </a-form-item>
      <a-form-item label="当前模型" required>
        <a-select
          v-model="form.currentModel"
          placeholder="请选择当前使用模型"
          @change="handleModelChange"
        >
          <a-option v-for="item in modelsOptions" :value="item" :key="item" :label="item" />
        </a-select>
      </a-form-item>
      <a-collapse
        @change="handleCollapseChange"
        :style="{ width: '100%' }"
        v-model="activeCollapse"
        :bordered="false"
      >
        <a-collapse-item header="额外参数" name="1">
          <a-form
            :model="extraParams"
            size="large"
            auto-label-width
            label-align="left"
            layout="horizontal"
          >
            <a-form-item label="top">
              <el-input-number
                v-model="extraParams.top"
                :min="0"
                :max="1"
                :step="0.1"
                :precision="1"
                placeholder="请输入Top"
                :default-value="0.1"
              />
            </a-form-item>
            <a-form-item label="temperature">
              <el-input-number
                v-model="extraParams.temperature"
                :min="0"
                :max="2"
                :step="0.1"
                :precision="1"
                placeholder="请输入temperature"
                :default-value="0.1"
              />
            </a-form-item>
            <a-form-item label="max_tokens">
              <el-input-number
                v-model="extraParams.max_tokens"
                :min="0"
                placeholder="请输入max_tokens"
                :default-value="9999"
              />
            </a-form-item>
          </a-form>
        </a-collapse-item>
      </a-collapse>
    </a-form>
  </a-drawer>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { StringToArray, isObjectEqual } from '@/utils/tools'
import { useUserInfoStore } from '@/stores/index'
import { ElNotification } from 'element-plus'
import { storeToRefs } from 'pinia'

const userInfoStore = useUserInfoStore()
const { currentUserKey, userKeyInfo } = storeToRefs(userInfoStore)

// 初始化 form
const form = ref({
  baseUrl: '',
  key: '',
  models: '',
  currentModel: '',
  apiCategory: ''
})

// 计算属性，用于判断是否显示baseUrl输入框组件
const isShowBaseUrl = computed(() => {
  return !['system', 'siliconflow', 'zhipu', 'other'].includes(form.value.apiCategory)
})

// 在组件挂载时从 store 中获取数据并赋值
onMounted(() => {
  if (currentUserKey.value) {
    form.value = {
      ...currentUserKey.value,
      apiCategory: currentUserKey.value.apiCategory
    }
    handleCategoryChange(currentUserKey.value.apiCategory)
  }
})

// 抽屉是否可见
const visible = ref(false)

const activeCollapse = ref(['1'])
const apiOptions = ref([
  { label: '自定义', value: 'custom' },
  { label: '小罗的API', value: 'system' },
  { label: '硅基流动', value: 'siliconflow' },
  { label: '智普AI', value: 'zhipu' },
  { label: '其他', value: 'other' }
])
const modelsOptions = ref(null)

// 额外请求参数
const extraParams = ref({
  top: 0.1,
  temperature: 1,
  max_tokens: 9999
})
const defaultParams = ref({
  top: 0.1,
  temperature: 1,
  max_tokens: 9999
})

// models输入框变化触发
const handleModelsInput = (e) => {
  modelsOptions.value = StringToArray(e)
}

// 选择当前模型
const handleModelChange = (value) => {
  console.log('当前模型:', value)
}

// 分类选择变化触发
const handleCategoryChange = (category) => {
  form.value.apiCategory = category
  if (category === 'system') {
    form.value = { ...userKeyInfo.value.system, apiCategory: category }
  } else {
    const userInfo = userInfoStore.getUserInfo(category)
    form.value = { ...userInfo, apiCategory: category }
  }
  modelsOptions.value = StringToArray(form.value.models)
}

// 监听 form.apiCategory 的变化
watch(
  () => form.value.apiCategory,
  (newCategory) => {
    handleCategoryChange(newCategory)
  }
)

// 折叠面板变化
const handleCollapseChange = () => {
  extraParams.value = userInfoStore.extraParams
}

// 保存设置
const saveSettings = () => {
  userInfoStore.setUserInfo(form.value.apiCategory, form.value)
  visible.value = false
  userInfoStore.setCurrentUserKey(form.value.apiCategory)
  console.log('保存设置', form.value.apiCategory)

  if (!isObjectEqual(defaultParams.value, extraParams.value)) {
    userInfoStore.setExtraParams(extraParams.value)
    // console.log('额外参数修改了', extraParams.value)
  }

  ElNotification.success({
    title: '保存成功',
    position: 'top-left',
    duration: 3000
  })
  console.log('Updated currentUserKey:', currentUserKey.value)
}

const openDrawer = () => {
  visible.value = true
}

defineExpose({ openDrawer })
</script>

<style scoped>
.a-drawer__body {
  padding: 20px;
}

.a-form-item {
  margin-bottom: 20px;
}

.a-button {
  width: 100%;
}
</style>

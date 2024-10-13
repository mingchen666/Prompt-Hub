import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useUserInfoStore = defineStore(
  'userkey',
  () => {
    const userKeyInfo = ref({
      system: {
        key: 'sk-aswes5499a9d9ads6wsvdsd97135sdfa9a',
        baseUrl: 'https://api.52xm.us.kg/v1',
        models: 'glm-4-flash,glm-4-air,glm-4-0520',
        currentModel: 'glm-4-flash'
      },
      custom: {
        key: 'sk-xxxxx',
        baseUrl: 'https://xxxx.com/v1',
        models: 'xxx,xxxx',
        currentModel: 'xxx'
      },
      siliconflow: {
        key: '',
        baseUrl: 'https://api.siliconflow.cn/v1',
        models: '',
        currentModel: ''
      },
      zhipu: {
        key: '',
        baseUrl: 'https://open.bigmodel.cn/api/paas/v4',
        models: 'glm-4-0520,glm-4-plus,glm-4-flash,glm-4-air',
        currentModel: ''
      },
      other: {
        key: '',
        baseUrl: '',
        models: '',
        currentModel: ''
      }
    })
    // 额外请求参数
    const extraParams = ref({ top: 0.1, temperature: 1, max_tokens: 9999 })
    // 当前使用的api配置
    const currentUserKey = ref({
      key: 'sk-aswes5499a9d9ads6wsvdsd97135sdfa9a',
      baseUrl: 'https://api.52xm.us.kg/v1',
      models: 'glm-4-flash',
      currentModel: 'glm-4-flash',
      apiCategory: 'system'
    })
    const currentPrompt = ref('')
    const getCurrentUserKey = () => {
      return currentUserKey.value
    }
    const setCurrentPrompt = (a) => {
      currentPrompt.value = a
    }
    const setUserInfo = (apiType, a) => {
      if (!['system', 'custom', 'siliconflow', 'zhipu', 'other'].includes(apiType)) {
        throw new Error('Invalid apiType. Must be one of: system, custom, default')
      }

      // 解构并提供默认值
      const { key, baseUrl, models, currentModel } = {
        ...userKeyInfo.value[apiType], // 保留现有的值
        ...a // 覆盖传入的新值
      }

      // 更新 userKeyInfo
      userKeyInfo.value[apiType] = {
        key,
        baseUrl,
        models,
        currentModel
      }
    }
    const getUserInfo = (apiType) => {
      return userKeyInfo.value[apiType]
    }
    const setCurrentUserKey = (apiType) => {
      currentUserKey.value = { ...userKeyInfo.value[apiType], apiCategory: apiType }
      return currentUserKey.value
    }
    const setExtraParams = (newParams) => {
      extraParams.value = newParams
    }
    return {
      userKeyInfo,
      currentUserKey,
      extraParams,
      currentPrompt,
      setCurrentPrompt,
      setUserInfo,
      getUserInfo,
      setCurrentUserKey,
      setExtraParams,
      getCurrentUserKey
    }
  },
  {
    persist: true
  }
)

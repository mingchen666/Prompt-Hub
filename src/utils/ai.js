import axios from 'axios'
import { useUserInfoStore } from '@/stores/index'
const userInfoStore = useUserInfoStore()
const extraParams = userInfoStore.extraParams
async function getAIResponse(systemPrompt, prompt, baseUrl, key, currentModel) {
  try {
    const url = `${baseUrl}/chat/completions` // 使用额外参数中的 baseUrl
    const response = await axios.post(
      url,
      {
        model: currentModel,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt }
        ],
        ...extraParams // 将额外参数合并到请求体中
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${key}`
        }
      }
    )

    const res = response.data.choices[0].message.content
    return res
  } catch (error) {
    console.error('发送未知错误:', error)
    throw error
  }
}

export { getAIResponse }

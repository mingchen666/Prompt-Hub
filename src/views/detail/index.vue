<template>
  <!-- <div>{{ id }}</div> -->
  <top-com @generate-click="handleGenerate" ></top-com>
  <div class="main-container">
    <main-com :code="result" :loading="loading"></main-com>
  </div>
</template>
<script setup>
import { ref,provide } from 'vue'
import TopCom from '@/views/detail/components/TopCom.vue'
import MainCom from '@/views/detail/components/MainCom.vue'
import { getNewChineseService } from '@/apis/newmeaning'
import { getSocialCardService } from '@/apis/socialcard'
import { getResumeCardService } from '@/apis/resumecard'
import { getHolidayCardService } from '@/apis/holidaycard'
import { getWordCardService } from '@/apis/wordcard'
import { useUserInfoStore } from '@/stores/index'
import { storeToRefs } from 'pinia'
import { convertHTML,result6 } from '@/utils/tools'
const userInfoStore = useUserInfoStore()
//  使用 storeToRefs 解构出 currentUserKey 并保持响应性
const { currentUserKey } = storeToRefs(userInfoStore)

// 从 currentUserKey 对象中解构出需要的属性
const { baseUrl, key, currentModel } = currentUserKey.value
// 当前输入框值，需要传递
const currentPrompt = ref('')
// 下面框是否加载中效果
const loading = ref(false)
const props = defineProps({
  value: {
    type: String,
    default: ''
  }
})
// 逐层传递值
provide('categoryType', props.value)

// 请求结果(html代码)
const result2= ref(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello, World!</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f0f0f0; 
        }
        .hello-world {
            font-size: 2em;
            color: #333;
        }
    </style>
</head>
<body>
    <div class="hello-world">Hello, World!</div>
</body>
</html>`)
const result1 = ref(`<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>小罗的个人资料卡</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css" rel="stylesheet">
    <style>
        body { background-color: #f3e5f5; }
        .card { background: linear-gradient(to bottom right, #e1bee7, #d1c4e9); }
        .section { background-color: rgba(255, 255, 255, 0.6); }
        .expertise-item { background-color: rgba(225, 190, 231, 0.5); }
        .interest-tag { background-color: #d1c4e9; color: #4a148c; }
        .qr-code-container { 
            background: linear-gradient(45deg, #e1bee7, #d1c4e9);
            width: 110px;
            height: 110px;
            padding: 7px;
        }
        @keyframes liquid { to { transform: translate(-50%, -50%) rotate(360deg); } }
        .qr-liquid {
            position: absolute;
            top: 0; left: 0; width: 200%; height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            animation: liquid 4s linear infinite;
        }
    </style>
</head>
<body class="flex justify-center items-center min-h-screen">
    <div class="card w-full max-w-md rounded-3xl shadow-lg overflow-hidden">
        <div class="p-6">
            <div class="flex items-center mb-5">
                <img src="https://q3.itc.cn/q_70/images03/20240613/862cf9ebe25b4bbfb95bdf2a1bf1aec0.jpeg" alt="Profile" class="w-20 h-20 rounded-full border-3 border-white shadow-md object-cover">
                <div class="ml-5">
                    <h2 class="text-2xl font-bold text-purple-900 mb-1">小罗</h2>
                    <p class="text-purple-700 flex items-center mb-1">
                        <i class="fas fa-map-marker-alt mr-2"></i>中国
                    </p>
                    <p class="text-lg text-purple-600 font-semibold">大学生 | 创业者 | 前公司经理</p>
                </div>
            </div>

            <div class="section rounded-xl p-4 mb-4 shadow-sm">
                <h3 class="text-xl font-semibold text-purple-900 flex items-center mb-3">
                    <i class="fas fa-bullseye mr-3 text-purple-600"></i>近期关键投入
                </h3>
                <p class="text-purple-700">自主创业, AI技术探索, 编程项目开发</p>
            </div>

            <div class="section rounded-xl p-4 mb-4 shadow-sm">
                <h3 class="text-xl font-semibold text-purple-900 flex items-center mb-3">
                    <i class="fas fa-award mr-3 text-purple-600"></i>履历亮点
                </h3>
                <ul class="text-purple-700 pl-6 list-disc">
                    <li>担任某公司经理</li>
                    <li>某公司股东</li>
                    <li>正在自主创业中</li>
                </ul>
            </div>

            <div class="section rounded-xl p-4 mb-4 shadow-sm">
                <h3 class="text-xl font-semibold text-purple-900 flex items-center mb-3">
                    <i class="fas fa-bolt mr-3 text-purple-600"></i>擅长领域
                </h3>
                <div class="grid grid-cols-2 gap-3">
                    <div class="expertise-item p-3 rounded-lg">
                        <h4 class="text-lg font-semibold text-purple-900 mb-1">AI技术</h4>
                        <p class="text-purple-700">关注并学习AI领域的最新进展</p>
                    </div>
                    <div class="expertise-item p-3 rounded-lg">
                        <h4 class="text-lg font-semibold text-purple-900 mb-1">编程</h4>
                        <p class="text-purple-700">熟练掌握多种编程语言</p>
                    </div>
                    <div class="expertise-item p-3 rounded-lg">
                        <h4 class="text-lg font-semibold text-purple-900 mb-1">企业管理</h4>
                        <p class="text-purple-700">拥有企业管理和运营经验</p>
                    </div>
                    <div class="expertise-item p-3 rounded-lg">
                        <h4 class="text-lg font-semibold text-purple-900 mb-1">创业</h4>
                        <p class="text-purple-700">尝试将想法转化为实际产品</p>
                    </div>
                </div>
            </div>

            <div class="section rounded-xl p-4 mb-4 shadow-sm">
                <h3 class="text-xl font-semibold text-purple-900 flex items-center mb-3">
                    <i class="fas fa-heart mr-3 text-purple-600"></i>兴趣爱好
                </h3>
                <div class="flex flex-wrap gap-2">
                    <span class="interest-tag px-3 py-1 rounded-full text-sm">羽毛球 🏸️</span>
                    <span class="interest-tag px-3 py-1 rounded-full text-sm">追剧 📺</span>
                    <span class="interest-tag px-3 py-1 rounded-full text-sm">写代码 💻</span>
                    <span class="interest-tag px-3 py-1 rounded-full text-sm">AI研究 🤖</span>
                </div>
            </div>

            <div class="flex justify-between items-center border-t border-purple-300 pt-4 mt-5">
                <div>
                    <div class="flex items-center text-lg text-purple-600 mb-2">
                        <i class="fas fa-qrcode mr-3"></i>扫码查看个人主页
                    </div>
                    <p class="text-lg text-purple-700">"勇于创新，不断前行"</p>
                </div>
                <div class="qr-code-container relative rounded-xl overflow-hidden flex justify-center items-center">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=96x96&data=https://example.com/xiaoluo&color=4a148c" alt="QR Code" class="w-24 h-24 rounded-lg">
                    <div class="absolute inset-0 bg-purple-900 opacity-20 mix-blend-color"></div>
                    <div class="qr-liquid"></div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`)
const result = ref(result2)

const handleGenerate = async (inputValue) => {
  // 接受子组件传递数据
  currentPrompt.value = inputValue
  var res = ''
//   console.log('啊哈哈哈哈', baseUrl, key, currentModel)
  loading.value = true
  try {
    switch (props.value) {
      case 'newChinese': {
        res = await getNewChineseService(currentPrompt.value, baseUrl, key, currentModel)
        console.log(res)
        break
      }
      case 'socialCard': {
        res = await getSocialCardService(currentPrompt.value, baseUrl, key, currentModel)
        console.log(res)
        break
      }
      case 'resumeCard': {
        res = await getResumeCardService(currentPrompt.value, baseUrl, key, currentModel)
        console.log(res)
        break
      }
      case 'holidayCard': {
        res = await getHolidayCardService(currentPrompt.value, baseUrl, key, currentModel)
        console.log(res)
        break
      }
      case 'wordCard': {
        res = await getWordCardService(currentPrompt.value, baseUrl, key, currentModel)
        console.log(res)
        break
      }
      default:
        break
    }
    result.value = convertHTML(res)
  } catch (error) {
    console.error('生成请求发送错误:', error)
  } finally {
    // 请求完成后关闭加载中状态
    loading.value = false
  }
  // const res = await getNewChineseService(currentPrompt.value,baseUrl.value, key.value, currentModel.value)
  // console.log(res)
}

// const card = computed(() => JSON.parse(props.card))
</script>

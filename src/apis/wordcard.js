// ----英语单词卡片----
import { getAIResponse } from '@/utils/ai'
const shortCode = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>English Learning Card: abuse</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Roboto', sans-serif;
    }
    .card {width: 100%;}
  </style>
</head>
<body class="bg-yellow-50 flex justify-center items-center min-h-screen p-4">
  <div class="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden card">
    <div class="p-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-3xl font-bold text-blue-800">abuse</h2>
        <button class="text-gray-600 hover:text-blue-500">🔊</button>
      </div>
      <p class="text-lg text-gray-600 mb-2">/əˈbjuːs/</p>
      <p class="text-xl text-gray-800 mb-4">滥用；虐待；辱骂</p>

      <div class="mt-6 flex justify-between items-center">
        <div class="flex items-center">
          <span class="text-gray-700 mr-2">难度：</span>
          <div class="flex">
            ⭐⭐⭐☆☆
          </div>
        </div>
        <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full flex items-center">
          🔄 复习
        </button>
      </div>
    </div>
  </div>
</body>
</html>
`
const longCode = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>English Learning Card: abuse</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Roboto', sans-serif;
    }
    .card {width: 100%;}
  </style>
</head>

<body class="bg-yellow-50 flex justify-center items-center min-h-screen p-4">
  <div class="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden card">
    <div class="p-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-3xl font-bold text-blue-800">abuse</h2>
        <button class="text-gray-600 hover:text-blue-500">🔊</button>
      </div>
      <p class="text-lg text-gray-600 mb-2">/əˈbjuːs/</p>
      <p class="text-xl text-gray-800 mb-4">滥用；虐待；辱骂</p>
      <div class="bg-blue-50 rounded-lg p-4 mb-4">
        <div class="flex items-center mb-2">
          <span class="text-2xl mr-2">💬</span>
          <h3 class="text-lg font-semibold text-blue-800">例句</h3>
        </div>
        <ul class="space-y-2">
          <li>
            <p class="text-gray-800">Drug abuse is a serious problem in society.</p>
            <p class="text-gray-600">毒品滥用是社会上的一个严重问题。</p>
          </li>
          <li>
            <p class="text-gray-800">The manager was fired for verbal abuse of his staff.</p>
            <p class="text-gray-600">该经理因辱骂员工而被解雇。</p>
          </li>
        </ul>
      </div>
      <div class="bg-green-50 rounded-lg p-4 mb-4">
        <div class="flex items-center mb-2">
          <span class="text-2xl mr-2">🏷️</span>
          <h3 class="text-lg font-semibold text-blue-800">词性与用法</h3>
        </div>
        <ul class="space-y-1">
          <li><span class="font-semibold">名词：</span>滥用；虐待；辱骂</li>
          <li><span class="font-semibold">动词：</span>滥用；虐待；辱骂</li>
        </ul>
      </div>
      <div class="flex flex-wrap gap-2 mb-4">
        <div>
          <h4 class="text-sm font-semibold text-blue-800 mb-1">同义词</h4>
          <div class="flex flex-wrap gap-1">
            <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded">misuse</span>
            <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded">mistreat</span>
            <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded">maltreat</span>
          </div>
        </div>
        <div>
          <h4 class="text-sm font-semibold text-blue-800 mb-1">反义词</h4>
          <div class="flex flex-wrap gap-1">
            <span class="bg-green-100 text-green-800 px-2 py-1 rounded">respect</span>
            <span class="bg-green-100 text-green-800 px-2 py-1 rounded">praise</span>
          </div>
        </div>
      </div>
      <div class="bg-pink-50 rounded-lg p-4 mb-4">
        <div class="flex items-center mb-2">
          <span class="text-2xl mr-2">📚</span>
          <h3 class="text-lg font-semibold text-blue-800">词根词缀</h3>
        </div>
        <p class="text-gray-700">词根：ab- (away) + use (use)</p>
      </div>
      <div class="bg-purple-50 rounded-lg p-4 mb-4">
        <div class="flex items-center mb-2">
          <span class="text-2xl mr-2">💡</span>
          <h3 class="text-lg font-semibold text-blue-800">记忆技巧</h3>
        </div>
        <p class="text-gray-700">想象 "ab-" 表示 "离开"，"use" 表示 "使用"。当某物被滥用时，就是被不当使用，远离了其原本的用途。</p>
      </div>
      <div class="bg-yellow-50 rounded-lg p-4 mb-4">
        <div class="flex items-center mb-2">
          <span class="text-2xl mr-2">📝</span>
          <h3 class="text-lg font-semibold text-blue-800">相关词组</h3>
        </div>
        <ul class="space-y-1">
          <li><span class="font-semibold">drug abuse：</span>滥用药物</li>
          <li><span class="font-semibold">abuse of power：</span>滥用职权</li>
          <li><span class="font-semibold">verbal abuse：</span>言语虐待</li>
        </ul>
      </div>
      <div class="mt-6 flex justify-between items-center">
        <div class="flex items-center">
          <span class="text-gray-700 mr-2">难度：</span>
          <div class="flex">
            ⭐⭐⭐☆☆
          </div>
        </div>
        <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full flex items-center">
          🔄 复习
        </button>
      </div>
    </div>
  </div>
</body>

</html>
`
const systemPrompt = `
## 角色:英语单词卡片学习助手
### 上下文（Context）
- **任务**：创建一个互动的HTML卡片，用于学习英语单词。
- **技术要求**：使用TailwindCSS进行样式设计，包含发音按钮、难度评级和复习功能。
### 目标（Objective）
- 设计一个既美观又实用的HTML卡片，帮助用户学习英语单词。
- 实现发音功能、难度评级和复习功能，以增强学习体验。
### 风格（Style）
- **视觉设计**：使用TailwindCSS，创建一个简洁且现代的卡片设计。
- **交互设计**：确保卡片易于交互，包括发音按钮和复习功能。
### 语气（Tone）
- **教育性**：内容应具有教育意义，旨在帮助用户学习英语。
- **互动性**：鼓励用户积极参与学习过程。
### 受众（Audience）
- 英语学习者，特别是对互动和视觉学习感兴趣的人。
### 响应（Response）
- 提供一个完整的HTML卡片代码，包括发音按钮、难度评级和复习功能。
### 工作流程（Workflow）
1. **用户输入单词**：用户输入一个英语单词（可能是简写）。
2. **生成发音按钮**：为单词添加音标，方便用户学习正确发音。
3. **设定难度评级**：根据单词的难度，设定相应的星级评级。
4. **添加复习功能**：提供一个复习按钮，用户可以随时回顾已学习的单词。
5. **设计视觉元素**：使用TailwindCSS设计卡片的视觉元素，确保美观且易于阅读。
6. **配色**：使用TailwindCSS设计卡片的颜色元素，给卡片各个部分进行适当配色。
### 示例（Examples）
- **长卡片示例**：单词 "run"，包含多种含义和用法,包含发音、含义和难度评级。。
- **短卡片示例**：单词 "sun"，含义单一,包含发音、含义和难度评级。。

### 长卡片模板html代码:
${longCode}
### 短卡片模板html代码:
${shortCode}
## 要求：
1. 只需要输出html代码，不需要额外文字说明。
2. 根据单词意境，以及风格等，建议可以配其他颜色
3. html代码里面提示性文字可以一样用中文，如：难度、复习，例句等。
4. 务必发音、含义必须正确

`
export const getWordCardService = (prompt, baseUrl, key, currentModel) => {
  return getAIResponse(systemPrompt, prompt, baseUrl, key, currentModel)
}

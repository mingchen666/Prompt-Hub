<template>
  <div class="code-display">
    <Codemirror
      :options="cmOptions"
      v-model:value="displayCode"
      height="600px"
      width="100%"
    ></Codemirror>
  </div>
</template>

<script setup>
import 'codemirror/mode/javascript/javascript.js'
import Codemirror from 'codemirror-editor-vue3'
// mode
import 'codemirror/mode/htmlmixed/htmlmixed.js'
// theme
import 'codemirror/theme/solarized.css'
import { ref, watch } from 'vue'
const defaultCode = ref(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello, World! </title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f0f0f0; /* 浅灰色背景 */
        }
        .hello-world {
            font-size: 2em; /* 文字大小 */
            color: #333; /* 深灰色文字 */
        }
    </style>
</head>
<body>
    <div class="hello-world">Hello, World!</div>
</body>
</html>`)
const props = defineProps({
  code: {
    type: String,
    default: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello, World! </title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f0f0f0; /* 浅灰色背景 */
        }
        .hello-world {
            font-size: 2em; /* 文字大小 */
            color: #333; /* 深灰色文字 */
        }
    </style>
</head>
<body>
    <div class="hello-world">Hello, World!</div>
</body>
</html>`
  }
})
const displayCode = ref(props.code || defaultCode.value)
// 监听props.code的变化
watch(
  () => props.code, // 监听props.code
  (newVal) => {
    if (newVal !== displayCode.value) {
      displayCode.value = newVal
    }
  },
  { immediate: true } // 立即执行一次
)
// 代码显示选项
const cmOptions = ref({
  mode: 'text/html',
  theme: 'solarized light',
  readOnly: true,
  lineNumbers: true,
  lineWiseCopyCut: true,
  gutters: ['CodeMirror-lint-markers'],
  lint: true
})
</script>

<style scoped>
.code-display {
  width: 100%;
  height: 100%;
  /* padding:20px; */
  border-radius: 8px;
  background-color: #f9f9f9;
  overflow: hidden;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>

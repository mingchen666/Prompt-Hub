<template>
  <div class="code-preview-container">
    <!-- <div class="code-preview"> -->
    <iframe width="100%" ref="previewFrame" class="code-iframe" :srcdoc="previewCode"></iframe>
    <!-- </div> -->

    <a-button type="primary" @click="takeScreenshot" class="screenshot-button">下载到本地</a-button>
  </div>
</template>

<script setup>
import { computed, ref, watch, inject } from 'vue'
import html2canvas from 'html2canvas'

const props = defineProps({
  code: {
    type: String,
    default: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello, World! Page</title>
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
const categoryType = inject('categoryType')

const previewCode = computed(() => props.code)
const previewFrame = ref(null)

watch(
  () => props.code,
  (newCode) => {
    if (previewFrame.value) {
      previewFrame.value.srcdoc = newCode
    }
  }
)

// 优化前截图
const takeScreenshot = () => {
  if (previewFrame.value) {
    const iframeDocument =
      previewFrame.value.contentDocument || previewFrame.value.contentWindow.document

    //确保 iframe内容加载完成
    if (iframeDocument.readyState === 'complete') {
      //获取要截图的元素
      var element = null
      element = iframeDocument.querySelector('.card')
      if (categoryType === 'resumeCard') {
        element = iframeDocument.querySelector('.card').children[0]
      }
      if (element) {
        //动态设置代理
        const proxyUrl = 'https://img.52xm.us.kg/proxy?url='

        html2canvas(element, {
          proxy: proxyUrl,
          allowTaint: false,
          useCORS: true,
          onclone: (clonedDoc) => {
            //确保所有图标资源加载完成
            const icons = clonedDoc.querySelectorAll('.bi')
            icons.forEach((icon) => {
              const img = new Image()
              img.src = icon.src
              img.onload = () => {
                icon.style.visibility = 'visible'
              }
            })
          }
        }).then((canvas) => {
          canvas.toBlob((blob) => {
            const imgUrl = URL.createObjectURL(blob)
            console.log('Screenshot URL:', imgUrl)

            //在这里可以对截图进行进一步操作，例如下载或显示
            const link = document.createElement('a')
            link.href = imgUrl
            link.download = `${categoryType}.png`
            link.click()

            //释放 URL对象
            URL.revokeObjectURL(imgUrl)
          }, 'image/png')
        })
      } else {
        console.error('资源未发现.')
      }
    }
  }
}
</script>

<style scoped>
.code-preview-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.code-iframe {
  /* position: absolute; */
  width: 100%;
  height: 100%;
  border: none;
  transform: scale(1);
  border-radius: 8px;
  /* overflow: hidden; */
}

.screenshot-button {
  position: absolute;
  bottom: 50%;
  padding: 12px 20px;
  border-radius: 12px;
  right: 0;
  z-index: 10;
}

@media (max-width: 768px) {
  .code-preview {
    height: auto;
  }
  .code-iframe {
    height: auto;
  }
}
</style>

<template>
  <div class="home-page">
    <!--背景图片 -->
    <!-- <div class="background-image"></div> -->

    <!--说明性大文字 -->
    <h2 class="intro-text">快来创作吧</h2>

    <!--卡片组 -->
    <div class="card-container">
      <a-row :gutter="[10, 10]" justify="center">
        <a-col :span="6" v-for="(item, index) in displayedCards" :key="index">
          <a-card hoverable bordered class="card" @click="handleCardClick(item)">
            <img :src="item.image_url" alt="Product Image" class="card-image" />
            <p>{{ item.description }}</p>
            <template #title>
              <span>{{ item.title }}</span>
            </template>
          </a-card>
        </a-col>
      </a-row>
    </div>

    <!--分页器 -->
    <a-pagination
      v-model:current="currentPage"
      :total="totalCards"
      :page-size="cardsPerPage"
      @change="handlePageChange"
      show-less-items
    />
  </div>
</template>

<script setup>
import { ElMessageBox } from 'element-plus'
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

//定义卡片数据
const cards = ref([
  {
    id: 1,
    title: '汉语新解',
    image_url: 'https://xiaoluo-images.oss-cn-shenzhen.aliyuncs.com/images/newChinese.png',
    description: '汉语新解，智趣无限 ~',
    value: 'newChinese'
  },
  {
    id: 2,
    title: '社交名片',
    image_url: 'https://xiaoluo-images.oss-cn-shenzhen.aliyuncs.com/images/socialCard.png',
    description: '一键生成超好看的社交卡片',
    value: 'socialCard'
  },
  {
    id: 3,
    title: '简历卡片',
    image_url: 'https://xiaoluo-images.oss-cn-shenzhen.aliyuncs.com/images/resumeCard.png',
    description: '一键生成好看的简历卡片',
    value: 'resumeCard'
  },
  {
    id: 4,
    title: '节日贺卡',
    image_url: 'https://xiaoluo-images.oss-cn-shenzhen.aliyuncs.com/images/holidayCard.png',
    description: '节日贺卡',
    value: 'holidayCard'
  },
  {
    id: 5,
    title: '单词卡片',
    image_url: 'https://xiaoluo-images.oss-cn-shenzhen.aliyuncs.com/images/wordCard.png',
    description: '输入英语单词，自动生成单词卡片',
    value: 'wordCard'
  },
  {
    id: 6,
    title: '等待添加',
    image_url: 'https://via.placeholder.com/150',
    description: '等待添加',
    value: 'Custom Value6'
  },
  {
    id: 7,
    title: '等待添加',
    image_url: 'https://via.placeholder.com/150',
    description: '等待添加',
    value: 'Custom Value7'
  },
  {
    id: 8,
    title: '等待添加',
    image_url: 'https://via.placeholder.com/150',
    description: '等待添加',
    value: 'Custom Value8'
  }
])

//每页显示的卡片数量
const cardsPerPage = ref(8)

//当前页码
const currentPage = ref(1)

//计算当前页显示的卡片
const displayedCards = computed(() => {
  const start = (currentPage.value - 1) * cardsPerPage.value
  const end = start + cardsPerPage.value
  return cards.value.slice(start, end)
})

//总卡片数量
const totalCards = computed(() => cards.value.length)

//处理分页变化
const handlePageChange = (page) => {
  currentPage.value = page
}

//处理卡片点击事件
const router = useRouter()
const handleCardClick = (card) => {
  console.log('Card clicked:', card.title, card.value)
  router.push({
    name: 'CardDetail',
    params: {
      value: card.value
    }
  })
}

// 弹窗显示公告注意事项
const showNotice = () => {
  if (localStorage.getItem('isNotShowNotice') === 'true') {
    return
  }

  ElMessageBox.alert(
    `<div style="text-align: left; color: #333; padding: 20px; border-radius: 8px; background-color: #f9f9f9;">
    <h3 style="color: #0056b3; margin-bottom: 15px; font-size: 1.2em;">使用教程</h3>
    <ol style="padding-left: 25px; line-height: 1.7; list-style-type: decimal;">
      <li style="margin-bottom: 4px;">
        <strong>没有key的情况：</strong> 没有可以用默认的小罗的api，不需要更改。直接使用，跳过第二步。
      </li>
      <li style="margin-bottom: 4px;">
        <strong>自己有key的情况：</strong> 首先点击右上角设置按钮，可以选择自己的key（如果自己有）。依次填入信息，直接点击底部按钮保存。
      </li>
      <li style="margin-bottom: 4px;">
        再输入内容一键生成（务必先点击<strong style="color: #d9534f;">使用前必读</strong>查看注意事项）。
      </li>
      <li>
        等待AI生成即可。
      </li>
      <li>
        如没有key可以联系小罗（生成效果更好）
      </li>
    </ol>
  </div>`,
    '必读公告',
    {
      confirmButtonText: '我知道了',
      dangerouslyUseHTMLString: true,
      showCancelButton: true,
      cancelButtonText: '不再提示',
      beforeClose: (action, instance, done) => {
        if (action === 'cancel') {
          localStorage.setItem('isNotShowNotice', 'true')
        }
        done()
      }
    }
  )
}

onMounted(() => {
  showNotice()
})
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 80px; /*为导航栏预留空间 */
  width: 100%;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://via.placeholder.com/1200x400');
  background-size: cover;
  background-position: center;
  opacity: 0.5;
  z-index: -1;
}

.intro-text {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  color: var(--color-text-1);
}

.card-container {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  cursor: pointer; /*添加鼠标指针样式 */
  border-radius: 20px;
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.a-pagination {
  margin-top: 40px;
  text-align: center;
}
</style>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { ArrowLeft } from '@element-plus/icons-vue'
import TheSubjectCategory from '../components/TheSubjectCategory.vue'
import TheTitle from '../components/TheTitle.vue'
const route = useRoute()
const router = useRouter()
const homeTitle = ref('myJsProject')
watch(
  () => route,
  (oldValue) => {
    if (oldValue.meta.title) {
      homeTitle.value = oldValue.meta.title as string
    } else {
      homeTitle.value = 'myJsProject'
    }
  },
  { deep: true }
)
</script>

<template>
  <header>
    <div class="logo"></div>

    <div class="rightList">
      <TheTitle class="title" :msg="homeTitle" />
      <el-button
        v-if="route.name !== 'home'"
        class="backBtn"
        :icon="ArrowLeft"
        @click="router.back()"
        >返回</el-button
      >
      <TheSubjectCategory v-if="route.name === 'home'" />
      <!-- nodte分类 -->
      <RouterView class="RouterView" />
    </div>
  </header>
</template>

<style scoped>
header {
  height: auto;
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  width: calc(100vw - 4rem);
  height: calc(100vw - 4rem);
  margin: 0 auto 2rem;
  background: url('@/assets/kwy.png') no-repeat center;
  background-size: contain;
}

.rightList {
  display: flex;
  height: 600px;
  flex-direction: column;
  width: 100%;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    width: 480px;
    height: 480px;
    margin: 0 2rem 0 0;
  }

  .rightList {
    width: 800px;
  }

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */
}

.backBtn {
  width: 60px;
  margin-bottom: 10px;
}

.RouterView {
  flex: 1 1 auto;
}
</style>

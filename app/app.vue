<template>
  <div>
    <FullLoading v-if="loading" />
    <NuxtLayout>
      <NuxtLoadingIndicator></NuxtLoadingIndicator>
      <NuxtPage />
    </NuxtLayout>
    <!-- 鼠标特效 -->
    <SplashCursor
      :SIM_RESOLUTION="128"
      :DYE_RESOLUTION="1440"
      :CAPTURE_RESOLUTION="512"
      :DENSITY_DISSIPATION="3.5"
      :VELOCITY_DISSIPATION="2"
      :PRESSURE="0.1"
      :PRESSURE_ITERATIONS="20"
      :CURL="3"
      :SPLAT_RADIUS="0.2"
      :SPLAT_FORCE="6000"
      :SHADING="true"
      :COLOR_UPDATE_SPEED="10"
      :BACK_COLOR="{ r: 0.5, g: 0, b: 0 }"
      :TRANSPARENT="true"
    />
    <!-- 背景动画 -->
    <!-- '#1F1F1F' -->
    <div class="fixed top-0 left-0 w-full h-full -z-[1]">
      <Squares
        direction="diagonal"
        :speed="0.2"
        :squareSize="40"
        borderColor="#E8EAED"
        hoverFillColor="#F3F4F6"
      />
    </div>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp()
const runtimeConfig = useRuntimeConfig()
const loading = ref(true)

nuxtApp.hook('page:start', () => {})

nuxtApp.hook('page:finish', () => {})

onMounted(() => {
  loading.value = false
  // console.log(runtimeConfig)
})
</script>

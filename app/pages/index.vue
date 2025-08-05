<template>
  <div @click="$router.push('/about')">index</div>
  <!-- <div>{{ data }}</div> -->
</template>

<script setup>
import { getImgCode } from '@/api/login.js'
// const { data } = await useAsyncData('getData', getData)
// console.log(data)

// async function getData() {
//   $fetch('/api/captchaImage', {
//     method: 'GET'
//   })
// }
// const { data, pending } = await useFetch('/api/captchaImage')

async function getData() {
  console.log(import.meta.env)

  const { img } = await getImgCode()
  console.log(img)
}

onMounted(() => {
  getData()
})
</script>

<style lang="scss" scoped></style>

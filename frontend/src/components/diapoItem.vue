<template>
  <div class="diapo_img carousel-item" >
<img :src="img.imageUrl" alt="">
  </div>
</template>

<script>
export default {
props:['imgItem']
}
</script>

<style>

</style>
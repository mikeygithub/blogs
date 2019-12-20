<template>
  <div class="footer"><el-link type="info">Copyright © 2019 麦奇 Powered by Vue 2.9.6 on Linux</el-link>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {}
  }
}
</script>

<style scoped>
.footer{
  /*background: rgb(84, 92, 100);*/
  background: #169fe6;
  margin: 0px;
}
.el-link.el-link--info {
  color: #FFF;
}
</style>

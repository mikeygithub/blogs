<template>
  <transition name="fade">
  <div id="app">
    <el-container>
      <el-aside v-show="this.asideVisible">
        <Left></Left>
      </el-aside>
      <el-container>
        <el-header>
          <Top></Top>
        </el-header>
        <el-main><router-view/></el-main>
        <el-footer><Footer></Footer></el-footer>
      </el-container>
    </el-container>
  </div>
  </transition>
</template>
<script>
import Left from './components/common/left'
import Top from './components/common/top'
import Footer from './components/common/footer'
export default {
  name: 'App',
  components: {Top, Left, Footer},
  data: function () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ffffff;
}
.el-header {
  padding: 0 0px;
  margin-right: 0px;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: center;
  /*line-height: 200px;*/
}
.hideSidebar {
  width: 50px !important;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 10px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

<template>
  <div>
    <div>
      <el-drawer
        :visible.sync="info"
        size="320px"
        :show-close="false"
        direction="ltr"
        :with-header="true">
        <div>
          <left></left>
        </div>
      </el-drawer>
    </div>
  <div>
    <el-drawer
      :visible.sync="drawer"
      :show-close="false"
      :with-header="true">
      <div>
        <about></about>
      </div>
    </el-drawer>
  </div>
  <div class="collapse navbar-collapse" id="navbar-collapse-1">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1"  style="float: left" @click="info=!info">
        <i class="el-icon-s-fold"></i>显示侧边
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-s-platform"></i>我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-s-tools"></i>设置</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="4"><a href="#" @click="drawer = true"><i class="el-icon-user-solid"></i>关于作者</a></el-menu-item>
      <el-menu-item index="3"><a href="#" @click="home"><i class="el-icon-s-home"></i>首页</a></el-menu-item>
    </el-menu>
  </div>
  </div>
</template>
<script>
import About from './about'
import Left from './left'
export default {
  name: 'top',
  components: {Left, About},
  data () {
    return {
      info: false,
      drawer: false,
      activeIndex2: '2'
    }
  },
  methods: {
    handleSelect () {},
    home () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.el-menu-item{
  float: right;
}
.el-submenu{
  float: right;
}
.el-menu.el-menu--horizontal {
  border-bottom: solid 0px #e6e6e6;
}
>>>.el-drawer__header {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #72767b;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
   margin-bottom: 0px;
   padding: 0px 0px ;
}
>>>.el-drawer {
  /*position: absolute;*/
  /*-webkit-box-sizing: border-box;*/
  /*box-sizing: border-box;*/
  background-color: rgb(84, 92, 100);
  /*display: -webkit-box;*/
  /*display: -ms-flexbox;*/
  /*display: flex;*/
  /*-webkit-box-orient: vertical;*/
  /*-ms-flex-direction: column;*/
  /*flex-direction: column;*/
  /*-webkit-box-shadow: 0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12);*/
  /*box-shadow: 0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12);*/
}
</style>

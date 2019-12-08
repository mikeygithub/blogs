<template>
  <div>
    <div>
      <transition enter-active-class="zoomIn" leave-active-class="zoomOut">
        <el-drawer
          :visible.sync="info"
          size="320px"
          :show-close="false"
          direction="ltr"
          :with-header="true">
          <div class="animated">
            <left></left>
          </div>
        </el-drawer>
      </transition>
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
    <!-- TODO:音频 -->
    <audio src="/static/audio/hanliulaixi.mp3" id="eventAudio"></audio>
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
        <el-menu-item index="2-1" @click="dialogVisible = true">登入后台</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-s-tools"></i>设置</template>
        <el-menu-item index="2-1" @click="audioplay">开启音乐</el-menu-item>
        <el-menu-item index="2-1" @click="audiostop">关闭音乐</el-menu-item>
      </el-submenu>
      <el-menu-item index="4"><a href="#" @click="drawer = true"><i class="el-icon-user-solid"></i>关于作者</a></el-menu-item>
      <el-menu-item index="3"><a href="#" @click="home"><i class="el-icon-s-home"></i>首页</a></el-menu-item>
    </el-menu>
  </div>
    <el-dialog
      title="登入"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <div>
        <!--<login></login>-->
        <form action="#">
          <table align="center">
            <tr>
              <td class="label">账号</td>
              <td><input class="el-input" type="email" required /></td>
            </tr>
            <tr>
              <td>密码</td>
              <td><input class="el-input" type="password"  required /></td>
            </tr>
            <tr>
              <td colspan="2"><input class="el-button" type="submit" value="提交"/></td>
            </tr>
          </table>
        </form>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <!--<el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
  </span>
    </el-dialog>
  </div>
</template>
<script>
import About from './about'
import Left from './left'
import Login from '../system/login'

export default {
  name: 'top',
  components: {Login, Left, About},
  data () {
    return {
      info: false,
      drawer: false,
      dialogVisible: false,
      activeIndex2: '2'
    }
  },
  methods: {
    handleSelect () {},
    home () {
      this.$router.push('/')
    },
    audioplay () {
      let btnAdo = document.getElementById('eventAudio')
      btnAdo.play()
    },
    audiostop () {
      let btnAdo = document.getElementById('eventAudio')
      btnAdo.pause()
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

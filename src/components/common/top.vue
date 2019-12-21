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
    <!--TODO:绝对布局position: absolute-->
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
    <!--TODO:导航栏SVG-->
    <el-row>
      <el-col  :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#169fe6"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1"  style="float: left" @click="info=!info">
            <i class="el-icon-s-fold"></i>显示侧边
          </el-menu-item>
          <div  class="hidden-xs-only hidden-sm-only hidden-md-only">
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-s-platform"></i>我的工作台</template>
              <el-menu-item index="2-1" @click="dialogVisible = true">登入后台</el-menu-item>
              <el-menu-item index="2-2">更多功能</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-s-tools"></i>设置</template>
              <el-menu-item index="3-1" @click="audioplay">开启音乐</el-menu-item>
              <el-menu-item index="3-2" @click="audiostop">关闭音乐</el-menu-item>
            </el-submenu>
            <el-menu-item index="4"><a  style="color: #ebeef5" href="#" @click="drawer = true"><i class="el-icon-user-solid"></i>我的分享</a></el-menu-item>
            <el-menu-item index="5"><a style="color: #ebeef5" href="#" @click="home"><i class="el-icon-s-home"></i>首页</a></el-menu-item>
          </div>
          <div class="hidden-lg-and-up" id="mini-menu">
            <el-submenu index="6">
              <template slot="title"><i class="el-icon-s-fold"></i>展开菜单</template>
              <div style="width: 40px">
                <el-menu-item index="6-2"><a style="color: #ebeef5" href="#" @click="home"><i class="el-icon-s-home"></i>首页</a></el-menu-item>
                <el-menu-item index="6-1"><a  style="color: #ebeef5" href="#" @click="drawer = true"><i class="el-icon-star-on"></i>我的分享</a></el-menu-item>
                <el-menu-item index="6-3" @click="audioplay"><i class="el-icon-video-play"></i>开启音乐</el-menu-item>
                <el-menu-item index="6-4" @click="audiostop"><i class="el-icon-video-pause"></i>关闭音乐</el-menu-item>
                <el-menu-item index="6-5" @click="dialogVisible = true"><i class="el-icon-user-solid"></i>登入后台</el-menu-item>
                <el-menu-item index="6-6"><i class="el-icon-s-operation"></i>更多功能</el-menu-item>
              </div>
            </el-submenu>
          </div>
        </el-menu>
      </el-col>
    </el-row>
  </div>
    <!--TODO:登入校验-->
    <el-dialog
      title="登入"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <div>
        <!--<login></login>-->
        <form action="#">
          <table align="center" class="login">
            <tr>
              <td class="label">账号</td>
              <td><input class="el-input el-in"  type="email" required /></td>
            </tr>
            <tr>
              <td>密码</td>
              <td><input class="el-input el-in" type="password"  required /></td>
            </tr>
            <tr>
              <td colspan="2"><input class="el-button" type="submit" value="登入"/><input class="el-button" type="submit" value="清空"/></td>
            </tr>
          </table>
        </form>
      </div>
      <span slot="footer" class="dialog-footer">
    <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
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
  background-color: rgb(84, 92, 100);
}
  .el-in{
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  width: 100%;
  }
  .login{
    font-size: 25px;
    font-weight: 300;
  }
  #mini-menu ul{
    width: 30px;
  }
</style>

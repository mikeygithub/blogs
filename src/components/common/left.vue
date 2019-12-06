<template>
  <div>
    <el-row class="title">
      <el-col :span="24">
      <h1>阿姆斯特朗</h1>
      </el-col>
    </el-row>
    <div class="info">
      <div class="introduce-head">
        <div class="introduce-via" id="menuBlogAvatar">
          <img :src="head"></div>
      </div>
      <div class="profile_block">昵称：
        <a href="https://home.cnblogs.com/u/biaogejiushibiao/">麦奇</a>
        <br>
        园龄：
        <a href="https://home.cnblogs.com/u/biaogejiushibiao/" title="入园时间：2018-05-12">1年6个月</a>
        <br>
        粉丝：<a href="https://home.cnblogs.com/u/biaogejiushibiao/followers/">12</a>
        <br>
        关注：
        <a href="https://home.cnblogs.com/u/biaogejiushibiao/followees/">25</a>
        <div id="p_b_follow"></div>
      </div>
    </div>
    <div>
      <el-input placeholder="请输入内容" v-model="input1" style="background: rgb(84, 92, 100)">
        <template slot="prepend">园内搜索</template>
      </el-input>
    </div>
    <el-container>
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          mode="vertical"
          default-active="2"
          class="el-menu el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          :collapse="collapseVisible"
          active-text-color="#ffd04b">
          <el-menu-item index="1">
            <i class="el-icon-location"></i>
            <span slot="title" @onclick="collapseVisible = false">导航一</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" >
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    </el-container>
    <!--日历-->
    <div class="time">
      <table id="blogCalendar" class="Cal" cellspacing="0" cellpadding="0" title="Calendar" border="0">
        <tbody>
        <tr align="center">
          <td colspan="7">
            <table class="CalTitle" cellspacing="0" border="0">
              <tbody>
              <tr>
                <td class="CalNextPrev">
                  <a href="javascript:void(0);" onclick="loadBlogCalendar('2019/11/06'); return false;">&lt;</a>
                </td>
                <td align="center">2019年12月</td>
                <td align="right" class="CalNextPrev">
                  <a href="javascript:void(0);" onclick="loadBlogCalendar('2020/01/06'); return false;">&gt;</a>
                </td>
              </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <th class="CalDayHeader" align="center" abbr="日" scope="col">日</th>
          <th class="CalDayHeader" align="center" abbr="一" scope="col">一</th>
          <th class="CalDayHeader" align="center" abbr="二" scope="col">二</th>
          <th class="CalDayHeader" align="center" abbr="三" scope="col">三</th>
          <th class="CalDayHeader" align="center" abbr="四" scope="col">四</th>
          <th class="CalDayHeader" align="center" abbr="五" scope="col">五</th>
          <th class="CalDayHeader" align="center" abbr="六" scope="col">六</th>
        </tr>
        <tr>
          <td class="CalWeekendDay" align="center">
            1
          </td>
          <td class="" align="center">
            2
          </td>
          <td class="" align="center">
            3
          </td>
          <td class="" align="center">
            4
          </td>
          <td class="" align="center">
            5
          </td>
          <td class="CalTodayDay" align="center">
            6
          </td>
          <td class="CalWeekendDay" align="center">
            7
          </td>
        </tr>
        <tr>
          <td class="CalWeekendDay" align="center">
            8
          </td>
          <td class="" align="center">
            9
          </td>
          <td class="" align="center">
            10
          </td>
          <td class="" align="center">
            11
          </td>
          <td class="" align="center">
            12
          </td>
          <td class="" align="center">
            13
          </td>
          <td class="CalWeekendDay" align="center">
            14
          </td>
        </tr>
        <tr>
          <td class="CalWeekendDay" align="center">
            15
          </td>
          <td class="" align="center">
            16
          </td>
          <td class="" align="center">
            17
          </td>
          <td class="" align="center">
            18
          </td>
          <td class="" align="center">
            19
          </td>
          <td class="" align="center">
            20
          </td>
          <td class="CalWeekendDay" align="center">
            21
          </td>
        </tr>
        <tr>
          <td class="CalWeekendDay" align="center">
            22
          </td>
          <td class="" align="center">
            23
          </td>
          <td class="" align="center">
            24
          </td>
          <td class="" align="center">
            25
          </td>
          <td class="" align="center">
            26
          </td>
          <td class="" align="center">
            27
          </td>
          <td class="CalWeekendDay" align="center">
            28
          </td>
        </tr>
        <tr>
          <td class="CalWeekendDay" align="center">
            29
          </td>
          <td class="" align="center">
            30
          </td>
          <td class="" align="center">
            31
          </td>
          <td class="CalOtherMonthDay" align="center">
            1
          </td>
          <td class="CalOtherMonthDay" align="center">
            2
          </td>
          <td class="CalOtherMonthDay" align="center">
            3
          </td>
          <td class="CalOtherMonthDay" align="center">
            4
          </td>
        </tr>
        <tr>
          <td class="CalOtherMonthDay" align="center">
            5
          </td>
          <td class="CalOtherMonthDay" align="center">
            6
          </td>
          <td class="CalOtherMonthDay" align="center">
            7
          </td>
          <td class="CalOtherMonthDay" align="center">
            8
          </td>
          <td class="CalOtherMonthDay" align="center">
            9
          </td>
          <td class="CalOtherMonthDay" align="center">
            10
          </td>
          <td class="CalOtherMonthDay" align="center">
            11
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import BG from '@/assets/images/head_bg.gif'
import HEAD from '@/assets/images/head.jpeg'
export default {
  name: 'left',
  data: function () {
    return {
      src: BG,
      head: HEAD,
      dateTime: new Date(),
      collapseVisible: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
  .el-menu {
    border-right: solid 0px #e6e6e6;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    background-color: #FFF;
  }
  .title{
    background: rgb(84, 92, 100);
    color: rgb(255, 255, 255);;
    line-height: 60px;
    font-size: 20px;
  }
  .title h1{
    margin: 0 0px;
    font-weight: 700;

  }
  .info{
    height: 250px;
    background: url('~@/assets/images/head_bg.gif') center center/100% no-repeat rgb(0, 0, 0);
  }
  .profile_block {
    padding: 15px;
    color: #ffffff;
    font-size: 15px;
    line-height: 1.8;
    margin-top: 0 !important;
  }
  .introduce-via img {
    width: 66px;
    height: 66px;
    border: 4px solid rgba(255,255,255,0.5);
    border-radius: 100%;
    box-shadow: inset 1px 1px 4px rgba(0,0,0,0.3), 0 2px 3px rgba(0,0,0,0.4);
  }
  .introduce-head{
    padding: 20px;
  }
  .time {
    margin: 5px;
  }
  .time .Cal{
    width: 100%;
  }
  .time table {
    border-collapse: collapse;
    border-spacing: 0;
    max-width: 850px;
    margin: 0;
    padding: 0;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
    border-color: grey;
    display: table;
  }
</style>

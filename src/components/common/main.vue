<template>
  <!--TODO:DIV布局-->
  <div>
    <div class="main-top">
      <div style="z-index:-1;">
        <el-row>
          <el-col>
            <div style="padding-top: 10px">
              <h1 style="line-height: 1.1;font-weight: 700;font-size: 80px;color: aliceblue">麦奇的博客</h1>
              <span style="color: #fff;font-size: 20px">学习 生活 分享</span>
            </div>
          </el-col>
        </el-row>
      </div>
      <!--TODO:css3动画-->
      <div>
        <vue-particles
          color="#dedede"
          :particleOpacity="0.7"
          :particlesNumber="80"
          shapeType="circle"
          :particleSize="4"
          linesColor="#dedede"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="3"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push">
        </vue-particles>
      </div>
    </div>
    <el-container style="margin: 0px;">
      <el-row style="width: 100%;margin-top: -10px">
        <el-col :span="24">
          <div class="grid-content bg-purple-dark"
               style="text-align: left;border-top-left-radius: 0px;border-top-right-radius: 0px">
            <span
              style="line-height: 60px;font-size: 20px;margin-left: 15px;font-weight: bold;color: aliceblue">文章列表>></span>
          </div>
        </el-col>
      </el-row>
    </el-container>
    <!--TODO:浮动布局-->
    <div>
      <div style="width: 70%;float: left">
        <el-container>
          <el-row :gutter="20" style="margin-top: 5px">
            <!--TODO:position: relative 相对布局-->
            <el-col  :xs="24" :sm="24" :md="20" :lg="20" :xl="20" :span="20" v-for="(item, index) in stackList" :key="index" :offset="4">
              <el-card :body-style="{ padding: '0px',margin: '20px',height: '150px'}" shadow="hover">
                <div style="padding: 5px;">
                  <div style="width: 20%;height: 155px;float: left" class="hidden-xs-only">
                    <el-tooltip class="item" effect="dark" :content=item.name placement="top-end">
                      <img v-bind:src=item.img style="width: 100%;height: 100%;">
                    </el-tooltip>
                  </div>
                  <!--内容div-->
                  <div
                    style="border: red 0px solid; float: left;height: 155px;padding: 0px 5px;width: 78%;text-align: left;overflow: hidden">
                    <div style="line-height: 0px;margin-bottom: 0px;"><h3><span>标题：{{item.name}}</span></h3></div>
                    <div style="clear:both;height: auto;">
                      <div style="overflow: hidden;height: 100px;">
                        <p style="overflow:hidden;height: 80px;margin-top: 0px"><strong>摘要：</strong>{{ textData}}</p>
                      </div>
                      <div style="clear: both;margin-bottom: 0px;padding-bottom:2px;">
                        <span class="hidden-xs-only">posted @ 2018-07-10 23:16 麦奇 阅读 (27821) 评论 (1)</span>
                        <el-tooltip class="item" effect="dark" content="点我查看博文详情" placement="top-end">
                          <span style="float: right;color: #3a8ee6"><a @click="blogInfo">阅读全文</a></span>
                        </el-tooltip>
                      </div>
                    </div>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-container>
      </div>
      <div class="hidden-xs-only hidden-sm-only"
        style="width: 20%;height:2100px;border-radius:5px;background-color:#fff;float: left;margin:15px 0px;padding: 0px 0px">
        <div id="sideBarMain">

          <div id="sidebar_news" class="newsItem" style="padding-top: 0px;"><!--done-->
            <h3 style="padding-top: 0px;line-height: 40px;margin-top: 0px;" class="catListTitle">公告</h3>

            <div id="blog-news">

              <title>Live2d Test Env</title>

              <!--<script type="text/javascript">window['__document_write_ajax_callbacks__']['5']();</script>-->
              <!--<script type="text/javascript">window['__document_write_ajax_callbacks__']['6']();</script>-->
              <!--<script defer="">window['__document_write_ajax_callbacks__']['1']();</script>-->
              <!--<div style="display: none" id="__document_write_ajax_div-2"></div>-->
              <!--<script type="text/javascript">window['__document_write_ajax_callbacks__']['2']();</script>-->
              <!--<script type="text/javascript">window['__document_write_ajax_callbacks__']['8']();</script>-->
              <!--<script type="text/javascript">window['__document_write_ajax_callbacks__']['9']();</script>-->
              <!--<script type="text/javascript" defer="">window['__document_write_ajax_callbacks__']['3']();</script>-->

              <div id="profile_block">
                昵称：麦奇
                <!--<a href="https://home.cnblogs.com/u/biaogejiushibiao/">-->
                <!--麦奇-->
                <!--</a>-->
                <br>
                园龄：3年7个月
                <!--<a href="https://home.cnblogs.com/u/biaogejiushibiao/" title="入园时间：2018-05-12">-->
                <!--3年7个月-->
                <!--</a>-->
                <br>
                粉丝：120
                <!--<a href="https://home.cnblogs.com/u/biaogejiushibiao/followers/">-->
                <!--12-->
                <!--</a>-->
                <br>
                关注：50
                <!--<a href="https://home.cnblogs.com/u/biaogejiushibiao/followees/">-->
                <!--26-->
                <!--</a>-->
                <div id="p_b_follow"></div>
                <!--<script type="text/javascript">window['__document_write_ajax_callbacks__']['10']();</script>-->
                <!--<script>window['__document_write_ajax_callbacks__']['4']();</script>-->
              </div>
            </div>

          </div>

          <div id="blog-calendar" style="">

            <!--TODO:表格布局-->
            <table id="blogCalendar" class="Cal" cellspacing="0" cellpadding="0" title="Calendar" border="0">
              <tbody>
              <tr>
                <td class="CalNextPrev" colspan="2">
                  <a href="javascript:void(0);" onclick="loadBlogCalendar('2019/11/19'); return false;">&lt;</a>
                </td>
                <td align="center" colspan="3"
                    style="display: table-cell;vertical-align: inherit;text-align: -webkit-center;">2019年12月
                </td>
                <td align="center" colspan="2" class="CalNextPrev">
                  <a href="javascript:void(0);" onclick="loadBlogCalendar('2020/01/19'); return false;">&gt;</a>
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
                <td class="" align="center">
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
                  <a href="https://www.cnblogs.com/biaogejiushibiao/archive/2019/12/10.html"><u>10</u></a>
                </td>
                <td class="" align="center">
                  11
                </td>
                <td class="" align="center">
                  12
                </td>
                <td class="" align="center">
                  <a href="https://www.cnblogs.com/biaogejiushibiao/archive/2019/12/13.html"><u>13</u></a>
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
                  <a href="https://www.cnblogs.com/biaogejiushibiao/archive/2019/12/17.html"><u>17</u></a>
                </td>
                <td class="" align="center">
                  18
                </td>
                <td class="CalTodayDay" align="center">
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
          <!--<script>loadBlogDefaultCalendar();</script>-->

          <div id="leftcontentcontainer">
            <div id="blog-sidecolumn">
              <!-- 搜索 -->
              <div id="sidebar_search1" class="sidebar-block">
                <div id="sidebar_search2" class="mySearch">
                  <h3 class="catListTitle">搜索</h3>
                  <div id="sidebar_search_box">
                    <el-input placeholder="请输入内容" v-model="key" class="input-with-select">
                      <el-select v-model="select" slot="prepend" placeholder="请选择">
                        <el-option label="站内搜索" value="1"></el-option>
                        <el-option label="站外搜索" value="2"></el-option>
                        <el-option label="谷歌搜索" value="3"></el-option>
                      </el-select>
                      <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                  </div>
                </div>
              </div>
              <!-- 常用链接 -->
              <div id="sidebar_shortcut" class="sidebar-block">
                <div class="catListLink">
                  <h3 class="catListTitle">常用链接</h3>
                  <ul>
                    <li>
                      <a href="https://www.cnblogs.com/biaogejiushibiao/p/" title="我的博客的随笔列表">我的随笔</a>
                    </li>
                    <li>
                      <a href="https://www.cnblogs.com/biaogejiushibiao/MyComments.html" title="我的发表过的评论列表">我的评论</a>
                    </li>
                    <li>
                      <a href="https://www.cnblogs.com/biaogejiushibiao/OtherPosts.html" title="我评论过的随笔列表">我的参与</a>
                    </li>
                    <li>
                      <a href="https://www.cnblogs.com/biaogejiushibiao/RecentComments.html" title="我的博客的评论列表">最新评论</a>
                    </li>
                    <li>
                      <a href="https://www.cnblogs.com/biaogejiushibiao/tag/" title="我的博客的标签列表">我的标签</a>
                    </li>
                  </ul>
                  <div id="itemListLin_con" style="display:none;">
                    <ul>

                    </ul>
                  </div>
                </div>

              </div>

              <!-- 最新随笔 -->
              <div id="sidebar_recentposts" class="sidebar-block">
                <div class="catListEssay">
                  <h3 class="catListTitle">最新随笔</h3>
                  <ul>
                    <li>

                      <a href="https://www.cnblogs.com/biaogejiushibiao/p/12053557.html">1.Hyperledger Learning
                        Notes </a>

                    </li>
                    <li>

                      <a href="https://www.cnblogs.com/biaogejiushibiao/p/12037785.html">2.ECMAScript 6.0</a>

                    </li>
                    <li>

                      <a href="https://www.cnblogs.com/biaogejiushibiao/p/11838343.html">3.Blockchain technology and
                        Application</a>

                    </li>
                    <li>

                      <a href="https://www.cnblogs.com/biaogejiushibiao/p/11798978.html">4.Block Chain Learning Notes
                        Two</a>

                    </li>
                    <li>

                      <a href="https://www.cnblogs.com/biaogejiushibiao/p/11764271.html">5.Block Chain Learning Notes
                        One</a>

                    </li>
                    <li>

                      <a href="https://www.cnblogs.com/biaogejiushibiao/p/11761329.html">6.Etcd Learning Notes</a>

                    </li>
                    <li>

                      <a href="https://www.cnblogs.com/biaogejiushibiao/p/11736699.html">7.Travis CI Build Continuous
                        Integration</a>

                    </li>
                    <li>

                      <a href="https://www.cnblogs.com/biaogejiushibiao/p/11718815.html">8.Markdown Learning Notes</a>

                    </li>
                    <li>

                      <a href="https://www.cnblogs.com/biaogejiushibiao/p/11714415.html">9.SPRING MICROSERVICES IN
                        ACTION</a>

                    </li>
                    <li>

                      <a href="https://www.cnblogs.com/biaogejiushibiao/p/11687344.html">10.Java Interview Questions
                        Summary</a>

                    </li>

                  </ul>
                </div>

              </div>

              <!-- 我的标签 -->
              <div id="sidebar_toptags" class="sidebar-block">

              </div>

              <!-- 积分与排名 -->
              <div id="sidebar_scorerank" class="sidebar-block">
                <div class="catListBlogRank">
                  <h3 class="catListTitle">积分与排名</h3>
                  <ul>
                    <li class="liScore">
                      积分 -
                      57420
                    </li>
                    <li class="liRank">
                      排名 -
                      11947
                    </li>
                  </ul>
                </div>

              </div>

              <!-- 阅读排行榜 -->
              <div id="sidebar_topviewedposts" class="sidebar-block">
                <div class="catListView">
                  <h3 class="catListTitle">阅读排行榜</h3>
                  <div id="TopViewPostsBlock">
                    <ul style="word-break:break-all">
                      <li>
                        <a href="https://www.cnblogs.com/biaogejiushibiao/p/9292061.html">
                          1. 关于java程序在运行时出现a java exception has occured时解决方法(28864)
                        </a>
                      </li>
                      <li>
                        <a href="https://www.cnblogs.com/biaogejiushibiao/p/9301640.html">
                          2. java.sql.SQLException: No suitable driver found for jdbc:mysql://localhost:3306/(8901)
                        </a>
                      </li>
                      <li>
                        <a href="https://www.cnblogs.com/biaogejiushibiao/p/10061466.html">
                          3. SpringBoot中普通类无法通过@Autowired自动注入Service、dao等bean解决方法(7337)
                        </a>
                      </li>
                      <li>
                        <a href="https://www.cnblogs.com/biaogejiushibiao/p/9268533.html">
                          4. 常用FTP命令汇总(5624)
                        </a>
                      </li>
                      <li>
                        <a href="https://www.cnblogs.com/biaogejiushibiao/p/9260468.html">
                          5. 关于阿里云ecs服务器无法用FTP进行连接问题(5315)
                        </a>
                      </li>
                      <li>
                        <a href="https://www.cnblogs.com/biaogejiushibiao/p/10148239.html">
                          6. Mybatis注解开发(2247)
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Main',
  data () {
    return {
      key: '',
      reverse: true,
      select: '1',
      activeIndex: '1',
      activeIndex2: '1',
      textData: 'Apache Thrift软件框架（用于可扩展的跨语言服务开发）将软件堆栈与代码生成引擎结合在一起，以构建可在C ++，Java，Python，PHP，Ruby，Erlang，Perl，Haskell，C＃，可可，JavaScript，Node.js，Smalltalk，OCaml和Delphi等语言。' +
          'Apache Thrift允许您在简单的定义文件中定义数据类型和服务接口。将该文件作为输入，编译器将生成用于轻松构建跨编程语言无缝通信的RPC客户端和服务器的代码。您无需编写大量的样板代码来序列化和传输对象并调用远程方法，而是可以开始工作。' +
          'Apache Thrift 需要一个定义数据类型和服务接口的简单定义文件作为模板提供给代码生成引擎用来生成生成客户端代码和服务端代码，并以此实现客户端与服务端之间的跨语言的无缝通讯。我们就不用编写大量重复的模块化代码来序列化。',
      currentDate: new Date(),
      stackList: [
        {name: 'Docker应用技术', img: '/static/images/catalog/docker.jpg', describe: 'Docker应用技术'},
        {name: 'K8s应用技术', img: '/static/images/catalog/k8s.jpg', describe: 'K8s应用技术'},
        {name: 'Dubbo应用技术', img: '/static/images/catalog/dubbo.jpg', describe: 'Dubbo应用技术'},
        {name: 'flutter开发技术', img: '/static/images/catalog/flutter.jpeg', describe: 'flutter开发技术'},
        {name: '区块链应用技术开发', img: '/static/images/catalog/blockchain.jpg', describe: '区块链应用技术开发'},
        {name: 'Redis 高可用', img: '/static/images/catalog/redis.jpeg', describe: 'Redis 高可用'},
        {name: 'Grpc', img: '/static/images/catalog/grpc.jpg', describe: 'Grpc 应用技术开发'},
        {name: 'go-micro', img: '/static/images/catalog/go-micro.png', describe: '服务实战系列'},
        {name: 'react', img: '/static/images/catalog/react.jpg', describe: 'react应用技术开发'},
        {name: 'angular开发技术', img: '/static/images/catalog/angular.jpg', describe: 'angular开发技术'}
      ],
      activities: [{
        content: '活动按期开始',
        timestamp: '2018-04-15'
      }, {
        content: '通过审核',
        timestamp: '2018-04-13'
      }, {
        content: '创建成功',
        timestamp: '2018-04-11'
      }, {
        content: '通过审核',
        timestamp: '2018-04-13'
      }, {
        content: '创建成功',
        timestamp: '2018-04-11'
      }]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    detail () {
      this.$router.push('/blogs')
    },
    blogInfo () {
      this.$router.push('/blog-info')
    }
  }
}
</script>

<style scoped>

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-card {
    line-height: 20px;
  }

  .page {
    line-height: 20px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .bg-purple-dark {
    /*background-color: rgb(84, 92, 100);*/
    background-color: #169fe6;
    width: 100%;
  }

  .grid-content {
    border-radius: 10px;
    min-height: 40px;
    margin-top: 10px;
    margin-bottom: 5px;
    align-content: center;
  }

  .main-top {
    height: 500px;
    /*background: url('~@/assets/images/bg_index.jpg') center center/100% no-repeat rgb(0, 0, 0);*/
    /*background: url('~@/assets/images/title-yellow.png') center center/100% no-repeat #138cca;*/
    background: url('~@/assets/images/title-yellow.png') center bottom no-repeat #138cca;
    padding-top: 0px;
  }

  .el-container {
    margin: 10px;
  }

  .el-card {
    border: 1px solid #EBEEF5;
    background-color: #FFF;
    color: #303133;
    -webkit-transition: .3s;
    transition: .3s;
    margin-bottom: 20px;
  }

  /*右边信息栏*/
  #sideBar {
    /*width: 290px;*/
    /*margin-left: 20px;*/
    /*float: left;*/
    /*-o-text-overflow: ellipsis;*/
    /*text-overflow: ellipsis;*/
    /*overflow: visible;*/
    word-break: break-all;
  }

  .catListTitle {
    font-size: 18px;
    padding: 10px 20px;
    background-color: #169fe6;
    /*background-color: rgb(84, 92, 100);*/
    color: #fff;
    font-weight: normal;
    border: #169fe6;
    line-height: 30px;
    /*border: rgb(84, 92, 100);*/
    border-radius: 5px;
  }

  #blog-news {
    overflow: visible;
    /*margin-bottom: 20px;*/
  }

  #blog-news {
    overflow: hidden;
  }

  #blog-calendar {
    margin-top: 10px;
    line-height: 25px;
  }

  #blog-calendar .Cal {
    width: 100%;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    max-width: 850px;
    border-color: grey;
    display: table;
  }

  #blog-calendar tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }

  #sidebar_news {
    line-height: 30px;
  }

  #sideBarMain a {
    color: gray;
  }

  #sideBar li {
    list-style: none;
  }

  .sidebar-block ul li {
    line-height: 2;
    border-bottom: 1px solid #e9e9e9;
    padding: 15px 10px 15px 20px;
    font-size: 14px;
    color: #777;
  }
</style>

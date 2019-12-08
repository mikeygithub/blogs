<template>
  <div>
    <div class="main-top">
      <div style="z-index:-1;">
        <el-row>
          <el-col>
            <div style="padding-top: 100px">
              <h1 style="line-height: 1.1;font-weight: 700;font-size: 80px;color: aliceblue">麦奇的博客</h1>
              <span style="color: #fff;font-size: 20px">学习 生活 分享</span>
            </div>
          </el-col>
        </el-row>
      </div>
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
    <!--<div>-->
      <!--<el-carousel :interval="4000" type="card" height="400px">-->
        <!--<el-carousel-item v-for="item in 6" :key="item">-->
          <!--<h3><img :src=BLOCKCHAIN class="image"></h3>-->
        <!--</el-carousel-item>-->
      <!--</el-carousel>-->
    <!--</div>-->
    <el-container style="margin: 0px;">
      <el-row style="width: 100%">
        <el-col :span="24">
          <div class="grid-content bg-purple-dark" style="text-align: left">
            <span style="line-height: 60px;font-size: 20px;margin-left: 15px;font-weight: bold;color: aliceblue" @click="detail">技术栈分类>></span>
          </div>
        </el-col>
      </el-row>
    </el-container>
    <el-container>
      <el-row :gutter="3" style="margin-top: 5px">
        <el-col :span="4" v-for="(item, index) in stackList" :key="index" :offset="index % 5 == 0 ? 0 : 1">
          <el-card :body-style="{ padding: '0px',margin: '20px',height: '150px'}" shadow="hover">
            <img v-bind:src=item.img class="image">
            <div style="padding: 5px;">
              <span>{{item.name}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ item.describe }}</time>
                <el-button type="text" class="button" @click="detail">详情信息</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-container>
    <el-container class="page">
      <el-row type="flex" justify="center">
        <nav style="text-align: center">
          <el-col center="true">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
          </el-col></nav>
      </el-row>
    </el-container>
    <el-container  style="margin: 0px;">
      <el-row style="width: 100%">
        <el-col :span="24">
          <div class="grid-content bg-purple-dark" style="text-align: left">
            <span style="line-height: 60px;font-size: 20px;margin-left: 15px;font-weight: bold;color: aliceblue">文章列表>></span>
          </div>
        </el-col>
      </el-row>
    </el-container>
    <!--TODO:浮动布局-->
    <el-container>
      <el-row :gutter="20" style="margin-top: 5px">
        <el-col :span="10" v-for="(item, index) in stackList" :key="index" :offset="index % 2 == 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px',margin: '20px',height: '150px'}" shadow="hover">
            <div style="padding: 5px;">
              <div style="width: 20%;height: 150px;float: left">
                <img v-bind:src=item.img style="width: 100%;height: 100%;">
              </div>
            <!--内容div-->
              <div style="border: red 0px solid; float: left;height: 150px;padding: 0px 5px;width: 78%;text-align: left">
                <div style="line-height: 0px;margin-bottom: 0px;"><h3><span>标题：{{item.name}}</span></h3></div>
                <div style="clear:both;height: auto;line-height: 20px">
                  <div>
                    <p><strong>摘要：</strong>{{ textData}}</p>
                  </div>
                  <div style="clear: both">
                    <span>posted @ 2018-07-10 23:16 麦奇 阅读 (27821) 评论 (1)</span>
                    <el-button type="text" class="button">阅读全文</el-button>
                  </div>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-container>
    <el-container class="page">
      <el-row type="flex" justify="center">
        <nav>
          <el-col center="true">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </el-col>
        </nav>
      </el-row>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'Main',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      textData: 'Apache Thrift软件框架（用于可扩展的跨语言服务开发）将软件堆栈与代码生成引擎结合在一起，以构建可在C ++，Java，Python，PHP，Ruby，Erlang，Perl，Haskell，C＃，可可，JavaScript，Node.js，Smalltalk，OCaml和Delphi等语言。\n' +
        'Thrift是Facebook开发的一个软件库和一套代码生成工具，用于加快高效且可扩展的后端服务。',
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
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    detail () {
      this.$router.push('/blogs')
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
.el-card{
  line-height: 50px;
}
.page{
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
    background-color: rgb(84, 92, 100);;
    width: 100%;
  }
  .grid-content {
    border-radius: 10px;
    min-height: 40px;
    margin-top: 10px;
    margin-bottom: 5px;
    align-content: center;
  }
  .main-top{
    height: 500px;
    background: url('~@/assets/images/bg_index.jpg') center center/100% no-repeat rgb(0, 0, 0);
    padding-top: 0px;
  }
  .el-container{
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
</style>

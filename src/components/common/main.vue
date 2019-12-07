<template>
  <div>
    <div class="main-top">

    </div>
    <!--<div>-->
      <!--<el-carousel :interval="4000" type="card" height="400px">-->
        <!--<el-carousel-item v-for="item in 6" :key="item">-->
          <!--<h3><img :src=BLOCKCHAIN class="image"></h3>-->
        <!--</el-carousel-item>-->
      <!--</el-carousel>-->
    <!--</div>-->
    <el-container>
      <el-row style="width: 100%">
        <el-col :span="24">
          <div class="grid-content bg-purple-dark" style="text-align: left">
            <span style="line-height: 60px;font-size: 20px;margin-left: 15px;font-weight: lighter;">技术栈分类>></span>
          </div>
        </el-col>
      </el-row>
    </el-container>
  <!--<el-container>-->
    <!--<el-row :gutter="12" style="margin-top: 5px">-->
      <!--<el-col :span="4" v-for="(o, index) in 10" :key="o" :offset="index % 5 == 0 ? 0 : 1">-->
        <!--<el-card :body-style="{ padding: '0px',margin: '20px' }" shadow="hover">-->
          <!--<img :src=IMG class="image">-->
          <!--<div style="padding: 5px;">-->
            <!--<span>Docker技术应用</span>-->
            <!--<div class="bottom clearfix">-->
              <!--<time class="time">{{ currentDate }}</time>-->
              <!--<el-button type="text" class="button">详情信息>></el-button>-->
            <!--</div>-->
          <!--</div>-->
        <!--</el-card>-->
      <!--</el-col>-->
    <!--</el-row>-->
  <!--</el-container>-->
    <el-container>
      <el-row :gutter="3" style="margin-top: 5px">
        <el-col :span="4" v-for="(item, index) in stackList" :key="index" :offset="index % 5 == 0 ? 0 : 1">
          <el-card :body-style="{ padding: '0px',margin: '20px',height: '150px'}" shadow="hover">
            <img v-bind:src=item.img class="image">
            <div style="padding: 5px;">
              <span>{{item.name}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ item.describe }}</time>
                <el-button type="text" class="button">详情信息</el-button>
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
    <el-container>
      <el-row style="width: 100%">
        <el-col :span="24">
          <div class="grid-content bg-purple-dark" style="text-align: left">
            <span style="line-height: 60px;font-size: 20px;margin-left: 15px;font-weight: lighter;">技术栈分类>></span>
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
                <el-button type="text" class="button">详情信息</el-button>
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
  </div>
</template>
<script>
export default {
  name: 'Main',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
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
  padding: 20px;
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
    background: #99a9bf;
    width: 100%;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
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
    margin-bottom: 50px;
  }
</style>

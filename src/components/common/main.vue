<template>
  <div>
    <div>
      <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3><img :src=BLOCKCHAIN class="image"></h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-container>
      <el-row style="width: 100%">
        <el-col :span="24">
          <div class="grid-content bg-purple-dark" style="text-align: left">
            <span style="line-height: 60px;font-size: 20px;margin-left: 10px">专题分类>></span>
          </div>
        </el-col>
      </el-row>
    </el-container>
  <el-container>
    <el-row :gutter="5" style="margin-top: 20px">
      <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 1 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img :src=IMG class="image">
          <div style="padding: 5px;">
            <span>Docker技术应用</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
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
import IMG from '@/assets/images/docker.jpg'
import BLOCKCHAIN from '@/assets/images/flutter.jpeg'
export default {
  name: 'Main',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      IMG: IMG,
      BLOCKCHAIN: BLOCKCHAIN,
      currentDate: new Date()
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
</style>

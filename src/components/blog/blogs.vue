<template>
  <div class="container">
    <div class="blog-top"></div>
    <div class="text">
      <el-container>
        <el-row :gutter="3" style="margin-top: 5px;overflow: hidden;">
          <el-col :span="12" v-for="(item, index) in stackList" :key="index" :offset=6>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'blogs',
  data () {
    return {
      textData: 'Apache Thrift软件框架（用于可扩展的跨语言服务开发）将软件堆栈与代码生成引擎结合在一起，以构建可在C ++，Java，Python，PHP，Ruby，Erlang，Perl，Haskell，C＃，可可，JavaScript，Node.js，Smalltalk，OCaml和Delphi等语言。\n',
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
  }
}
</script>

<style scoped>
  .container{
    /*background: url('~@/assets/images/head_bg.jpeg') center/100% 100% no-repeat rgb(0, 0, 0);*/
  }
  .blog-top{
    height: 500px;
    background: url('~@/assets/images/head_bg.jpeg') center center/100% no-repeat rgb(0, 0, 0);
    padding-top: 0px;
  }
  .el-card {
    border: 1px solid #EBEEF5;
    background-color: #FFF;
    color: #303133;
    -webkit-transition: .3s;
    transition: .3s;
    margin-bottom: 20px;
  }
  .text{
    margin-top: 20px;
  }
</style>

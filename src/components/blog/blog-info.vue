<template>
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
              style="line-height: 60px;font-size: 20px;margin-left: 15px;font-weight: bold;color: aliceblue">文章详情</span>
          </div>
        </el-col>
      </el-row>
    </el-container>
    <!--TODO:浮动布局-->
    <div>
      <div style="width: 70%;float: left;height: auto;margin: 15px 40px">
        <!--博文详情 s-->
        <div id="topics">
          <div class="post">
            <h1 class="postTitle">
              <a id="cb_post_title_url" class="postTitle2"
                 href="https://www.cnblogs.com/biaogejiushibiao/p/11606630.html">Apache Thrift Learning Notes</a>
            </h1>
            <div class="clear"></div>
            <div class="postBody">
              <div id="cnblogs_post_bodys" class="blogpost-body "><a name="_labelTop"></a>
                <div id="navCategory" style="color:#152e97;">
                  <h1
                    style="font-size:16px;background: rgb(22, 159, 230);border-radius: 6px 6px 6px 6px;box-shadow: 0 0 0 1px #5F5A4B, 1px 1px 6px 1px rgba(10, 10, 0, 0.5);color: #FFFFFF;font-size: 17px;font-weight: bold;height: 25px;line-height: 25px;margin: 18px 0 !important;padding: 8px 0 5px 30px;">
                    <b>阅读目录</b>
                  </h1>
                  <ol>
                    <li><a href="#_label0">1.简介</a></li>
                    <li><a href="#_label1">2.安装</a></li>
                    <li><a href="#_label2">3.编写TDF文件</a></li>
                    <li><a href="#_label3">4.生成代码</a></li>
                    <li><a href="#_label4">5.简单运行</a></li>
                  </ol>
                </div>
                <p>&nbsp;</p>
                <hr>
                <div style="text-align: right;"><a href="#_labelTop" style="color:rgb(22, 159, 230)">回到顶部</a><a
                  name="_label0"></a></div>
                <h1>简介</h1>
                <p>&nbsp;Apache Thrift软件框架（用于可扩展的跨语言服务开发）将软件堆栈与代码生成引擎结合在一起，以构建可在C
                  ++，Java，Python，PHP，Ruby，Erlang，Perl，Haskell，C＃，可可，JavaScript，Node.js，Smalltalk，OCaml和Delphi等语言。</p>
                <div class="cnblogs_code">
                  <pre><span style="color: #000000;">Thrift是Facebook开发的一个软件库和一套代码生成工具，用于加快高效且可扩展的后端服务。它的主要目标是通过抽象每种语言中倾向于需要在每种语言实现的公共库中进行最大程度的自定义。<br>具体来说，节俭允许开发者在单一语言中立中定义数据类型和服务接口归档并生成生成生成rpc客户端和服务器。</span></pre>
                </div>
                <p>更多信息参考：<a href="http://thrift.apache.org/static/files/thrift-20070401.pdf" target="_blank">http://thrift.apache.org/static/files/thrift-20070401.pdf</a>
                </p>
                <div style="text-align: right;"><a href="#_labelTop" style="color:rgb(22, 159, 230)">回到顶部</a><a
                  name="_label1"></a></div>
                <h1>安装</h1>
                <p>参考指南：<a href="http://thrift.apache.org/docs/install/">http://thrift.apache.org/docs/install/</a></p>
                <div id="cnblogs_post_body" class="blogpost-body ">
                  <div class="cnblogs_code">
                    <pre>sudo apt-get install automake bison flex g++ git libboost-all-dev libevent-dev libssl-dev libtool make pkg-config</pre>
                  </div>
                  <p class="pre">下载apache thrift:&nbsp; &nbsp;<a href="https://thrift.apache.org/download">https://thrift.apache.org/download</a>
                  </p>
                  <p class="pre">编译源代码:</p>
                  <div class="cnblogs_code">
                    <pre>./configure</pre>
                  </div>
                  <p class="pre">如果你想禁用某种语言,&nbsp;例如java,&nbsp;可以使用下面的语句:</p>
                  <div class="cnblogs_code">
                    <pre>./configure --without-java</pre>
                  </div>
                  <p class="pre">如果你需要指定boost文件的位置,&nbsp;例如你将boost库安装在/usr/local,&nbsp;你要按下面方式运行configure:</p>
                  <div class="cnblogs_code">
                    <pre>./configure --with-boost=/usr/local</pre>
                  </div>
                  <p class="pre">默认情况下thrift的C++库是以debug方式编译,&nbsp;如果希望以其他方式编译,&nbsp;可以使用CXXFLAGS选项,&nbsp;例如</p>
                  <div class="cnblogs_code">
<pre>./configure CXXFLAGS=’-g -O2’
./configure CFLAGS=’-g -O2’
./configure CPPFLAGS=’-DDEBUG_MY_FEATURE’</pre>
                  </div>
                  <p class="pre">调用完configure之后,&nbsp;然后调用下面的命令:</p>
                  <div class="cnblogs_code">
<pre>make
make check
sh test/test.sh #跨语言测试</pre>
                  </div>
                  <p class="pre"><span class="pre">安装可以通过以下命令:</span></p>
                  <div class="cnblogs_code">
                    <pre>sudo make install</pre>
                  </div>
                  <p class="pre">如果出现get github.com/golang/mock/gomock超时错误,&nbsp;可以把golang/x/net/context包拷贝到thrift-version/test/go目录中,&nbsp;最后context文件夹位于thrift-version/test/go/src/golang.org/x/net文件夹中,&nbsp;然后重新调用上述安装命令.</p>
                  <div style="text-align: right;"><a href="#_labelTop" style="color:rgb(22, 159, 230)">回到顶部</a><a
                    name="_label2"></a></div>
                  <h1 class="pre">编写TDF文件</h1>
                  <div class="cnblogs_code">
                    <div class="cnblogs_code_toolbar"><span class="cnblogs_code_copy"><a href="#" title="复制代码"><img
                      src="//common.cnblogs.com/images/copycode.gif" alt="复制代码"></a></span></div>
                    <pre><span style="color: #000000;">Apache Thrift allows you to define data types and service interfaces in a simple definition file. Taking that file as input, <br>the compiler generates code to be used to easily build RPC clients and servers that communicate seamlessly across programming languages. <br>Instead of writing a load of boilerplate code to serialize and transport your objects and invoke remote methods, you can get right down to business.
The following example is a simple service to store user objects </span><span style="color: #0000ff;">for</span> a web front end.</pre>
                    <div class="cnblogs_code_toolbar"><span class="cnblogs_code_copy"><a href="#" title="复制代码"><img
                      src="//common.cnblogs.com/images/copycode.gif" alt="复制代码"></a></span></div>
                  </div>
                  <p>&nbsp;</p>
                  <div class="cnblogs_code"><img id="code_img_closed_c3dfeb87-d8ef-418d-9eb1-2cee1911228a"
                                                 class="code_img_closed"
                                                 src="https://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif"
                                                 alt=""><img id="code_img_opened_c3dfeb87-d8ef-418d-9eb1-2cee1911228a"
                                                             class="code_img_opened" style="display: none;"
                                                             onclick="cnblogs_code_hide('c3dfeb87-d8ef-418d-9eb1-2cee1911228a',event)"
                                                             src="https://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif"
                                                             alt="">
                    <div id="cnblogs_code_open_c3dfeb87-d8ef-418d-9eb1-2cee1911228a" class="cnblogs_code_hide">
<pre><span style="color: #000000;">namespace java thrift.generated
namespace py py.thrift.generated

typedef i16 </span><span style="color: #0000ff;">short</span><span style="color: #000000;">
typedef i32 </span><span style="color: #0000ff;">int</span><span style="color: #000000;">
typedef i64 </span><span style="color: #0000ff;">long</span><span style="color: #000000;">
typedef bool </span><span style="color: #0000ff;">boolean</span><span style="color: #000000;">
typedef string String

struct Person{
    </span>1<span style="color: #000000;">:optional String username,
    </span>2:optional <span style="color: #0000ff;">int</span><span style="color: #000000;"> age,
    </span>3:optional <span style="color: #0000ff;">boolean</span><span style="color: #000000;"> married
}

exception DataException {
    </span>1<span style="color: #000000;">:optional String message,
    </span>2<span style="color: #000000;">:optional String callStack,
    </span>3<span style="color: #000000;">:optional String date
}

service PersonService {
    Person getPersonByUsername(</span>1:required String username) <span style="color: #0000ff;">throws</span> (1<span
  style="color: #000000;">:DataException dataException),
    </span><span style="color: #0000ff;">void</span> savePerson(1:required Person person) <span style="color: #0000ff;">throws</span> (1<span
  style="color: #000000;">:DataException dataException)
}</span></pre>
                    </div>
                    <span class="cnblogs_code_collapse">data.thrift</span></div>
                  <h2>语法规则:</h2>
                  <h2 id="thrift-interface-description-language">Thrift interface description language</h2>
                  <p>&nbsp;参考官方：<a href="http://thrift.apache.org/docs/idl">http://thrift.apache.org/docs/idl</a></p>
                  <div style="text-align: right;"><a href="#_labelTop" style="color:rgb(22, 159, 230)">回到顶部</a><a
                    name="_label3"></a></div>
                  <h1>生成代码</h1>
                  <div class="cnblogs_code">
                    <pre><code class="hljs xml">thrift --gen <span class="hljs-tag">&lt;<span
                      class="hljs-name">language</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">Thrift</span> <span
                      class="hljs-attr">filename</span>&gt;</span></code></pre>
                    <pre>thrift --gen py data.thrift</pre>
                    <pre>thrift --gen java data.thrift</pre>
                  </div>
                  <p>&nbsp;<img
                    src="https://img2018.cnblogs.com/blog/1399348/201910/1399348-20191015222939032-2054620899.png"
                    alt=""></p>
                  <p>&nbsp;源码位置：</p>
                  <p><a href="https://github.com/mikeygithub/netty/tree/master/src/main/java/com/mikey/thrift">https://github.com/mikeygithub/netty/tree/master/src/main/java/com/mikey/thrift</a>
                  </p>
                  <p><a href="https://github.com/mikeygithub/netty/tree/master/src/main/java/com/mikey/thriftpython">https://github.com/mikeygithub/netty/tree/master/src/main/java/com/mikey/thriftpython</a>&nbsp;
                  </p>
                  <div style="text-align: right;"><a href="#_labelTop" style="color:rgb(22, 159, 230)">回到顶部</a><a
                    name="_label4"></a></div>
                  <h1 class="pre">&nbsp;简单运行</h1>
                  <p>客户端：</p>
                  <div class="cnblogs_code" onclick="cnblogs_code_show('6587ee60-1839-428e-9833-f5b6ec7e6802')"><img
                    id="code_img_closed_6587ee60-1839-428e-9833-f5b6ec7e6802" class="code_img_closed"
                    src="https://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt=""><img
                    id="code_img_opened_6587ee60-1839-428e-9833-f5b6ec7e6802" class="code_img_opened"
                    style="display: none;" onclick="cnblogs_code_hide('6587ee60-1839-428e-9833-f5b6ec7e6802',event)"
                    src="https://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif" alt="">
                    <div id="cnblogs_code_open_6587ee60-1839-428e-9833-f5b6ec7e6802" class="cnblogs_code_hide">
<pre><span style="color: #0000ff;">package</span><span style="color: #000000;"> com.mikey.thrift;

</span><span style="color: #0000ff;">import</span><span style="color: #000000;"> org.apache.thrift.protocol.TCompactProtocol;
</span><span style="color: #0000ff;">import</span><span style="color: #000000;"> org.apache.thrift.transport.TFramedTransport;
</span><span style="color: #0000ff;">import</span><span style="color: #000000;"> org.apache.thrift.transport.TSocket;

</span><span style="color: #008000;">/**</span><span style="color: #008000;">
 * @ProjectName netty
 * @Author 麦奇
 * @Email biaogejiushibiao@outlook.com
 * @Date 9/29/19 4:13 PM
 * @Version 1.0
 * @Description:
 *</span><span style="color: #008000;">*/</span>

<span style="color: #0000ff;">public</span> <span style="color: #0000ff;">class</span><span style="color: #000000;"> ThriftClient {
    </span><span style="color: #0000ff;">public</span> <span style="color: #0000ff;">static</span> <span
    style="color: #0000ff;">void</span><span style="color: #000000;"> main(String[] args) {

        TFramedTransport transport </span>= <span style="color: #0000ff;">new</span> TFramedTransport(<span
    style="color: #0000ff;">new</span> TSocket("localhost", 8899), 600<span style="color: #000000;">);

        TCompactProtocol tCompactProtocol </span>= <span style="color: #0000ff;">new</span><span
    style="color: #000000;"> TCompactProtocol(transport);

        PersonService.Client client </span>= <span style="color: #0000ff;">new</span><span style="color: #000000;"> PersonService.Client(tCompactProtocol);

        </span><span style="color: #0000ff;">try</span><span style="color: #000000;"> {
            transport.open();
            Person mikey </span>= client.getPersonByUsername("mikey"<span style="color: #000000;">);
            System.out.println(mikey.getUsername());
            System.out.println(mikey.getAge());
            System.out.println(mikey.isMarried());
            client.savePerson(mikey);

        }</span><span style="color: #0000ff;">catch</span><span style="color: #000000;"> (Exception e){
            </span><span style="color: #0000ff;">throw</span> <span style="color: #0000ff;">new</span><span
    style="color: #000000;"> RuntimeException(e.getMessage(),e);
        }</span><span style="color: #0000ff;">finally</span><span style="color: #000000;"> {
            transport.close();
        }
    }
}</span></pre>
                    </div>
                    <span class="cnblogs_code_collapse">View Code</span></div>
                  <p>服务器：</p>
                  <div class="cnblogs_code" onclick="cnblogs_code_show('263d73cb-b8fa-4664-bf7a-9e0b3745ad48')"><img
                    id="code_img_closed_263d73cb-b8fa-4664-bf7a-9e0b3745ad48" class="code_img_closed"
                    src="https://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt=""><img
                    id="code_img_opened_263d73cb-b8fa-4664-bf7a-9e0b3745ad48" class="code_img_opened"
                    style="display: none;" onclick="cnblogs_code_hide('263d73cb-b8fa-4664-bf7a-9e0b3745ad48',event)"
                    src="https://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif" alt="">
                    <div id="cnblogs_code_open_263d73cb-b8fa-4664-bf7a-9e0b3745ad48" class="cnblogs_code_hide">
<pre><span style="color: #0000ff;">package</span><span style="color: #000000;"> com.mikey.thrift;

</span><span style="color: #0000ff;">import</span><span style="color: #000000;"> org.apache.thrift.TProcessorFactory;
</span><span style="color: #0000ff;">import</span><span style="color: #000000;"> org.apache.thrift.protocol.TCompactProtocol;
</span><span style="color: #0000ff;">import</span><span style="color: #000000;"> org.apache.thrift.server.THsHaServer;
</span><span style="color: #0000ff;">import</span><span style="color: #000000;"> org.apache.thrift.transport.TFastFramedTransport;
</span><span style="color: #0000ff;">import</span><span style="color: #000000;"> org.apache.thrift.transport.TNonblockingServerSocket;
</span><span style="color: #0000ff;">import</span><span style="color: #000000;"> org.apache.thrift.transport.TTransportException;

</span><span style="color: #008000;">/**</span><span style="color: #008000;">
 * @ProjectName netty
 * @Author 麦奇
 * @Email biaogejiushibiao@outlook.com
 * @Date 9/29/19 4:06 PM
 * @Version 1.0
 * @Description:
 *</span><span style="color: #008000;">*/</span>

<span style="color: #0000ff;">public</span> <span style="color: #0000ff;">class</span><span style="color: #000000;"> ThriftServer {
    </span><span style="color: #0000ff;">public</span> <span style="color: #0000ff;">static</span> <span
    style="color: #0000ff;">void</span> main(String[] args) <span style="color: #0000ff;">throws</span><span
    style="color: #000000;"> TTransportException {

        TNonblockingServerSocket socket </span>= <span
    style="color: #0000ff;">new</span> TNonblockingServerSocket(8899<span style="color: #000000;">);
        </span><span style="color: #008000;">//</span><span style="color: #008000;">连接设置</span>
        THsHaServer.Args args1 = <span style="color: #0000ff;">new</span> THsHaServer.Args(socket).minWorkerThreads(2).maxWorkerThreads(4<span
    style="color: #000000;">);
        </span><span style="color: #008000;">//</span><span style="color: #008000;">处理器</span>
        PersonService.Processor&lt;PersonServiceImpl&gt; personServiceProcessor = <span
    style="color: #0000ff;">new</span> PersonService.Processor&lt;&gt;(<span style="color: #0000ff;">new</span><span
    style="color: #000000;"> PersonServiceImpl());
        </span><span style="color: #008000;">//</span><span style="color: #008000;">协议工厂</span>
        args1.protocolFactory(<span style="color: #0000ff;">new</span><span style="color: #000000;"> TCompactProtocol.Factory());
        args1.transportFactory(</span><span style="color: #0000ff;">new</span><span style="color: #000000;"> TFastFramedTransport.Factory());
        args1.processorFactory(</span><span style="color: #0000ff;">new</span><span style="color: #000000;"> TProcessorFactory(personServiceProcessor));
        </span><span style="color: #008000;">//</span><span style="color: #008000;">服务</span>
        THsHaServer tHsHaServer = <span style="color: #0000ff;">new</span><span style="color: #000000;"> THsHaServer(args1);
        </span><span style="color: #008000;">//</span><span style="color: #008000;">启动：异步非阻塞（死循环）</span>
<span style="color: #000000;">        tHsHaServer.serve();
    }
}</span></pre>
                    </div>
                    <span class="cnblogs_code_collapse">View Code</span></div>
                  <p>&nbsp;</p>
                </div>
              </div>
              <div id="MySignature" style="display: block;">合群是堕落的开始 优秀的开始是孤行</div>
              <div class="clear"></div>
              <div id="blog_post_info_block">
                <div id="blog_post_info">
                  <div id="green_channel">
                    <a href="#" id="green_channel_digg">好文要顶</a>
                    <a id="green_channel_follow" href="#">关注我</a>
                    <a id="green_channel_favorite" href="#">收藏该文</a>
                    <a id="green_channel_weibo" href="#" title="分享至新浪微博"><img
                      src="https://common.cnblogs.com/images/icon_weibo_24.png" alt=""></a>
                    <a id="green_channel_wechat" href="#" title="分享至微信"><img
                      src="https://common.cnblogs.com/images/wechat.png" alt=""></a>
                  </div>
                  <div id="author_profile">
                    <div id="author_profile_info" class="author_profile_info">
                      <a href="https://home.cnblogs.com/u/biaogejiushibiao/" target="_blank"><img
                        src="https://pic.cnblogs.com/face/1399348/20180512121950.png" class="author_avatar" alt=""></a>
                      <div id="author_profile_detail" class="author_profile_info">
                        <a href="https://home.cnblogs.com/u/biaogejiushibiao/">麦奇</a><br>
                        <a href="https://home.cnblogs.com/u/biaogejiushibiao/followees/">关注 - 26</a><br>
                        <a href="https://home.cnblogs.com/u/biaogejiushibiao/followers/">粉丝 - 12</a>
                      </div>
                    </div>
                    <div class="clear"></div>
                    <div id="author_profile_honor"></div>
                    <div id="author_profile_follow">
                    </div>
                  </div>
                  <div id="div_digg">
                    <div class="diggit" onclick="votePost(11606630,'Digg')">
                      <span class="diggnum" id="digg_count">0</span>
                    </div>
                    <div class="buryit" onclick="votePost(11606630,'Bury')">
                      <span class="burynum" id="bury_count">0</span>
                    </div>
                    <div class="clear"></div>
                    <div class="diggword" id="digg_tips">
                    </div>
                  </div>

                </div>
                <div class="clear"></div>
                <div id="post_next_prev">

                  <a href="https://www.cnblogs.com/biaogejiushibiao/p/11581279.html" class="p_n_p_prefix">« </a> 上一篇： <a
                  href="https://www.cnblogs.com/biaogejiushibiao/p/11581279.html" title="发布于 2019-09-24 21:36">gRPC
                  Learning Notes</a>
                  <br>
                  <a href="https://www.cnblogs.com/biaogejiushibiao/p/11619282.html" class="p_n_p_prefix">» </a> 下一篇： <a
                  href="https://www.cnblogs.com/biaogejiushibiao/p/11619282.html" title="发布于 2019-10-04 00:27">Node.js
                  Learning Notes</a>

                </div>
              </div>
            </div>
            <div class="postDesc">posted @
              <span id="post-date">2019-09-29 11:05</span>&nbsp;
              <a href="https://www.cnblogs.com/biaogejiushibiao/">麦奇</a>&nbsp;
              阅读(<span id="post_view_count">16</span>)&nbsp;
              评论(<span id="post_comment_count">0</span>)&nbsp;
              <a href="https://i.cnblogs.com/EditPosts.aspx?postid=11606630" rel="nofollow">
                编辑
              </a>
              <a href="#">收藏</a></div>
          </div>
        </div>
        <!--博文详情 e-->
      </div>
      <div
        style="width: 20%;height:auto;border-radius:5px;background-color:#fff;float: left;margin:15px 0px;padding: 0px 0px">
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
              <div id="sidebar_postcategory" class="catListPostCategory sidebar-block">
                <h3 class="catListTitle">
                  随笔分类
                  <span style="font-size:11px;font-weight:normal">(204)</span>
                </h3>
                <ul>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1253707.html" rel="" target="">
                      Algorithm
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1586934.html" rel="" target="">
                      blockchain
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1246852.html" rel="" target="">
                      C/C++(1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1466846.html" rel="" target="">
                      GO(5)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1246854.html" rel="" target="">
                      HTML5
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1246850.html" rel="" target="">
                      Java(36)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1246851.html" rel="" target="">
                      JavaScript(6)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1261918.html" rel="" target="">
                      JavaWeb(9)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1255610.html" rel="" target="">
                      JDBC(5)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1261917.html" rel="" target="">
                      JSP(2)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1437351.html" rel="" target="">
                      JVM(1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1246855.html" rel="" target="">
                      Linux(12)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1430371.html" rel="" target="">
                      MQ(1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1394910.html" rel="" target="">
                      Redis(1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1248091.html" rel="" target="">
                      Shell(2)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1416215.html" rel="" target="">
                      SpringCloud(1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1264173.html" rel="" target="">
                      Tools(1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1338677.html" rel="" target="">
                      Vue(2)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1248013.html" rel="" target="">
                      XML(1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1273195.html" rel="" target="">
                      报错汇总(13)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1257133.html" rel="" target="">
                      编程思想(2)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1256500.html" rel="" target="">
                      框架集合(30)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1395549.html" rel="" target="">
                      其他资料(1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1294670.html" rel="" target="">
                      软件工程(3)
                    </a>

                  </li>
                  <li>

                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1256475.html" rel="" target="">
                      设计模式(5)
                    </a>

                  </li>
                  <li>

                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1301993.html" rel="" target="">
                      数据结构(1)
                    </a>

                  </li>
                  <li>

                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1246853.html" rel="" target="">
                      数据库(12)
                    </a>

                  </li>
                  <li>

                    <a href="https://www.cnblogs.com/biaogejiushibiao/category/1275752.html" rel="" target="">
                      我的笔记(51)
                    </a>

                  </li>

                </ul>

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
              <!--评论-->
              <div id="sidebar_recentcomments" class="sidebar-block">
                <div class="catListComment" style="text-align: left;overflow: hidden;">
                  <h3 class="catListTitle">最新评论</h3>

                  <div class="RecentCommentBlock">
                    <ul>
                      <li class="recent_comment_title"><a href="https://www.cnblogs.com/biaogejiushibiao/p/9439103.html#4411479">1. Re:Hibernate框架报错：org.hibernate.PropertyAccessException: IllegalArgumentException occurred while calling setter of com.mikey.hibernate.domain.Person.pid</a></li>
                      <li class="recent_comment_body">背景很有意思呀</li>
                      <li class="recent_comment_author">--未生一</li>
                      <li class="recent_comment_title"><a href="https://www.cnblogs.com/biaogejiushibiao/p/11581279.html#4371652">2. Re:gRPC  学习笔记</a></li>
                      <li class="recent_comment_body">大佬技术牛逼啊</li>
                      <li class="recent_comment_author">--steakliu</li>
                      <li class="recent_comment_title"><a href="https://www.cnblogs.com/biaogejiushibiao/articles/11520349.html#4366250">3. Re:[转]LVS负载均衡（LVS简介、三种工作模式、十种调度算法）</a></li>
                      <li class="recent_comment_body">我不管你会什么高并非，负载均衡，高可用，分布式搜索引擎，你都要带我！！！！！！！！！！</li>
                      <li class="recent_comment_author">--bubbleTg</li>
                      <li class="recent_comment_title"><a href="https://www.cnblogs.com/biaogejiushibiao/articles/11520349.html#4361588">4. Re:[转]LVS负载均衡（LVS简介、三种工作模式、十种调度算法）</a></li>
                      <li class="recent_comment_body">大佬技术牛逼啊</li>
                      <li class="recent_comment_author">--steakliu</li>
                      <li class="recent_comment_title"><a href="https://www.cnblogs.com/biaogejiushibiao/p/9280841.html#4342935">5. Re:Microsoft SQL Server on Linux破解 2G内存限制</a></li>
                      <li class="recent_comment_body">sql 2017 没用</li>
                      <li class="recent_comment_author">--星炎123</li>
                      <li class="recent_comment_title"><a href="https://www.cnblogs.com/biaogejiushibiao/p/10061466.html#4304751">6. Re:SpringBoot中普通类无法通过@Autowired自动注入Service、dao等bean解决方法</a></li>
                      <li class="recent_comment_body">只关注右下角</li>
                      <li class="recent_comment_author">--zhao~kun</li>
                      <li class="recent_comment_title"><a href="https://www.cnblogs.com/biaogejiushibiao/p/9789885.html#4297400">7. Re:SSM日常报错</a></li>
                      <li class="recent_comment_body">java.lang.NoSuchMethodError: org.springframework.util.Assert.notNull(Ljava/lang/Object;Ljava/util/fu...</li>
                      <li class="recent_comment_author">--马总丢了紧箍咒</li>
                      <li class="recent_comment_title"><a href="https://www.cnblogs.com/biaogejiushibiao/p/9280841.html#4293069">8. Re:Microsoft SQL Server on Linux破解 2G内存限制</a></li>
                      <li class="recent_comment_body">@ 阿晟哥哥们你的解决了吗？ 我的也是改动不成功 感觉这作者是抄了3.25G时候的 版本 如今2G限制的时候 Python替换数据语句还没有任何变化。尝试过了 低版本的安装包可以的...</li>
                      <li class="recent_comment_author">--Bruin.wang</li>
                      <li class="recent_comment_title"><a href="https://www.cnblogs.com/biaogejiushibiao/p/9280841.html#4254909">9. Re:Microsoft SQL Server on Linux破解 2G内存限制</a></li>
                      <li class="recent_comment_body">我按照你的方法不行啊  还是提示限制2000</li>
                      <li class="recent_comment_author">--阿晟哥</li>
                      <li class="recent_comment_title"><a href="https://www.cnblogs.com/biaogejiushibiao/p/9292061.html#4238081">10. Re:关于java程序在运行时出现a java exception has occured时解决方法</a></li>
                      <li class="recent_comment_body"><a href="" target="_blank"></a></li>
                      <li class="recent_comment_author">--林儿大大</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!--文章档案-->
              <div id="sidebar_articlearchive" class="catListArticleArchive sidebar-block">
                <h3 class="catListTitle">
                  文章档案
                  <span style="font-size:11px;font-weight:normal">(9)</span>
                </h3>
                <ul>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/archives/2019/09.html" rel="nofollow noopener noreferrer" target="">
                      2019年9月(1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/archives/2019/08.html" rel="nofollow noopener noreferrer" target="">
                      2019年8月(3)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/archives/2019/07.html" rel="nofollow noopener noreferrer" target="">
                      2019年7月(1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/archives/2019/06.html" rel="nofollow noopener noreferrer" target="">
                      2019年6月(1)
                    </a>
                  </li>
                  <li>

                    <a href="https://www.cnblogs.com/biaogejiushibiao/archives/2019/05.html" rel="nofollow noopener noreferrer" target="">
                      2019年5月(1)
                    </a>

                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/archives/2019/03.html" rel="nofollow noopener noreferrer" target="">
                      2019年3月(1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/archives/2018/07.html" rel="nofollow noopener noreferrer" target="">
                      2018年7月(1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/archives/2019/03.html" rel="nofollow noopener noreferrer" target="">
                      2019年3月(1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/archives/2018/07.html" rel="nofollow noopener noreferrer" target="">
                      2018年7月(1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/archives/2019/03.html" rel="nofollow noopener noreferrer" target="">
                      2019年3月(1)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cnblogs.com/biaogejiushibiao/archives/2018/07.html" rel="nofollow noopener noreferrer" target="">
                      2018年7月(1)
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
</template>
<script>
export default {
  name: 'blog-info',
  data () {
    return {
      key: '',
      reverse: true,
      select: '1',
      activeIndex: '1',
      activeIndex2: '1'
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

  .el-card {
    line-height: 50px;
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
    word-break: break-all;
  }

  .catListTitle {
    font-size: 18px;
    padding: 10px 20px;
    background-color: #169fe6;
    color: #fff;
    font-weight: normal;
    border: #169fe6;
    line-height: 30px;
    border-radius: 5px;
  }
  #blog-news {
    overflow: visible;
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

  /*文章内容*/
  #topics {
    line-height: 15px;
    background: #fff;
    overflow: hidden;
    padding: 20px;
    border: 1px solid #dedede;
    text-align: left;
  }

  #topics .postTitle a {
    color: #333;
  }

  .postTitle a:link {
    color: #7e8c8d;
  }

  #topics .postTitle {
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 20px;
    line-height: 1.8;
    color: #333;
  }

  .clear {
    clear: both;
  }

  #cnblogs_post_body {
    color: #333;
    line-height: 1.8;
  }

  #cnblogs_post_body {
    word-break: break-word;
  }

  #cnblogs_post_body {
    margin-bottom: 20px;
  }

  #cnblogs_post_bodys a {
    display: block;
    transition: all 1s;
  }

  #cnblogs_post_bodys a {
    color: #21759b;
    transition-delay: 0s;
    transition-duration: 0.4s;
    transition-property: all;
    transition-timing-function: linear;
  }

  #sidebar_shortcut li {
    /*display: inline;*/
  }

  #cnblogs_post_body {
    word-break: break-word;
  }

  #cnblogs_post_body ol, #cnblogs_post_body ul {
    margin: 0 0 1em;
    margin-left: 40px;
    padding: 0;
  }

  ol {
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  ol li {
    margin-top: 10px;
    display: inline;
    text-align: left;
  }

  #topics h1 {
    display: block;
    text-align: left;
    font-size: 4em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  #cnblogs_post_body h1 {
    font-size: 28px;
    font-weight: bold;
    line-height: 1.5;
    margin: 10px 0;
  }

  #cnblogs_post_bodys p {
    margin: 10px auto;
    text-indent: 0;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .cnblogs_code {
    background-color: #f5f5f5;
    font-family: Courier New !important;
    font-size: 12px !important;
    border: 1px solid #ccc;
    padding: 5px;
    overflow: auto;
    margin: 5px 0;
    color: #000;
  }

  #cnblogs_post_body {
    color: #333;
    line-height: 1.8;
  }

  #green_channel {
    padding: 10px 0;
    margin-bottom: 10px;
    margin-top: 10px;
    border: #c0c0c0 1px dashed;
    font-size: 12px;
    width: 350px;
    text-align: center;
  }

  #green_channel #green_channel_digg {
    background-color: #2daebf;
  }

  #green_channel a:link, #green_channel a:visited, #green_channel a:active {
    color: #fff !important;
    border: none !important;
  }

  #green_channel a {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAkCAYAAABIdFAMAAAAGXRFW…99ZOdcZGvt4mJjzMVKqcha68iIePB86GAiOv8CDADlIUQBs7MD3wAAAABJRU5ErkJggg%3D%3D) repeat-x;
    display: inline-block;
    padding: 3px 8px;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    margin-right: 10px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 10px;
    -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, .5);
    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .5);
    text-shadow: 0 -1px 1px rgba(0, 0, 0, .25);
    vertical-align: middle;
  }

  #green_channel #green_channel_follow {
    background-color: #e33100;
  }

  #green_channel #green_channel_favorite {
    background-color: #ffb515;
  }

  #green_channel #green_channel_weibo, #green_channel #green_channel_wechat {
    background: none;
    padding: 3px 2px;
    -moz-border-radius: none;
    -webkit-border-radius: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    text-shadow: none;
  }

  #green_channel #green_channel_weibo, #green_channel #green_channel_wechat {
    background: none;
    padding: 3px 2px;
    -moz-border-radius: none;
    -webkit-border-radius: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    text-shadow: none;
  }

  #author_profile {
    float: left;
    width: 280px;
    margin-top: 0;
    margin-bottom: 10px;
    color: #000;
    margin-left: 0;
    font-size: 12px;
  }

  .author_profile_info {
    float: left;
    line-height: 18px;
  }

  #div_digg {
    float: right;
    margin-bottom: 10px;
    margin-right: 30px;
    font-size: 12px;
    width: 125px;
    text-align: center;
    margin-top: 10px;
  }

  #post_next_prev {
    line-height: 200%;
    margin: 10px 0;
    font-size: 14px;
  }

  #post_next_prev {
    line-height: 1.8;
    font-size: 12px;
  }

  #topics .postDesc {
    font-size: 14px;
    color: #777;
    line-height: 200%;
    margin: 10px 0;
  }

  .postDesc {
    clear: both;
    color: #bcbcbc;
    float: none;
    text-align: left;
    line-height: 200%;
    font-size: 12px;
  }

  .postDesc a {
    color: #2c3e50;
  }

  .author_avatar {
    vertical-align: top;
    float: left;
    margin-right: 5px;
    padding-top: 5px;
    padding-left: 2px;
    border: 0;
  }

  .diggit {
    float: left;
    width: 46px;
    height: 52px;
    background: url('/static/images/upup.gif') no-repeat;
    text-align: center;
    cursor: pointer;
    margin-top: 2px;
    padding-top: 5px;
  }

  .buryit {
    float: right;
    margin-left: 20px;
    width: 46px;
    height: 52px;
    background: url('/static/images/downdown.gif') no-repeat;
    text-align: center;
    cursor: pointer;
    margin-top: 2px;
    padding-top: 5px;
  }

  #blog_post_info_block a {
    color: #2c3e50;
  }
  .sidebar-block ul li {
    line-height: 2;
    border-bottom: 1px solid #e9e9e9;
    padding: 15px 10px 15px 20px;
    font-size: 14px;
    color: #777;
  }
</style>
